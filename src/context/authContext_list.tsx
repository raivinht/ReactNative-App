import React, { createContext, useContext, useRef, useEffect, useState, use } from "react";
import { MaterialIcons, AntDesign } from '@expo/vector-icons'
import { Dimensions, KeyboardAvoidingView, Platform, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { Modalize } from "react-native-modalize";
import { Input } from "../components/input";
import { themes } from "../global/themes";
import { Flag } from "../components/Flag";
import CustomDateTimePicker from "../components/CustomDateTimePicker";

export const AuthContextList: any = createContext({});

const flags = [
    { caption: 'Urgente', color: themes.colors.red },
    { caption: 'Opcional', color: themes.colors.blueLight }
];

export const AuthProviderList = (Props: any): any => {

    const modalizeRef = useRef<Modalize>(null);
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [selectedFlag, setSelected] = useState('Urgente');
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [selectedTime, setSelectedTime] = useState(new Date());
    const [showDatePicker, setShowDatePicker] = useState(false);
    const [showTimePicker, setShowTimePicker] = useState(false);

    const onOpen = () => {
        modalizeRef?.current?.open();
    }

    const onClose = () => {
        modalizeRef?.current?.close();
    }

    useEffect(() => {
        onOpen()
    }, [])

    const _renderFlags = () => {
        return (
            flags.map((item, index) => (
                <TouchableOpacity key={index}>
                    <Flag
                        caption={item.caption}
                        color={item.color}
                    // selected
                    />
                </TouchableOpacity>
            ))
        )
    }

    const handleDateChange = (date) => {
        setSelectedDate(date);
    }
    const handleTimeChange = (date) => {
        setSelectedTime(date);
    }

    const _container = () => {
        return (
            <KeyboardAvoidingView
                style={styles.container}
                behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
            >
                <View style={styles.header}>
                    <TouchableOpacity onPress={() => onClose()}>
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
                        value={title}
                        onChangeText={setTitle}
                    />
                    <Input
                        title="Descrição"
                        labelStyle={styles.label}
                        height={100}
                        multiline
                        numberOfLines={5}
                        value={description}
                        onChangeText={setDescription}
                        textAlignVertical="top"
                    />
                </View>
                <View style={{ width: '40%' }}>
                    {/* <Input
                        title="Tempo limite:"
                        labelStyle={styles.label}
                    /> */}
                    <View style={{ flexDirection: 'row', gap: 10, width: 10 }}>
                        <TouchableOpacity onPress={() => setShowDatePicker(true)} style={{ width: 200 }}>
                            <Input
                                title="Data Limite"
                                labelStyle={styles.label}
                                editable={false}
                                value={selectedDate.toLocaleDateString()}
                                onPress={() => setShowDatePicker(true)}
                            />
                        </TouchableOpacity>
                        <TouchableOpacity onPress={() => setShowTimePicker(true)} style={{ width: 120 }}>
                            <Input
                                title="Hora Limite"
                                labelStyle={styles.label}
                                value={selectedTime.toLocaleTimeString()}
                                onPress={() => setShowTimePicker}
                            />
                        </TouchableOpacity>
                    </View>
                    <CustomDateTimePicker
                        onDateChange={handleDateChange}
                        setShow={setShowDatePicker}
                        show={showDatePicker}
                        type={'date'}
                    />
                    <CustomDateTimePicker
                        onDateChange={handleTimeChange}
                        setShow={setShowTimePicker}
                        show={showTimePicker}
                        type={'time'}
                    />
                </View>
                <View style={styles.containerFlag}>
                    <Text style={styles.label}>Flags:</Text>
                    <View style={styles.rowFlags}>
                        {_renderFlags()}
                    </View>
                </View>
            </KeyboardAvoidingView>
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