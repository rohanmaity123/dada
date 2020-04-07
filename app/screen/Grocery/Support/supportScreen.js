import React from 'react';
import{ 
    View,Text,TextInput,StyleSheet,Dimensions,ScrollView, KeyboardAvoidingView,ToastAndroid
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader';
import { Textarea,Button,Card } from 'native-base';
import groceryService from '../../../Service/groceryService';

class GrocerySupport extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            mobile: '',
            email: '',
            comment:''
        };
    }
    support = async () =>{
        if(this.state.name=="" || this.state.mobile=="" || this.state.email=="" || this.state.comment==""){
            ToastAndroid.show('Please Fill Out All Field', ToastAndroid.SHORT);
            
          }else if(this.state.mobile.length < 10){
            ToastAndroid.show('Please Enter Valid Mobile Number', ToastAndroid.SHORT);
            
          }else if(this.state.validate==true){
            ToastAndroid.show('Invalid Email Id', ToastAndroid.SHORT);
            
          }else{
            let data = await groceryService.support(this.state.name,this.state.mobile,this.state.email,this.state.comment);
        console.log("data",data)
            
            if(data.status==true){               
                ToastAndroid.show('Submited Successfully', ToastAndroid.SHORT);
            }else{
                ToastAndroid.show('somthing wrong', ToastAndroid.SHORT);            
            }
          }
    }
    render(){
        const Width = Dimensions.get('screen').width;
        return(
            <View>
                <AllNormalHeader name="Grocery Support" />
                <KeyboardAvoidingView>
                <ScrollView>
                <View style={{marginTop:25,width:'95%',alignSelf:'center'}}>
                    <Text style={{ textAlign: 'center',fontWeight:'bold' }}>Text Us For Your Grocery Support</Text>
                    <Text style={{marginVertical:5,color:'#8c8c8c',fontWeight:'bold'}}>Put Your Details Here</Text>
                </View>
                <Card style={{width:Width-10,alignSelf:'center',borderRadius:5,height:400}}>
                    <TextInput 
                        placeholder="Name" 
                        style={styles.inputType}
                        onChangeText={(value)=>this.setState({name:value})}
                        value ={this.state.name}
                    />
                    <TextInput 
                        placeholder="Email" 
                        style={styles.inputType}
                        onChangeText={(value)=>this.setState({email:value})}
                        value ={this.state.email}
                    />
                    <TextInput 
                        placeholder="Phone No." 
                        style={styles.inputType}
                        keyboardType={'number-pad'} maxLength={10}
                        onChangeText={(value)=>this.setState({mobile:value})}
                        value ={this.state.mobile}
                    />
                    <Textarea 
                        rowSpan={5} 
                        bordered placeholder="Comment" 
                        style={{width:'95%',alignSelf:'center',borderRadius:10,marginVertical:10,paddingTop:10,paddingLeft:15}} 
                        placeholderTextColor="#ccc"
                        onChangeText={(value)=>this.setState({comment:value})}
                        value ={this.state.comment}
                    />
                    <Button style={{
                        backgroundColor:'#f8bc06',
                        width:'95%',
                        alignSelf:'center',
                        borderRadius:10,
                        justifyContent:'center'                 
                        }}
                        onPress ={this.support}
                    >
                        <Text style={{fontWeight:'bold'}}>SUBMIT</Text>
                    </Button>
                </Card>
                </ScrollView>
                </KeyboardAvoidingView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    inputType:{
        alignSelf:'center',
        width:'95%',
        height:45,
        borderWidth:1,
        marginVertical:10,
        paddingLeft:15,
        borderRadius:10,
        borderColor:'#ccc'
    }
})

export default GrocerySupport;