 import { StyleSheet } from "react-native";
 import { themes } from "../../global/themes";

 export const style = StyleSheet.create({
    modalOverlay: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'baseline',
        backgroundColor: themes.colors.transparent
    },
    container: {
        width: '80%',
        padding: 16,
        backgroundColor: '#FFF',
        elevation: 5,
        alignItems: 'center'
    }
 })