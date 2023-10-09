import React, { useState } from 'react';
import { View, Text, Image, TextInput, Button, StyleSheet } from 'react-native';

const LogIn = ({navigation}) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    if ((username === "M") && (password === "M")){
      navigation.navigate('PageTabs');
      setUsername('');
      setPassword('');
    }
    else{
      alert('Usuario o contraseña incorrectos!!')
    }
    
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Log in</Text>
      <Image style={styles.image} source={require('../../assets/icon-login.png')} />
      <br></br>
      <TextInput style={styles.input} placeholder="Usuario" value={username} onChangeText={setUsername}/>
      <TextInput style={styles.input} placeholder="Contraseña" secureTextEntry value={password} onChangeText={setPassword}
      />
      <Button style={styles.button} title="Enter" onPress={handleLogin} />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    marginBottom: 20,
  },
  input: {
    width: '80%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  image: {
    width: 100,
    height: 100,
    justifyContent: 'space-around',
  },    
  button:{

    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default LogIn;