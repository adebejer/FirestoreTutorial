import { useState } from 'react/cjs/react.development';
import { collection, addDoc} from "firebase/firestore"; 
import { db } from './src/config';
import { StyleSheet, Text, View, TextInput, Button} from 'react-native';

export default function App() {
  const [username, setName] = useState(''); 
  const [email, setEmail] = useState('');

  function create () {
    addDoc(collection(db, "Users"), {     
          username: username,
          email: email,
        }).then(() => { 
          // Data saved successfully!
          console.log('data submitted');  
    
        }).catch((error) => {
              // The write failed...
              console.log(error);
        });
    }

  return (
    <View style={styles.container}>
      <Text>Firestore Test</Text> 

      <TextInput value={username} onChangeText={(username) => {setName(username)}} placeholder="Username" style={styles.textBoxes}></TextInput>
      <TextInput value={email} onChangeText={(email) => {setEmail(email)}} placeholder="Email" style={styles.textBoxes}></TextInput>

      <Button onPress={create} title="Submit"></Button>      

    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
  textBoxes: {
    width: '90%', 
    fontSize: 18,
     padding: 12,
      borderColor: 'gray', 
    borderWidth: 0.2,
     borderRadius: 10
  }   
});
