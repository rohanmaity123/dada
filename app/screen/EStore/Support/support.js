import React from 'react';
import {
    View, TouchableOpacity, Text, TextInput, StyleSheet, Dimensions
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { Card, CardItem,Textarea, Button } from 'native-base';
import AllHeaderWithCart  from '@Component/Headers/HeaderWithCart/allHeaderwithCart';

class EStoreSupportScreen extends React.Component {
    render() {
        const Width = Dimensions.get('screen').width;
        return (
            <View style={{flex:1}}>
                <AllHeaderWithCart name="E-Store Support"/>
                <View style={{marginTop:25,width:'95%',alignSelf:'center'}}>
                    <Text style={{ textAlign: 'center',fontWeight:'bold' }}>Text Us For Your EStore  Support</Text>
                    <Text style={{marginVertical:5,color:'#8c8c8c',fontWeight:'bold'}}>Put Your Details Here</Text>
                </View>
                <Card style={{width:Width-10,alignSelf:'center',borderRadius:5,height:400}}>
                    <TextInput placeholder="Name" style={styles.inputType}/>
                    <TextInput placeholder="Email" style={styles.inputType}/>
                    <TextInput placeholder="Phone No." style={styles.inputType}/>
                    <Textarea rowSpan={5} bordered placeholder="Comment" style={{width:'95%',alignSelf:'center',borderRadius:10,marginVertical:10,paddingTop:10,paddingLeft:15}} placeholderTextColor="#ccc" />
                    <Button style={{backgroundColor:'#f8bc06',width:'95%',alignSelf:'center',borderRadius:10,justifyContent:'center'}}>
                        <Text style={{fontWeight:'bold'}}>SUBMIT</Text>
                    </Button>
                </Card>
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

export default EStoreSupportScreen;