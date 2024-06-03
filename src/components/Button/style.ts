import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: '#6366F1',
        borderRadius: 24,
        elevation: 5,
        flexDirection: 'row',
        justifyContent: 'center',
        padding: 16,
        shadowColor: '#000',
        shadowOffset: {
            height: 2,
            width: 0,
        },
        shadowOpacity: 0.25,
        shadowRadius: 3.84,
    },
    buttonText: {
        color: '#FFFFFF',
        fontSize: 16,
        fontWeight: '600',
        textAlign: 'center',
    },
});

const backButtonStyles = StyleSheet.create({
    backButton: {
        flexDirection: 'row',
        paddingLeft: 20,
    },
    backButtonText: {
        color: '#007AFF',
        marginLeft: 4,
    },
});

export { styles, backButtonStyles };