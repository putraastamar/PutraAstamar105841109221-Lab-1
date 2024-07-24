import React, { useState } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Button from './button';
import CustomTextInput from './text_input';

const SignUp = () => {
  const [nama, setNama] = useState('');
  const [email, setEmail] = useState('');
  const [kataSandi, setKataSandi] = useState('');

  const handleSignup = () => {
    console.log('Nama:', nama);
    console.log('Email:', email);
    console.log('Kata Sandi:', kataSandi);
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Daftar</Text>

      <CustomTextInput
        placeholder="Nama"
        value={nama}
        onChangeText={setNama}
      />

      <CustomTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
        keyboardType="email-address"
      />

      <CustomTextInput
        placeholder="Kata Sandi"
        value={kataSandi}
        onChangeText={setKataSandi}
        secureTextEntry
      />

      <Button title="DAFTAR" onPress={handleSignup} />

      <Text style={styles.accountText}>
        Sudah punya akun?
      </Text>

      <View style={styles.socialContainer}>
        <Button title="G" onPress={() => {}} />
        <Button title="f" onPress={() => {}} />
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff',
  },
  title: {
    fontSize: 32,
    fontWeight: 'bold',
    marginBottom: 30,
  },
  accountText: {
    textAlign: 'center',
    marginTop: 20,
  },
  socialContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 20,
  },
});

export default SignUp;
