import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, TextInput, ImageBackground, Alert,TouchableOpacity, KeyboardAvoidingView } from 'react-native';
import { useState } from 'react';
import { useNavigation } from '@react-navigation/native';

export default function SignIn() {
  const navigation = useNavigation('');
  const [step,setStep] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [newPassword, setNewPassword] = useState('');

  function handle(){
    console.log({email, password});
    navigation.navigate('Home')
    
  }

  function changeForm(){
    if (step === 0){
      setStep(1);
    }else{
      setStep(0);
    }
  }

  function validateForm(){
    if(name === ''){
      Alert.alert('Preencha o campo nome');
      return false;
    }
    if(email === ''){
      Alert.alert('Preencha o campo email');
      return false;
    }
    if(password === ''){
      Alert.alert('Preencha o campo senha');
      return false;
    }
    if(newPassword === ''){
      Alert.alert('Preencha o campo nova senha');
      return false;
    }
    if(newPassword!== password) {
      Alert.alert('As senhas não conferem');
      return false;
    }

    handle();

  }




  return (
    <ImageBackground
        style={styles.container}
        source={{
            uri: 'https://img.lovepik.com/background/20211102/medium/lovepik-technology-circuit-background-mobile-phone-image_400706115.jpg'
        }}
        resizeMode="stretch"
    >
        <Text style={styles.title}>{step === 0 ? 'Bem vindo' : 'Cadastre-se'} </Text>

        {step === 0 ? (
        <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>EMAIL</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>SENHA</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu senha"
                placeholderTextColor="#999"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                textSecurity={true}
                value={password}
                onChangeText={setPassword}
            />

            <TouchableOpacity style={styles.button} onPress={handle}>
                <Text style={styles.buttonText}>Entrar</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }} onPress={changeForm}>
            <Text style={[styles.label, {textAlign:'center' }]}>Cadastre-se gratis</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        ) : (
          <KeyboardAvoidingView style={styles.form}>
            <Text style={styles.label}>Nome</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu nome"
                placeholderTextColor="#999"
                autoCapitalize="none"
                value={name}
                onChangeText={setName}
            />

            <Text style={styles.label}>EMAIL</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu email"
                placeholderTextColor="#999"
                autoCapitalize="none"
                autoCorrect={false}
                keyboardType="email-address"
                value={email}
                onChangeText={setEmail}
            />

            <Text style={styles.label}>SENHA</Text>
            <TextInput
                style={styles.input}
                placeholder="Digite seu senha"
                placeholderTextColor="#999"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                textSecurity={true}
                value={password}
                onChangeText={setPassword}
            />

            <Text style={styles.label}>REPITA A SENHA</Text>
            <TextInput
                style={styles.input}
                placeholder="Repita sua senha"
                placeholderTextColor="#999"
                autoCapitalize="none"
                secureTextEntry={true}
                autoCorrect={false}
                textSecurity={true}
                value={newPassword}
                onChangeText={setNewPassword}
            />

            <TouchableOpacity style={styles.button} onPress={validateForm}>
                <Text style={styles.buttonText}>Criar conta</Text>
            </TouchableOpacity>

            <TouchableOpacity style={{ alignItems: 'center', marginTop: 30 }} onPress={changeForm}>
            <Text style={[styles.label, {textAlign:'center' }]}>Ja possui uma conta ?</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
        )}
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#43627d',
    alignItems: 'center',
    justifyContent: 'center',

  },

  title:{
    color: '#fff',
    fontSize: 32
  },

  form:{
    marginTop: 30,
    width: '70%',
    marginTop: 100,
  },
  label:{
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: 10,
   
  },

  input:{
    backgroundColor: '#FFF',
    width: '100%',
    height: 40,
    borderRadius: 20,
    paddingHorizontal: 20,
    fontSize: 16,
    marginVertical: 10,
  }, 

  button:{
    backgroundColor: '#fff',
    width: '50%',
    height: 40,
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    marginLeft: 70,
  },

  buttonText:{
    color: '#808080',
    fontWeight: 'bold',
    fontSize: 16,
  }
  
});
