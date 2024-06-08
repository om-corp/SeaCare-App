# API Documentation

## Firebase Auth

### Signup (Email/Password)
- **Endpoint:** `createUserWithEmailAndPassword`
- **Description:** Cria um novo usuário com email e senha.

#### Request Example
```typescript
const handleSignup = async (_user: UserProps) => {
    // Criando usuário com email e senha em Firebase Authentication
    await createUserWithEmailAndPassword(auth, _user.email, _user.password)
        // Em caso de sucesso, as credenciais do usuário são utilizadas para cadastra-lo no Firebase Firestore Database
        .then(cred => {
            // Criando documento com todos os dados do usuário em Firebase Firestore Database
            setDoc(doc(firestore, 'usuarios', cred.user.uid), _user)
            Alert.alert('Cadastrado com sucesso!', 'Realize login para entrar na sua conta')
            navigation.replace('Login')
        })
        // Em caso de erro, o handleFireBaseError lida com o erro
        .catch(error => {
            return handleFirebaseError(error)
        })
        // Limpar os dados do usuário no aplicativo após se cadastrar, para que assim os campos sejam esvaziados
        .finally(() => cleanUserInputs())
}
```

#### Response Example
```json
{
    "user": {
        "uid": "user-uid",
        "email": "user@example.com",
        "displayName": null,
        "emailVerified": false,
        "photoURL": null
    }
}
```


### Login (Email/Password)
- **Endpoint:** `signInWithEmailAndPassword`
- **Description:** Autentica um usuário com email e senha.

#### Request Example
```typescript
const handleLogin = async (_email: string, _password: string) => {
    // Logando usuário no Firebase Authentication com email e senha
    await signInWithEmailAndPassword(auth, _email, _password)
        // Em caso de sucesso, o usuário é redirecionado para dentro do aplicativo
        .then(() => navigation.replace('App'))
        // Em caso de erro, o handleFireBaseError lida com o erro
        .catch(error => {
            return handleFirebaseError(error)
        })
}
```

#### Response Example
```json
{
    "user": {
        "uid": "user-uid",
        "email": "user@example.com",
        "displayName": null,
        "emailVerified": false,
        "photoURL": null
    }
}
```


### Forgot Password 
- **Endpoint:** `sendPasswordResetEmail`
- **Description:** Envia um email para redefinição de senha.

#### Request Example
```typescript
// Função que verifica se o email inserido é válido
const validarEmail = (_email: string) => {
    // REGEX para validação de email
    const re = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g

    return re.test(_email)
}

// Função que lida com o request para redefinição de senha
const handleForgotPassword = async (_email: string) => {
    // Caso o usuário não tenha informado um email
    if (!_email) {
        Alert.alert('Erro', 'Endereço de email não pode ser vazio')
    } 
    // Caso o email informado seja inválido
    else if (!validarEmail(_email)) {
        Alert.alert('Erro', 'Endereço de email inválido')
    } 
    // Caso de sucesso
    else {
        // Email de redefinição de senha é enviado ao email informado
        await sendPasswordResetEmail(auth, _email)
            .then(
                // Caso o envio tenha sucesso, alertar usuário que foi enviado um email de redefinição de senha
                () => Alert.alert('Email de confirmação', 'Um email de confirmação foi enviado a ' + _email),
                // Caso o envio fracasse, alertar usuário o motivo do erro
                (reason) => Alert.alert('Erro no envio!', reason)
            )
            // Caso de tudo errado, alertar usuário que algo deu errado e exibir no console o erro
            .catch(error => {
                console.log("Erro ao tentar processar request de forgotpassword: " + error)
                Alert.alert('Erro no envio!', 'Alguma coisa deu errado...')
            });
        // Após tudo isso, deixar de exibir o modal de forgotPassword
        setShowModal(false)
    }
}
```

#### Response Example
```json
{
    "message": "Password reset email sent!"
}
```

## Firebase Firestore Database

### Collection: `usuarios`

#### Document Structure
```
{
    "name": "string",
    "email": "string",
    "password": "string",
    "cep": "string",
    "phone": "string"
}
```

#### Adding a User Document
```typescript
const userRef = doc(firestore, "usuarios", userId);
setDoc(userRef, {
    name: "User Name",
    email: "user@example.com",
    password: "userpassword",
    cep: "12345-678",
    phone: "+5511987654321"
});
```

### Collection: `events`

#### Document Structure
```json
{
    "date": "timestamp",
    "imageUrl": "string",
    "name": "string",
    "summary": "string",
    "volunteers": "number"
}
```

#### Fetching Event Documents
```typescript
const eventsCollection = collection(firestore, 'events');
const eventsSnapshot = await getDocs(eventsCollection);
const eventList = eventsSnapshot.docs.map(doc => doc.data());
```


### Collection: `incidents`

#### Document Structure
```json
{
    "descricao": "string",
    "imageUrl": "string",
    "location": {
        "latitude": "number",
        "longitude": "number"
    },
    "name": "string",
    "priority": "number"
}
```

#### Fetching Incident Documents
```typescript
const incidentsCollection = collection(firestore, 'incidentes');
const incidentsSnapshot = await getDocs(incidentsCollection);
const incidentList = incidentsSnapshot.docs.map(doc => doc.data());
```

## Usage in Application

#### Signup (Signup.tsx)
- **Endpoint:** `createUserWithEmailAndPassword`
- **Firestore:** Adds a new user document to the usuarios collection.

#### Login (Login.tsx)
- **Endpoint:** `signInWithEmailAndPassword`
- **Firestore:** No direct interaction; authenticates user.

#### Forgot Password (ForgotPasswordModal.tsx)
- **Endpoint:** `sendPasswordResetEmail`
- **Firestore:** No direct interaction; sends password reset email.

#### Fetch Events (EventsScreen.tsx)
- **Firestore:** Fetches documents from the events collection.

#### Fetch Incidents (IncidentsMap.tsx)
- **Firestore:** Fetches documents from the incidentes collection.