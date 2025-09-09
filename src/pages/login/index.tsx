import React, { useState } from "react";
import { Text, View, Image, TextInput, TouchableOpacity, Alert, ActivityIndicator } from "react-native";
import { style } from "./styles";
import Logo from '../../assets/logo.png';
import { MaterialIcons, Octicons } from '@expo/vector-icons';
import { themes } from "../../global/themes";
import { Input } from "../../components/input";
import { Button } from "../../components/Button";
import { useNavigation, NavigationProp } from '@react-navigation/native'

export default function Login() {

    const navigation = useNavigation<NavigationProp<any>>();

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(true);
    const [loading, setLoading] = useState(false);

    async function getLogin() {
        try {
            setLoading(true)
            if (!email || !password) {
                return Alert.alert('Atenção', 'Informe os campos obrigatórios!'),
                setLoading(false);
            }

            

            setTimeout(() => {
                if (email == 'nogaroto@gmail.com' && password == '12345678') {
                    Alert.alert('Logado com sucesso!');
                    navigation.navigate("BottomRoutes")
                    console.log("Logou!!!!!!!!!!!!!!");
                } else {
                    Alert.alert('Usuário não encontrado!');
                }
                setLoading(false);
            }, 3000)
        } catch (error) {
            console.log(error);
        }
    }

    return (
        <View style={style.container}>
            <View style={style.boxTop}>
                <Image
                    source={Logo}
                    style={style.logo}
                    resizeMode="contain"
                />
                <Text style={style.text}>Bem vindo de volta!</Text>
            </View>
            <View style={style.boxMid}>
                <Input
                title="ENDEREÇO DE E-MAIL"
                value={email}
                onChangeText={setEmail}
                IconRight={MaterialIcons}
                IconRightName="email"
                />
                <Input 
                title="SENHA"
                value={password}
                onChangeText={setPassword}
                IconRight={Octicons}
                IconRightName={showPassword ? "eye-closed" : "eye"}
                secureTextEntry={showPassword}
                OnIconRightPress={() => setShowPassword(!showPassword)}
                />
            </View>
            <View style={style.boxBottom}>
                <Button text="Entrar" loading={loading} onPress={() => getLogin()} />
            </View>
            <Text style={style.textBottom}>Não tem conta?
                <Text style={{ color: themes.colors.primary }}> Crie agora!</Text></Text>
        </View>
    )
}