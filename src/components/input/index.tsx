import React, { forwardRef, Fragment, LegacyRef } from "react";
import { View, Text, TextInput, TextInputProps } from "react-native";
import { style } from "./style";
import { themes } from "../../global/themes";
import { FontAwesome, MaterialIcons, Octicons } from "@expo/vector-icons";

type IconComponent = React.ComponentType<React.ComponentProps<typeof MaterialIcons>> |
    React.ComponentType<React.ComponentProps<typeof FontAwesome>> |
    React.ComponentType<React.ComponentProps<typeof Octicons>>;

type Props = TextInputProps & {
    IconLeft?: IconComponent,
    IconRight?: IconComponent,
    IconLeftName?: string,
    IconRightName?: string,
    title?: string,
    OnIconLeftPress?: () => void,
    OnIconRightPress?: () => void,
}

export const Input = forwardRef((Props: Props, forwardRef: LegacyRef<TextInput> | null) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, OnIconLeftPress, OnIconRightPress,
        ...rest
    } = Props
    return (
        <Fragment>
            <Text style={style.titleInput}>{title}</Text>
            <View style={style.boxInput}>
                <TextInput
                    style={style.input}
                />
                <MaterialIcons
                    name="email"
                    size={20}
                    color={themes.colors.gray}
                />
            </View>
        </Fragment>
    )
})