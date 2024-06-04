import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "~/navigation/stack";
import { auth } from "~/utils/firebase";

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export async function HandleLogout() {
    const navigation = useNavigation<NavigationProps>()

}