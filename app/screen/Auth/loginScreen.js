import React from 'react';
import{
    View,Image,Text, TextInput, StyleSheet, TouchableOpacity, Modal
}from 'react-native';
import { Button } from 'native-base';
import AuthService from '@Service/Auth';
import Storage from '@Utils/Storage';
import NavigationService from '@Service/Navigation'

class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
          mobile:'',
          pass:'',
        };
      }
    async login() {
        let deta=  await AuthService.login(this.state.mobile,this.state.pass)
        //  if(deta.status==true){
            this.setState({
              account: deta.data,
          });
          ToastAndroid.show('Login Successfully', ToastAndroid.SHORT);
          await AuthService.setAccount(this.state.account);
          NavigationService.navigate('CarScreen');
        //  }else{
        //     ToastAndroid.show('Invalid Mobile Number or Password', ToastAndroid.SHORT)
        
        //  }
      }
    render(){
        return(
            <View style={{flex:1}}>
                <View style={{flex:1,alignItems:'center',justifyContent:'center',backgroundColor:'#f8bc06'}}>
                    <Image source={require('../../assets/images/dada1.png')} style={{width:'60%',height:'60%'}}/>
                </View>
                <View style={{flex:3,backgroundColor:'#272626'}}>
                    <View style={{justifyContent:'center',alignItems:'center'}}>
                        <Text style={{color:'#fff',marginTop:15,fontWeight:"bold"}}>Lets sign you in!</Text>
                        <Text style={{color:'#fff',marginTop:5}}>please enter your mobile number</Text>
                    </View>
                    <View style={{alignItems:'center',marginTop:25}}>
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Mobile No."
                            onChangeText={(value)=>this.setState({ mobile: value})}
                             value={this.state.mobile}
                        />
                        <TextInput 
                            style={styles.inputField} 
                            placeholder="Enter Password" secureTextEntry={true}
                            onChangeText={(value)=>this.setState({ pass: value})}
                        value={this.state.pass}
                        />
                        <Button style={{backgroundColor:'#f8bc06',width:'30%',justifyContent:'center',borderRadius:50,marginTop:10}} onPress={this.login}>
                            <Text style={{fontWeight:'bold'}}>Log In</Text>
                        </Button>
                    </View>
                    <View style={{alignItems:"center",marginTop:10}}>
                        <Text style={{color:'#fff'}}>Forgot Your Password?</Text>
                        <TouchableOpacity style={{marginTop:20}} onPress={()=>this.props.navigation.navigate('Register')}>
                            <Text style={{color:'#fff'}}>New User? Register Here</Text>
                        </TouchableOpacity>
                    </View>
                </View>
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

export default LoginScreen;