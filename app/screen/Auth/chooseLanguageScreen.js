import React from 'react';
import{
    View, Text, StyleSheet, Image, TouchableOpacity
}from 'react-native';

class LanguageScreen extends React.Component{
    render(){
        return(
            <View style={{flex:1,backgroundColor:'#f8bc06'}}>
                <View style={{alignItems:'center',marginTop:60}}>
                    <Text style={{fontWeight:'bold',fontSize:18}}>SELECT LANGUAGE</Text>
                </View>
                <View style={{alignItems:'center',marginTop:250}}>
                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={styles.language}>English</Text>
                    </TouchableOpacity>
                    
                    <Image source={require('../../assets/images/line4.png')}/>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={styles.language}>Chinese</Text>
                    </TouchableOpacity>
                    
                    <Image source={require('../../assets/images/line4.png')}/>

                    <TouchableOpacity onPress={()=>this.props.navigation.navigate('Home')}>
                        <Text style={styles.language}>Spanish</Text>
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

export default LanguageScreen;