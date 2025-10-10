import { useRouter } from 'expo-router';
import React, { useState } from 'react';
import {
    Image,
    Keyboard,
    KeyboardAvoidingView,
    Platform,
    ScrollView,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import logo from '../assets/images/logo/minha-dose-logo.png';
import { globalStyles } from '../global';

export default function CadastroScreen() {
    
    const router = useRouter();

    const [cpf, setCpf] = useState('');
    const [name, setName] = useState('');
    const [zipCode, setZipCode] = useState('');
    const [address, setAddress] = useState('');
    const [city, setCity] = useState('');
    const [neighborhood, setNeighborhood] = useState('');
    const [district, setDistrict] = useState('');
    const [houseNumber, setHouseNumber] = useState('');
    const [country, setCountry] = useState('');

    return (
        <KeyboardAvoidingView
            style={globalStyles.container}
            behavior={Platform.OS === 'ios' ? 'padding' : undefined}>

            <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
                <ScrollView
                    style={{ flex: 1 }}
                    contentContainerStyle={{ padding: 16 }}
                    keyboardShouldPersistTaps="handled">

                    <View>
                        <Image source={logo} style={globalStyles.smallLogo}></Image>
                        <Text style={globalStyles.cadastroIntro}>
                            Informe os seus dados pessoais
                        </Text>
                        <Text style={globalStyles.cadastroSubTitle}>Para fornecer o melhor serviço possível, todos os dados solicitados abaixo devem ser informados.</Text>
                    </View>

                    <TextInput placeholder="CPF" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={cpf} onChangeText={setCpf} />
                    <TextInput placeholder="Nome Legal" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={name} onChangeText={setName} />
                    <TextInput placeholder="CEP" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={zipCode} onChangeText={setZipCode} keyboardType="numeric" />
                    <TextInput placeholder="Address" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={address} onChangeText={setAddress} />
                    <TextInput placeholder="Cidade" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={city} onChangeText={setCity} />
                    <TextInput placeholder="Bairro" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={neighborhood} onChangeText={setNeighborhood} />
                    <TextInput placeholder="Estado" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={district} onChangeText={setDistrict} />
                    <TextInput placeholder="País" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={country} onChangeText={setCountry} />
                    <TextInput placeholder="N. da casa" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={houseNumber} onChangeText={setHouseNumber} keyboardType="numeric" />
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}