import { FirebaseError } from 'firebase/app';
import { Alert } from 'react-native';


const handleFirebaseError = (e: FirebaseError) => {
    switch (e.code) {
        case 'auth/invalid-email':
            Alert.alert('Email Inválido', 'O endereço de email não é válido.');
            break;

        case 'auth/user-disabled':
            Alert.alert('Usuário Desativado', 'O usuário com esse email foi desativado.');
            break;

        case 'auth/user-not-found':
            Alert.alert('Usuário Não Encontrado', 'Não há registro de usuário correspondente a este email.');
            break;

        case 'auth/wrong-password':
            Alert.alert('Senha Incorreta', 'A senha inserida é inválida.');
            break;

        case 'auth/email-already-in-use':
            Alert.alert('Email Já em Uso', 'O endereço de email já está sendo usado por outra conta.');
            break;

        case 'auth/operation-not-allowed':
            Alert.alert('Operação Não Permitida', 'O login com email e senha não está habilitado.');
            break;

        case 'auth/weak-password':
            Alert.alert('Senha Fraca', 'A senha fornecida é muito fraca.');
            break;

        case 'auth/network-request-failed':
            Alert.alert('Conexão fraca', 'Verifique sua conexão.');
            break

        default:
            console.log(e);
            Alert.alert(
                'Erro no envio!',
                `Ocorreu um erro ao tentar criar sua conta.\n
                \nTente novamente mais tarde, ou entre em contato com omcorp.helpcenter@gmail.com`
            );
            break;
    }
};

export default handleFirebaseError;
