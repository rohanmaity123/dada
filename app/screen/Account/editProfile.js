import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    ScrollView,
    TextInput,
    Image
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader'; 
import { Button, Card, Body } from 'native-base';

class EditProfile extends React.Component{
    render(){
        return(
            <View style={{flex:1}}>
                <AllNormalHeader name="Edit Profile" navigateTo="AccountScreen"/>
                <ScrollView>                   
                    <View style={{backgroundColor:'#f8bc06',height:180}}>
                        <Card style={{height:100,width:100,borderRadius:50,alignSelf:'center',marginTop:'10%',borderWidth:2,borderColor:'black'}}>
                            <Body>
                                <Image 
                                    source={{uri:'https://www.pinclipart.com/picdir/middle/165-1659802_authorized-it-channel-partner-james-bond-profile-clipart.png'}}
                                    style={{height:100,width:100,marginTop:'2%',borderRadius:50}}
                                />
                            </Body>
                        </Card>
                    </View>
                    <View style={{backgroundColor:'#eee',height:'100%'}}>
                        <View style={styles.container}>
                            <Text style={styles.title}>First Name :</Text>
                            <TextInput style={{width:'60%'}} placeholder="Enter First Name"/>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Last Name :</Text>
                            <TextInput style={{width:'60%'}} placeholder="Enter Last Name"/>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Email :</Text>
                            <TextInput style={{width:'60%'}} placeholder="Enter Email" />
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Phone No :</Text>
                            <TextInput style={{width:'60%'}} placeholder="Enter Phone No"/>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Password :</Text>
                            <TextInput style={{width:'60%'}} placeholder="Enter Password"/>
                        </View>
                        <View style={styles.container}>
                            <Text style={styles.title}>Confirm  Password :</Text>
                            <TextInput style={{width:'60%'}} placeholder="Confirm Password" />
                        </View>
                        
                    </View>
                </ScrollView>                
                <Button style={{backgroundColor:'#f8bc06'}}>
                    <Text style={{marginLeft:'43%',fontSize:20,fontStyle:'italic'}}>Save</Text>
                </Button>                         
            </View>            
        )
    }
}
const styles = StyleSheet.create({
    container:{
        flexDirection:'row',
        marginTop:'5%',
        height:50,
        backgroundColor:'white',
        width:340,
        marginLeft:'3%',
        alignItems:'center',
    },
    title:{
        fontSize:15,
        fontWeight:'bold',
        width:'40%',
        marginLeft:'2%',        
    }
})
export default EditProfile;