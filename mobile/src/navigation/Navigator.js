import { NavigationContainer } from "@react-navigation/native";
import DrawerStack from "./DrawerStack";

export default function Navigator() {
  return (
    <NavigationContainer>
      <DrawerStack />
    </NavigationContainer>
  )
}