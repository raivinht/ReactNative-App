import React, { ForwardedRef, forwardRef, Fragment } from "react";
import { View, Text, TextInput, TextInputProps, TouchableOpacity } from "react-native";
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

export const Input = forwardRef<TextInput, Props>((Props: Props, ref: ForwardedRef<TextInput> | null) => {
    const { IconLeft, IconRight, IconLeftName, IconRightName, title, OnIconLeftPress, OnIconRightPress,
        ...rest
    } = Props
        const calculateSizeWidth = () => {
        if (IconLeft && IconRight) {
            return '80%'
        } else if (IconLeft || IconRight) {
            return '90%'
        } else {
            return '100%'
        }
    }

        const calculateSizePaddingLeft = () => {
        if (IconLeft && IconRight) {
            return 0
        } else if (IconLeft || IconRight) {
            return 10
        } else {
            return 20
        }
    }
    return (
        <Fragment>
            <Text style={style.titleInput}>{title}</Text>
            <View style={[style.boxInput, {paddingLeft: calculateSizePaddingLeft()}]}>
                {IconLeft && IconLeftName && (
                    <TouchableOpacity onPress={OnIconLeftPress} style={style.Button}>
                        <IconLeft name={IconLeftName as any} size={ 20 } color={themes.colors.gray}
                         style={style.Icon}
                        />
                    </TouchableOpacity>
                )}
                <TextInput
                    style={[style.input, { width: calculateSizeWidth() }
                    ]}
                    {...rest}
                />
                {IconRight && IconRightName && (
                    <TouchableOpacity onPress={OnIconRightPress} style={style.Button}>
                        <IconRight name={IconRightName as any} size={20}
                         style={style.Icon}
                        />
                    </TouchableOpacity>
                )}
            </View>
        </Fragment>
    )
})