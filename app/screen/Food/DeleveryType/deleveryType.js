import React from 'react';
import{
    View, Text, StyleSheet, Image, TouchableOpacity
}from 'react-native';
import { Container, Header, Content, Footer, FooterTab, Button, Icon } from 'native-base';

class DeleveryType extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f8bc06'}}>
                <View style={{alignItems:'center',marginTop:60}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>DELIVERY TYPE</Text>
                </View>
                <View style={{alignItems:'center',marginTop:250}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('FoodScreen')}>
                        <Text style={styles.language}>PICKUP</Text>
                    </TouchableOpacity>
                    
                    <Image source={require('@Assets/images/line4.png')}/>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('FoodScreen')}>
                        <Text style={styles.language}>DELIVERY</Text>
                    </TouchableOpacity>
                    
                </View> 
            </View>
        )
    }
}

const styles = StyleSheet.create({
    language:{
        fontSize:18,
        fontWeight:'bold'
    }
})

export default DeleveryType;