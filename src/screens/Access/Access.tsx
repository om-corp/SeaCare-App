
/* NAVIGATION */
import { useNavigation } from '@react-navigation/native';
import { StackNavigationProp } from '@react-navigation/stack';
import { RootStackParamList } from '../../navigation';

/* COMPONENTS */
import { View } from 'react-native';
import { Button } from '../../components/Button';
import styles from './styles';


type AccessScreenNavigationProps = StackNavigationProp<RootStackParamList, 'Access'>;

export function Access() {
  const navigation = useNavigation<AccessScreenNavigationProps>();

  return (
    <View style={styles.container}>
      <Button
        title='Criar conta'
        onPress={() => navigation.push('Cadastro')}
      />
      <Button
        title='Entrar'
        onPress={() => navigation.push('Login')}
      />
    </View>
  );
}
