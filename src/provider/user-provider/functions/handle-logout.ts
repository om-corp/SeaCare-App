import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";
import { RootStackParamList } from "~/navigation/navigation-stack";
import { auth } from "~/utils/firebase";

type NavigationProps = StackNavigationProp<RootStackParamList, 'Access'>

export default async function HandleLogout() {
    const navigation = useNavigation<NavigationProps>()

}