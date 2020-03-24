import React from 'react';
import{
    View,Image,Text, TextInput, StyleSheet, TouchableOpacity,ToastAndroid,KeyboardAvoidingView,ScrollView
}from 'react-native';
import { Button } from 'native-base';
import Auth from '@Service/Auth';
import NavigationService from '@Service/Navigation';


class RegisterScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            email: '',
            pass: '',
            c_pass: '',   
            userdata:{}       
        };
    }
    register = async () => {
        if(this.state.name=="" || this.state.pass=="" || this.state.c_pass=="" || this.state.mobile=="" || this.state.email==""){
            ToastAndroid.show('Please Fill Out All Field', ToastAndroid.SHORT);
            
          }else if(this.state.mobile.length < 10){
            ToastAndroid.show('Please Enter Valid Mobile Number', ToastAndroid.SHORT);
             
      
          }else if(this.state.pass!=this.state.c_pass){
            ToastAndroid.show('Password Does Not Match', ToastAndroid.SHORT);
            
          }else if(this.state.validate==true){
            ToastAndroid.show('Invalid Email Id', ToastAndroid.SHORT);
            
          }else{
            let data = await Auth.register(this.state.name,this.state.mobile,this.state.email,this.state.pass);
        console.log("data",data)
            
            if(data.status==true){
             let regdata = await Auth.setAccount(data.data);
             console.log(regdata)
                ToastAndroid.show('Registered Successfully', ToastAndroid.SHORT);
                NavigationService.navigate('HomeStack');
            }else{
                ToastAndroid.show('Email Id or Mobile Number already Exist', ToastAndroid.SHORT);            
            }
          }
        
    }
    render(){
        return(
            <View style={{flex:1}}>                
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f8bc06'}}>
                    <Image source={require('../../assets/images/dada1.png')} style={{width:'60%',height:'60%'}}/>
                </View>
                <KeyboardAvoidingView>
                <ScrollView showsVerticalScrollIndicator={false}>
                <View style={{flex:3,backgroundColor:'#272626'}}>
                    <View style={{alignItems:'center',marginTop:25}}>
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Name"
                            onChangeText={(value)=>this.setState({ name: value}) }
                            value={this.state.name}
                        />
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Mobile"
                            keyboardType={'number-pad'} maxLength={10}
                            onChangeText={(value)=>this.setState({ mobile: value}) }
                            value={this.state.mobile}
                        />
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Email"
                            onChangeText={(value)=>this.setState({ email: value}) }
                            value={this.state.email}
                        />
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Password" secureTextEntry={true}
                            onChangeText={(value)=>this.setState({ pass: value}) }
                            value={this.state.pass}
                        />
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Confirm Password" secureTextEntry={true}
                            onChangeText={(value)=>this.setState({ c_pass: value}) }
                            value={this.state.c_pass}
                        />
                        <Button style={{
                            backgroundColor:'#f8bc06',
                            width:'30%',
                            justifyContent:'center',
                            borderRadius:50,
                            marginTop:10
                        }}
                            onPress={this.register}
                        >
                            <Text style={{fontWeight:'bold'}}>Register</Text>
                        </Button>
                    </View>
                    <View style={{alignItems:"center",marginTop:10}}>
                        <TouchableOpacity  onPress={()=>this.props.navigation.navigate('Login')}>
                            <Text style={{color:'#fff'}}>Existing User? LOGIN</Text>
                        </TouchableOpacity>
                    </View>
                </View>                
                </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputField:{
        backgroundColor:'#fff',
        width:'80%',
        marginVertical:8,
        height:50,
        borderRadius:25,
        borderWidth:2,
        borderColor:'#ccc',
        paddingLeft:20,
        fontSize:15
    }
})

export default RegisterScreen;