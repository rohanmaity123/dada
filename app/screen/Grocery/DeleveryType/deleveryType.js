import React from 'react';
import{
    View, Text, StyleSheet, Image, TouchableOpacity
}from 'react-native';
import NavigationService from '@Service/Navigation';

class GroceryDeleveryType extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f8bc06'}}>
                <View style={{alignItems:'center',marginTop:60}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>DELIVERY TYPE</Text>
                </View>
                <View style={{alignItems:'center',marginTop:250}}>
                    <TouchableOpacity onPress={()=>NavigationService.navigate('groceryHomeScreen',{'type' : 'Pickup'})}>
                        <Text style={styles.language}>PICKUP</Text>
                    </TouchableOpacity>
                    
                    <Image source={require('@Assets/images/line4.png')}/>

                    <TouchableOpacity onPress={()=>NavigationService.navigate('groceryHomeScreen',{'type' : 'delivery'})}>
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

export default GroceryDeleveryType;