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
                <View>
                    <Entypo
                        name="plus"
                        size={40}
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