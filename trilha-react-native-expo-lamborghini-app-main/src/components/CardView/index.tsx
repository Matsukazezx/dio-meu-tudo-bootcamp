import React, { useEffect, useState } from "react";
import { View, Text, Button, Image, ActivityIndicator } from "react-native";
import Logo from "../../../assets/logo.png";
import { styles } from "./style";
import Divider from "../Divider";
import { CAR_ASSETS_BASE_URL } from "../../constants/car";
import BuyButton from "../BuyButton";
import { CarModel } from "./props";
import { handleNextItem, handlePreviousItem, loadCarData } from "./actions";

export default function CardView() {
  const [carData, setCarData] = useState<CarModel | null>(null);
  const [loading, setLoading] = useState<boolean>(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    (async () => {
      try {
        setLoading(true);
        setError(null);
        await loadCarData(8, setCarData);
      } catch (err) {
        setError("Erro ao carregar os dados do carro. Tente novamente.");
      } finally {
        setLoading(false);
      }
    })();
  }, []);

  const renderLogoBox = () => (
    <View style={styles.logoContainer}>
      <Image style={styles.imageLogo} source={Logo} />
    </View>
  );

  const renderCarDetails = () => (
    <View style={{ alignItems: "center" }}>
      <Text style={styles.carBrand}>Lamborghini</Text>
      <Text style={styles.carName}>{carData?.carName}</Text>
    </View>
  );

  const renderCarImage = () => (
    <Image
      style={styles.image}
      source={{
        uri: `${CAR_ASSETS_BASE_URL}${carData?.id}.png`,
      }}
    />
  );

  const renderPriceControls = () => (
    <View style={styles.priceLabelContainer}>
      <Button
        title="<"
        color={"#01A6B3"}
        onPress={() => handlePreviousItem(carData, setCarData)}
      />
      <Text style={styles.priceLabel}> {carData?.price}</Text>
      <Button
        title=">"
        color={"#01A6B3"}
        onPress={() => handleNextItem(carData, setCarData)}
      />
    </View>
  );

  if (loading) {
    return (
      <View style={[styles.imageContainer, { justifyContent: "center", alignItems: "center" }]}>
        <ActivityIndicator size="large" color="#01A6B3" />
        <Text style={{ color: "#fff", marginTop: 10 }}>Carregando carro...</Text>
      </View>
    );
  }

  if (error) {
    return (
      <View style={[styles.imageContainer, { justifyContent: "center", alignItems: "center" }]}>
        <Text style={{ color: "red", textAlign: "center" }}>{error}</Text>
      </View>
    );
  }

  return (
    <View style={styles.imageContainer}>
      {renderLogoBox()}
      <Divider />
      {renderCarDetails()}
      {renderCarImage()}
      <Divider />
      <BuyButton />
      {renderPriceControls()}
    </View>
  );
}
