import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";

export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    header: {
        width: '100%',
        height: Dimensions.get('window').height/6,
        backgroundColor: themes.colors.primary,
        paddingHorizontal: 20,
        justifyContent: 'center',
    },
    greeting: {
        fontSize: 20,
        color: '#FFF',
        marginTop: 20,
    },
        boxInput: {
        width: '80%',
    },
})