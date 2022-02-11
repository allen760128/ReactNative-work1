import React, { useState } from 'react';
import { StyleSheet, Text, View, TextInput, ImageBackground } from 'react-native';

export default function App() {
  const [phone, setPhone] = useState('');
  const [cont, setCont] = useState('');
  const [phoneAgain, setAgain] = useState('');
  const [contAgain, setContAgain] = useState('');
  const cellphone = (phone) => {
    setPhone(phone);
    phone === '0912345678' ? setCont('Please enter once below') : setCont('Error！');
    console.log(phone)
  }
  const cellphoneAgain = (phoneAgain) => {
    setAgain(phoneAgain);
    phoneAgain === phone ? setContAgain('Correct!') : setContAgain('Error!Please enter again');
  }
  return (
    <ImageBackground source={require('./src/img/back1.jpg')} style={styles.background}>
      <View style={styles.container}>

        <Text style={styles.textStyle1}>Hello</Text>
        <Text style={styles.textStyle2}>Your phone number is</Text>
        <Text style={styles.textStyle3}>{phone}</Text>
        <Text style={styles.textStyle5}>Please enter your phone number</Text>
        <TextInput style={styles.input} onChangeText={cellphone} maxLength={10} value={phone}></TextInput>
        <Text style={[styles.textStyle4, { color: '#FFFF00' }]}>{cont}</Text>
        <Text style={styles.textStyle5}>Please enter again</Text>
        <TextInput style={styles.input} onChangeText={cellphoneAgain} maxLength={10} value={phoneAgain}></TextInput>
        <Text style={[styles.textStyle4, { color: '#FFFF00' }]}>{contAgain}</Text>

      </View >
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 150
  },
  background: {
    flex: 1,
    justifyContent: 'center',
    resizeMode: 'cover'
  },
  textStyle1: {
    height: 60,
    fontSize: 40,
    fontWeight: '700',
    color: '#fff'
  },
  textStyle2: {
    height: 20,
    color: '#fff',
    fontSize: 16,
  },
  textStyle3: {
    height: 30,
    paddingTop: 10,
    paddingBottom: 100,
    color: '#fff'
  },
  textStyle4: {
    paddingTop: 5,
    paddingBottom: 30
  },
  textStyle5: {
    color: '#fff',
    fontSize: 12,
  },
  input: {
    width: 200,
    height: 25,
    backgroundColor: '#fff',
    marginTop: 5,
    borderWidth: 1,
    borderRadius: 20,
    paddingLeft: 10
  }
});
