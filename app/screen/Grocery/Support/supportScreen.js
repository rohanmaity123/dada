import React from 'react';
import{ 
    View,Text,TextInput,StyleSheet,Dimensions
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader';
import { Textarea,Button,Card } from 'native-base';

class GrocerySupport extends React.Component{
    render(){
        const Width = Dimensions.get('screen').width;
        return(
            <View>
                <AllNormalHeader name="Grocery Support" />
                <View style={{marginTop:25,width:'95%',alignSelf:'center'}}>
                    <Text style={{ textAlign: 'center',fontWeight:'bold' }}>Text Us For Your Grocery Support</Text>
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

export default GrocerySupport;