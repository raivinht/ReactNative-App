import React, { useContext, useRef } from "react";
import { Text, View, FlatList, TouchableOpacity } from "react-native";
import { style } from "./styles";
import { Input } from "../../components/input";
import { AntDesign, MaterialIcons } from '@expo/vector-icons';
import { Ball } from "../../components/Ball";
import { Flag } from "../../components/Flag";
import { themes } from "../../global/themes";
import { AuthContextList } from "../../context/authContext_list";
import { formatDateToBR } from "../../global/functions";
import { AuthContextType, PropCard } from "../../global/Props";
import { Directions, Swipeable } from "react-native-gesture-handler";

export default function List() {
    const { taskList, handleDelete, handleEdit, filter } = useContext<AuthContextType>(AuthContextList)
    const swipeableRefs = useRef([])

    const renderRightActions = () => (
        <View style={style.button}>
            <AntDesign
                name="delete"
                size={20}
                color={'#FFF'}
            />
        </View>
    );

    const handleSwipeOpen = (directions: 'right' | 'left', item, index) => {
        if (directions == 'right') {
            handleDelete(item)
            swipeableRefs.current[index]?.close()
        } else {
            handleEdit(item)
        }
        swipeableRefs.current[index]?.close()
    }

    const renderLeftActions = () => {
        return (
            <View style={[style.button, { backgroundColor: themes.colors.blueLight }]}>
                <AntDesign
                    name="edit"
                    size={20}
                    color={'#FFF'}
                />
            </View>
        )
    }

    const _renderCard = (item: PropCard, index) => {
        const color = item.flag == 'Opcional' ? themes.colors.blueLight : themes.colors.red
        return (
            <Swipeable
                ref={(ref) => swipeableRefs.current[index] = ref}
                key={index}
                renderRightActions={renderRightActions}
                renderLeftActions={renderLeftActions}
                onSwipeableOpen={(directions) => handleSwipeOpen(directions, item, index)}
            >
                <View style={style.card}>
                    <View style={style.rowCard}>
                        <View style={style.rowCardLeft}>
                            <Ball color={color} />
                            <View>
                                <Text style={style.titleCard}>{item.title}</Text>
                                <Text style={style.descriptionCard}>{item.description}</Text>
                                <Text style={style.descriptionCard}>Até {formatDateToBR(item.timeLimit)}</Text>
                            </View>
                        </View>
                        <Flag
                            caption={item.flag}
                            color={color} />
                    </View>
                </View>
            </Swipeable>
        )
    }
    return (
        <View style={style.container}>
            <View style={style.header}>
                <Text style={style.greeting}>Bom dia,
                    <Text style={{ fontWeight: 'bold' }}> Arthur Nogaroto</Text>
                </Text>
                <View style={style.boxInput}>
                    <Input
                        IconLeft={MaterialIcons}
                        IconLeftName="search"
                        onChangeText={(t)=>filter(t)}
                    />
                </View>
            </View>
            <View style={style.boxList}>
                <FlatList
                    data={taskList}
                    style={{ marginTop: 40, paddingHorizontal: 30 }}
                    keyExtractor={(item, index) => item.item.toString()}
                    renderItem={({ item, index }) => { return (_renderCard(item, index)) }}
                />
            </View>
        </View>
    )
}