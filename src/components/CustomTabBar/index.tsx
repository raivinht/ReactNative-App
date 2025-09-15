import React from "react";
import { Text, TouchableOpacity, View } from "react-native";
import { AntDesign, FontAwesome, Entypo, MaterialIcons } from '@expo/vector-icons'
import { style } from "./styles";

export default ({state, navigation}: any) => {
    return (
        <View style={style.tabArea}>
            <TouchableOpacity style={style.tabItem}>
                <AntDesign
                    name="bars"
                    style={{ fontSize: 32 }}
                />
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItemButton}>
                <View style={{ width: '100%', left: 10, top: 4 }}>
                    <Entypo
                        name="plus"
                        size={40}
                        color={'#FFF'}
                    />
                </View>
                <View style={{ flexDirection: 'row-reverse', width: '100%', right: 10 }}>
                    <MaterialIcons
                        name="edit"
                        style={{color:'#FFFF'}}
                        size={30}
                    />
                </View>
            </TouchableOpacity>
            <TouchableOpacity style={style.tabItem}>
                <FontAwesome
                    name="user"
                    style={{ fontSize: 32 }}
                />
            </TouchableOpacity>
        </View>
    )
}