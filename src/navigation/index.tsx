import { NavigationContainer } from "@react-navigation/native";
import { RootStack } from "./RootStack";

export function Routes() {
  return (
    <NavigationContainer>
      <RootStack />
    </NavigationContainer>
  )
}