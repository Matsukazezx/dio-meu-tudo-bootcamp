import React from "react";
import { View, Text, Image, TouchableOpacity, Linking } from "react-native";
import { Ionicons } from "@expo/vector-icons"; 
import styles from "./MainScreenStyles.js";

export default function MainScreen({ navigation }) {
  return (
    <View style={styles.container}>
      <View style={styles.avatarWrapper}>
        <Image source={require("../../assets/image.png")} style={styles.avatar} />
      </View>

      <Text style={styles.name}>Vitor Souza</Text>
      <Text style={styles.subtitle}>Desenvolvedor Full Stack</Text>
      <View style={styles.linksContainer}>
        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL("https://github.com/matsukazezx")}
        >
          <Ionicons name="logo-github" size={22} color="#1e293b" />
          <Text style={styles.linkText}>GitHub</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() =>
            Linking.openURL("https://www.linkedin.com/in/vitor-augusto-souza/")
          }
        >
          <Ionicons name="logo-linkedin" size={22} color="#0A66C2" />
          <Text style={styles.linkText}>LinkedIn</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={styles.linkButton}
          onPress={() => Linking.openURL("mailto:vitor.user.augusto@gmail.com")}
        >
          <Ionicons name="mail-outline" size={22} color="#ef4444" />
          <Text style={styles.linkText}>Email</Text>
        </TouchableOpacity>
      </View>

      <TouchableOpacity
        style={styles.primaryButton}
        onPress={() => navigation.navigate("Skills")}
      >
        <Text style={styles.primaryButtonText}>Ver Skills</Text>
      </TouchableOpacity>
    </View>
  );
}
