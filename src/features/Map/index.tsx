import { View, Text, Button } from "react-native";
import { useAppNavigation } from "../routes/Routes.navigation";
import { useMapScreenStyles } from "./MapScreen.styles";

export default function MapScreen() {
  const { navigate } = useAppNavigation();

  return (
    <View style={{ flex: 1, alignItems: "center", justifyContent: "center" }}>
      <Text>Map Screen</Text>

      <Button
        onPress={() => {
          navigate("MapScreen");
        }}
        title="Ir para o mapa"
      />
    </View>
  );
}
