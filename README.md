# FirestoreTutorial
 _This is the repository that will be used for the Firebase Firestore Database Tutorial on 04/01/2023 for CIS3186 : Mobile Device Programming
This tutorial uses Expo Go, Visual Studio Code, React-Native, and Firebase_ 

## Step 1: Set up Firebase services

###### The following link will take you to the Firebase website



https://firebase.google.com/



###### When the page loads, navigate to the "Get started" button and click it

![image](https://user-images.githubusercontent.com/81165469/209993251-067d0553-35c3-43fc-8828-44780a7ebf00.png)


###### Press on the "Add Project" card to add your project

![image](https://user-images.githubusercontent.com/81165469/209993534-48ac3202-708a-474b-9ff9-ac994bd55817.png)


###### Give your project a name. For the sake of this tutorial we have named it firestoreTest. Click "Continue".

![image](https://user-images.githubusercontent.com/81165469/209993706-aba228fc-21c3-4fdb-8c00-2b77917a7b48.png)


###### Disable Google Analytics and press "Create Project"

![image](https://user-images.githubusercontent.com/81165469/209993800-6e9bb63a-caed-4a50-bba9-31377c3ebd9e.png)


###### Once your project is ready, press "Continue"

![image](https://user-images.githubusercontent.com/81165469/209993926-22652f26-bdf9-4d9a-90a7-851b4a519419.png)


###### You will now need to add a new app to get started. Please select the Web App as shown below.

![image](https://user-images.githubusercontent.com/81165469/209994174-b58898ef-a972-4fdb-b12a-b130379e40dc.png)


###### Register your app by giving it a nickname. For the sake of this project we have once again names it firestoreTest.

![image](https://user-images.githubusercontent.com/81165469/209994284-0c819d0b-0887-4eaa-b9f6-01ed7823428a.png)


###### An "Add Firebase SDK" screen should now be visible to you. Please take note of the constant "firebaseConfig" as that is unique to your application. It is good practice not to share this configuration, and for this reason we will not be attaching an image to accompany this step.

**--PLEASE COPY YOUR WEB APP'S FIREBASE CONFIGURATION AND KEEP HANDY FOR LATER USE--**

```
//Your web app's Firebase configuration

const firebaseConfig = {

//your personal configuration here

};
```

###### Now continue to console and navigate to the Cloud Firestore.

![image](https://user-images.githubusercontent.com/81165469/210014985-50476934-7c87-44c7-a5a8-e80969a101c5.png)


###### Once the page loads, click on "Create database"

![image](https://user-images.githubusercontent.com/81165469/210015093-c507b38e-ba6d-4158-9a01-f66eecab1b98.png)


###### Select "Start in test mode" and proceed to the next step

![image](https://user-images.githubusercontent.com/81165469/210015190-e4b96ef8-dc7a-4b0b-9010-2d7b80fb8a64.png)


###### Select "eur3(Europe)" as your Cloud Firestore location and click "Enable"

![image](https://user-images.githubusercontent.com/81165469/210015378-d5c3bae2-b7df-46a8-abfb-f7844852fa2d.png)


###### You will now be met with the Panel View. To create your database, select "Start collection"

![image](https://user-images.githubusercontent.com/81165469/210015530-1ed03cf0-3a01-48f2-b20b-422bc0362c59.png)

###### Type "Users" as the Collection ID. It is important to keep these naming conventions as otherwise you would need to change some code within the app.

![image](https://user-images.githubusercontent.com/81165469/210015842-a07149cb-44f6-483a-9c14-8735c033b681.png)


###### Select "Auto-ID" to generate a unique Document ID 

![image](https://user-images.githubusercontent.com/81165469/210015940-b7f4da46-8c99-4acc-ac24-5338a125c411.png)


###### Name the first field "username", keep it of type string, and enter any value. For this tutorial, we have enetered "testusername".
###### Add another field and call it "email". Keep this field of type string and enter any value. For this tutorial, we have entered "test@email.com".
###### Once done, click "Save".

![image](https://user-images.githubusercontent.com/81165469/210016229-d2e9bc97-7e01-4ccc-a679-12211e4efc61.png)


###### Your Panel view should now look as follows

![image](https://user-images.githubusercontent.com/81165469/210016313-d542589d-979d-4b3c-8874-86df818400c7.png)



## Step 2: Create your React Native application

###### Open your terminal and paste the following commands to create an React-Native Expo app called "firestoreTest"

`npx create-expo-app firestoreTest --template`

###### Select the first option as the template;

`Blank - a minimal app as clean as an empty canvas`

###### Next, navigate to your app directory

`cd firestoreTest`

###### Open your app folder in your IDE of choice. For this tutorial, we have used VSCode.

###### Create a folder within this directory called "src", and create a file within it called "config.jsx"

![image](https://user-images.githubusercontent.com/81165469/210016894-33bb3617-f362-4765-9e11-80ebe7fffde8.png)


###### Paste the following in your "config.jsx" file.

```
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; 

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  //YOUR CODE HERE
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

//initialize firestore
export const db = getFirestore(app);
```


###### Navigate to your "App.js" file an paste the following code in it.

```
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
```

###### You may now run the following code in your terminal 

`npx expo start`

###### Your app should now be able to run as intended to.
###### You may input a username and email and press submit for that data to be added to your database.



![image](https://user-images.githubusercontent.com/81165469/210018793-22c6be3c-21e9-4244-b978-896d73fa5437.png)



###### To check if this is true, check the console for the following message

 `LOG  data submitted`
 
 **Simply check the Panel view in the Firebase console for your newly entered data and you are ready.**



