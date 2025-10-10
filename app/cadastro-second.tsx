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
    TouchableOpacity,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import logo from '../assets/images/logo/minha-dose-logo.png';
import { globalStyles } from '../global';

export default function CadastroSecondScreen() {
    
    const router = useRouter();

    const [email, setEmail] = useState('');
    const [phoneNumber, setPhoneNumber] = useState('');
    const allFieldsFilled = email.trim().length > 0 && phoneNumber.trim().length > 0;

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
                            Agora, forneça suas informações de contato.
                        </Text>
                        <Text style={globalStyles.cadastroSubTitle}>Para fornecer o melhor serviço possível, todos os dados solicitados abaixo devem ser informados.</Text>
                    </View>

                    <TextInput placeholder="E-mail" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={email} onChangeText={setEmail} />
                    <TextInput placeholder="Telefone celular" placeholderTextColor="#022757" style={globalStyles.cadastroInput} value={phoneNumber} onChangeText={setPhoneNumber} />
                    
                    <View style={globalStyles.buttonContainer}>
                        <TouchableOpacity style={[globalStyles.buttonCadastro, globalStyles.backButton]} onPress={() => router.push('/cadastro')}>
                            <Text style={globalStyles.buttonCadastroText}>Voltar</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[globalStyles.buttonCadastro, globalStyles.continueButton, !allFieldsFilled && { backgroundColor: '#ccc' }]} onPress={() => router.push('/cadastro-third')} disabled={!allFieldsFilled}>
                            <Text style={globalStyles.buttonCadastroText}>Continuar</Text>
                        </TouchableOpacity>
                    </View>
                </ScrollView>
            </TouchableWithoutFeedback>
        </KeyboardAvoidingView>
    );
}