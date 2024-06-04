
/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation/navigation-stack';

/* COMPONENTS */
import { View } from 'react-native';
import Button from '../../components/button';
import styles from './styles';


type AccessScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Access'>;

export function Access() {
  const navigation = useNavigation<AccessScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Button.Filled
        title='Criar conta'
        onPress={() => navigation.push('Cadastro')}
      />
      <Button.Outline
        title='Entrar'
        onPress={() => navigation.push('Login')}
      />
    </View>
  );
}