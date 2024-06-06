import React from 'react';

/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigation-stack';

/* COMPONENTS */
import { StyleSheet, View } from 'react-native';
import Button from '../../components/button';


type AccessScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Access'>;

export function Access() {
  const navigation = useNavigation<AccessScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Button.Filled title='Cadastrar-se' onPress={() => navigation.push('Cadastro')} />
      <Button.Outline title='Entrar' onPress={() => navigation.push('Login')} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    gap: 25,
    paddingHorizontal: 25,
    paddingVertical: 100,
    justifyContent: 'flex-end',
  },
});
