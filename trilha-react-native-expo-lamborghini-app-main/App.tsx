import { StatusBar } from "expo-status-bar";
import GarageScreen from "./src/screens/GarageScreen";

export default function App() {
  return (
    <>
      <StatusBar style="light" backgroundColor="#1E1E20" />
      <GarageScreen />
    </>
  );
}
