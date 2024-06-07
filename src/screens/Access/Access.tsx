import React, { useContext, useEffect } from 'react';

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigation-stack';

/* COMPONENTS */
import { Image, StyleSheet, View } from 'react-native';
import Button from '../../components/button';


type AccessScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Access'>;

export function Access() {
  const navigation = useNavigation<AccessScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Image source={require('~/assets/seacare/logo-text.png')} style={styles.logo} />
      <View style={{ gap: 25 }}>
        <Button.Filled title='Cadastrar-se' onPress={() => navigation.push('Cadastro')} />
        <Button.Outline title='Entrar' onPress={() => navigation.push('Login')} />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 25,
    paddingVertical: 100,
    justifyContent: 'space-between',
  },
  logo: {
    width: 150,
    objectFit: 'contain',
    alignSelf: 'center',
  },
});
