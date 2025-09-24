import React, { createContext, useContext, useRef, useEffect } from "react";
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Input } from "../components/input";
import { themes } from "../global/themes";
import { Flag } from "../components/Flag";

export const AuthContextList: any = createContext({});

const flags = [
    { caption: 'Urgente', color: themes.colors.red },
    { caption: 'Opcional', color: themes.colors.blueLight }
];

export const AuthProviderList = (Props: any): any => {
    const modalizeRef = useRef<Modalize>(null);
    const onOpen = () => {
        modalizeRef?.current?.open();
    }

    useEffect(() => {
        onOpen()
    }, [])

    const _renderFlags = () => {
        return (
            flags.map((item, index) => (
                <TouchableOpacity>
                    <Flag
                        caption={item.caption}
                        color={item.color}
                    />
                </TouchableOpacity>
            ))
        )
    }

    const _container = () => {
        return (
            <View style={styles.container}>
                <View style={styles.header}>
                    <TouchableOpacity>
                        <MaterialIcons
                            name="close"
                            size={30}
                        />
                    </TouchableOpacity>

                    <Text style={styles.title}>Criar Tarefa</Text>

                    <TouchableOpacity>
                        <AntDesign
                            name="check"
                            size={30}
                        />
                    </TouchableOpacity>
                </View>
                <View style={styles.content}>
                    <Input
                        title="Titulo"
                        labelStyle={styles.label}
                    />
                    <Input
                        title="Descrição"
                        labelStyle={styles.label}
                        height={100}
                        multiline
                    />
                </View>
                <View style={{ width: '40%' }}>
                    <Input
                        title="Tempo limite:"
                        labelStyle={styles.label}
                    />
                </View>
                <View style={styles.containerFlag}>
                    <Text style={styles.label}>Flags:</Text>
                    <View style={styles.rowFlags}>
                        {_renderFlags()}
                    </View>
                </View>
            </View>
        )
    }
    return (
        <AuthContextList.Provider value={{ onOpen }}>
            {Props.children}
            <Modalize
                ref={modalizeRef}
                // modalHeight={Dimensions.get('window').height / 1.3}
                childrenStyle={{ height: Dimensions.get('window').height / 1.3 }}
                adjustToContentHeight={true}
            >
                {_container()}
            </Modalize>
        </AuthContextList.Provider>
    )
}

export const useAuth = () => useContext(AuthContextList);
const styles = StyleSheet.create({
    container: {
        width: '100%'
    },
    header: {
        width: '100%',
        height: 40,
        paddingHorizontal: 40,
        flexDirection: 'row',
        marginTop: 20,
        justifyContent: 'space-between',
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold'
    },
    content: {
        width: '100%',
        paddingHorizontal: 20
    },
    label: {
        fontWeight: 'bold',
        color: '#000'
    },
    containerFlag: {
        width: '100%',
        padding: 10
    },
    rowFlags: {
        flexDirection: 'row',
        gap: 10,
        marginTop: 10,
    }
})