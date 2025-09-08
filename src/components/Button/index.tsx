import React from "react";
import { style } from "./style";
import { ActivityIndicator, Text, TouchableHighlightProps, TouchableOpacity } from "react-native";

type Props = TouchableHighlightProps & {
    text: string,
    loading?: boolean,
}

export function Button({ ...rest }: Props) {
    return (
        <TouchableOpacity
            style={style.button}
            {...rest}
            activeOpacity={0.6}>
            {rest.loading ? <ActivityIndicator
                color={'#fff'}
                size={"small"}
            /> : <Text style={style.textButton}>
                {rest.text}</Text>}
        </TouchableOpacity>
    )
}