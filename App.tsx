import "react-native-gesture-handler";
import { NavigationContainer } from "@react-navigation/native";

import { RootStack } from "./src/navigation";
import theme from "~/lib/theme";

export default function App() {
	return (
		<NavigationContainer theme={theme}>
			<RootStack />
		</NavigationContainer>
	);
}
