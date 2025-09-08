import { StyleSheet, Dimensions } from "react-native";
import { themes } from "../../global/themes";


export const style = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        // padding: 20,
    },
    boxTop: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        // backgroundColor: 'red',
        alignItems: 'center',
        justifyContent: 'center',
    },
    boxMid: {
        height: Dimensions.get('window').height/4,
        width: '100%',
        // backgroundColor: 'green',
        paddingHorizontal: 37,
    },
    boxBottom: {
        height: Dimensions.get('window').height/3,
        width: '100%',
        // backgroundColor: 'blue',
        alignItems: 'center',

    },
    logo: {
        width: 80,
        height: 80,
    },
    text: {
        fontWeight: 'bold',
        marginTop: 48,
        fontSize: 18,
    },
    textBottom: {
        fontSize: 16,
        
    }

})