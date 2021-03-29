import React,{useContext} from 'react';
import {View,StyleSheet,Text} from 'react-native';
import {Button} from "react-native-elements";
import Spacer from "../components/spacer"
import {Context as AuthContext} from "../context/AuthContext";

/*
	we can use this to make sure that our content always be inside the dispaly screen
	import SafeAreaView from "react-navigation"
	<SafeAreaView forceInset={{top:'always'}}>
*/
const AccountScreen=()=>{
	const {signout}=useContext(AuthContext);
	return <View style={styles.container}>
			<Text style={{fontSize:48,textAlign:'center'}}> AccountScreen</Text>
			<Spacer/>
			<Spacer>
				<Button title="Sign Out" onPress={()=>{signout()}}/>
			</Spacer>
		</View>
};
 
const styles=StyleSheet.create({
	container:{
		flex:1,
		top:50,
	}
});
 
export default AccountScreen;             