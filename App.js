import { useFonts } from "expo-font";
import ShopNavigator from "./src/navigation/ShopNavigator";


export default function App() {
  const [fontsLoaded] = useFonts({
    DancingScript: require("./src/fonts/Lato-Black.ttf"),
  });

  if (!fontsLoaded) {
    return null;
  }
  return<ShopNavigator />

}