import { useLocalSearchParams, useRouter } from 'expo-router';
import React, { useEffect } from 'react';
import {
    ActivityIndicator,
    Image,
    Keyboard,
    StyleSheet,
    Text,
    TouchableWithoutFeedback,
    View
} from 'react-native';
import minhaDoseOps from '../assets/images/minha-dose-ops.png';

export default function LoadingPage() {
    const router = useRouter();
    const {next} = useLocalSearchParams();

    const validRoutes = ['/cadastro', '/login', '/home'] as const;
    const [imageLoaded, setImageLoaded] = React.useState(false);

    useEffect(() => {
        const timer = setTimeout(() => {
            if(next && typeof next === 'string'){
                router.push(next as (typeof validRoutes)[number]);
            }else{
                router.push('/');
            }
        }, 5000);

        return () => clearTimeout(timer);
    }, []);

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <ActivityIndicator size="large" color="#fff" style={{ marginBottom: 20 }} />
        <Text style={styles.title}>Ops...</Text>
        <Text style={styles.subtitle}>
          Não foi possível encontrar uma conta para o e-mail informado.{' '}
          Vamos criar uma?{'\n'}É super rápido!
        </Text>
        <Image source={minhaDoseOps} style={styles.image} onLoad={() => setImageLoaded(true)} />
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
    backgroundColor: '#022757',
  },
  title: {
    fontSize: 35,
    fontWeight: 'bold',
    marginBottom: 20,
    color: '#FFFFFF',
  },
  subtitle: {
    fontSize: 16,
    textAlign: 'center',
    color: '#FFFFFF',
  },
  image: {
    width: 350,
    height: 350,
    marginTop: 20,
  },
});