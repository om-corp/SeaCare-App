import { StyleSheet } from "react-native";
import { theme } from "~/lib/theme";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: 'transparent',
        borderColor: 'transparent',
        borderRadius: 6,
        borderStyle: 'solid',
        borderWidth: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
    },
    buttonText: {
        fontSize: theme.fonts.sizes.base,
        fontWeight: '600',
        textAlign: 'center',
    },
});

export { styles };