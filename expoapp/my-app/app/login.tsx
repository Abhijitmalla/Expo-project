import { View, Text, Image, StyleSheet, TextInput, TouchableOpacity, ImageBackground } from 'react-native';
import React from 'react';
import { useRouter,Link } from 'expo-router';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import { LinearGradient } from 'expo-linear-gradient'; // Corrected import
import AntDesign from 'react-native-vector-icons/AntDesign';
import { ScrollView } from 'react-native-gesture-handler';
import { auth } from '@/FirebaseConfig';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { useState } from 'react';

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState(null);


  const handleLogin = () => {
    if (!email || !password) {
      alert('Please enter email and password');
      return;
    }
  
    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        const user = userCredential.user;
        alert('User logged in successfully!');
  
        // Navigate to home page with query params
        router.push(`/home?email=${user.email}`);
  
        setEmail('');
        setPassword('');
      })
      .catch((error) => {
        setErrorMessage(error.message);
      });
  };
  // const onLogin = () => {
  //   router.navigate('/home'); // Corrected navigation method
  // };
  const onCreate = () => {
    router.navigate('/signup'); // Corrected navigation method
  };

  return (
    <View style={styles.container}>
      <View style={styles.topImageContainer}>
      <Image source={require("../assets/images/Vector 1.png")} style={styles.topImage}/>
      </View>
      
      <Text style={styles.signText}>Sign in to your account</Text>

      {/* Email Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome name={"mail"} size={24} color={"black"} style={styles.inputIcon} />
        <TextInput 
         placeholder='E-mail' 
         value={email}
         onChangeText={setEmail}
          style={{
            flex: 1,
            fontSize: 16,
            color: "black",
           
          }} 
          placeholderTextColor="#777" 
          autoCapitalize='none'
        onChangeText={(text) => setEmail(text.toLowerCase())}
         
        />
      </View>

      {/* Password Input Field */}
      <View style={styles.inputContainer}>
        <FontAwesome name={"lock"} size={24} color={"black"} style={styles.inputIcon} />
        <TextInput 
          style={styles.textInput} 
          placeholder="Password" 
          placeholderTextColor="#777"
          secureTextEntry={true} 
        />
      </View>

      <Text style={styles.forgetPassword}>Forgot Password?</Text>

      {/* Sign In Button */}
      <TouchableOpacity style={styles.signinBtn} onPress={handleLogin}>
      <Text style={styles.signText}>Sign In</Text>
      <LinearGradient colors={['#F97794', '#D16798', '#623AA2']} style={styles.linearGradient}>
 <AntDesign
 name={"arrowright"}
 size={24}
 color={"white"}
 />
</LinearGradient>
      </TouchableOpacity>
      <Text style={styles.footer}>
  Don't have an Account? 
  <Text style={{ textDecorationLine: "underline",color:"blue" }} onPress={onCreate}>Create</Text>
</Text>
    <View style={styles.image2}>
<ImageBackground source={require("../assets/images/Vector 2.png")} style={styles.imageStyle}/>
    </View>
    </View>
  );
};

export default Login;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    flex:1,
    position:"relative",
  },
  topImageContainer:{},
  topImage:{
    width:"100%",
    height:130,
  },

  signText: {
    textAlign: "center",
    fontSize: 18,
    color: "black",
    marginBottom: 20,
    fontWeight: "bold",
  },
  inputContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#fff",
    borderRadius: 20,
    marginHorizontal: 40,
    paddingHorizontal: 15,
    elevation: 10, // Android shadow
    shadowColor: "#000", // iOS shadow
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.2,
    shadowRadius: 4,
    height: 50,
    width: "80%",
    marginBottom: 15,
  },
  inputIcon: {
    marginRight: 10,
  },
  // textInput: {
  //   flex: 1,
  //   fontSize: 16,
  //   color: "black",
  // },
  forgetPassword: {
    color: "#BEBEBE",
    textAlign: "right",
    width: "80%",
    fontSize: 15,
    marginBottom: 20,
  },
  
  linearGradient: {
   height:34,
   width:56,
   borderRadius:17,
   alignItems:"center",
   justifyContent:"center",
   marginHorizontal:10,
  },
  signinBtn:{
    flexDirection:"row",
    marginTop:120,
    width:"90%",
    justifyContent:"flex-end",
  },
  footer:{
    color:'262626',
    textAlign:"center",
    fontSize:18,
    marginTop:120,
  },
  image2:{
position:"absolute",
bottom:0,
left:0,
  },
  imageStyle:{
    height:350,
    width:150,
  },
   
  })