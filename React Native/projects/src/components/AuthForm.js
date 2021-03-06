import React,{useState} from 'react';
import {View,StyleSheet,TouchableOpacity} from 'react-native';
import {Input,Text,Button} from "react-native-elements";
import Spacer from "./spacer"
import {Context as AuthContext } from "../context/AuthContext";

const AuthForm=({text,type,state,callback,navcallback})=>{
	const [email,setEmail]=useState('');
	const [password,setPassword]=useState('');
	
	return <View style={styles.container} >
			<Spacer>
			<Text h3>{type} for Tracker</Text>
			</Spacer>
			<Spacer/>
			<Input 
				label="Email" 
				value={email} 
				onChangeText={setEmail} 
				autoCapitalize="none" 
				autoCorrect={false} 
			/>
			<Input 
				label="Password" 
				value={password} 
				onChangeText={setPassword} 
				autoCapitalize="none" 
				autoCorrect={false} 
				secureTextEntry
			/>
			{ state.errorMessage!="" ? <Spacer><Text style={styles.errorMesage}>{state.errorMessage}</Text></Spacer>:null}
			<Spacer>
			<Button title={type} onPress={()=>{callback({email,password})}}/>
			</Spacer>
			<Spacer>
				<TouchableOpacity onPress={()=>{navcallback()}}>
					<Text style={styles.link}>{text}</Text>
				</TouchableOpacity>
			</Spacer>
		</View>
};

const styles=StyleSheet.create({
	container:{
		flex:1,
		justifyContent:'center',
		marginBottom:100
	},
	errorMesage:{
		fontSize:16,
		color:'red'
	},
	link:{
		color:'blue',
		fontSize:18
	}
});

export default AuthForm;