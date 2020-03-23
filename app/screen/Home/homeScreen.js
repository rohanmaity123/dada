import React from 'react';
import {
    View,Image,StyleSheet, ScrollView, Text, TouchableOpacity
}from 'react-native';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Feather from 'react-native-vector-icons/Feather';
import ImageSlider from 'react-native-image-slider';
import FontAwesome5 from 'react-native-vector-icons/FontAwesome5';
import { Card } from 'native-base';
import OfferCard from '@Component/Home/offerCard';
import ProductCard from '@Component/Home/productCard';
import { PowerTranslator, ProviderTypes, TranslatorConfiguration, TranslatorFactory } from 'react-native-power-translator';
import NavigationService from '../../Service/Navigation';


class HomeScreen extends React.Component{
    static navigationOptions = ({navigation}) => ({
        headerRight: (
            <View style={{flexDirection:'row'}}>
              {/* <MaterialIcons name="notifications-active" size={30} style={{marginRight:15}}/> */}
              <Feather name="log-in" size={30} style={{marginRight:15}} onPress={()=>navigation.navigate('Login')}/>
            </View>
        ),
    });
    
    render(){
        // TranslatorConfiguration.setConfig(ProviderTypes.Google, 'AIzaSyB5ip6KC-9KCIjO9Q7Rm47dYJDmOdjLgM0', this.state.language);
        const images = [
            require('../../assets/images/banner1.jpg'),
            require('../../assets/images/banner1.jpg'),
            require('../../assets/images/banner1.jpg'),
        ];
        const offer = [
            {
                name:''
            },
            {
                name:''
            },
            {
                name:''
            },
            {
                name:''
            },
        ]
        return(
            <View style={{flex:1}}>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{height:155,backgroundColor:'#fff'}}>
                        <ImageSlider
                            autoPlayWithInterval={4000}
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                // It's important to put style here because it's got offset inside
                                <View key={index} style={[style, styles.customSlide]}>
                                    <Image source={item} style={styles.customImage} />
                                </View>
                            )}
                        />
                    </View>
                    <View style={{height:130}}>
                        <View style={{marginVertical:25,flexDirection:'row',marginHorizontal:5}}>
                            <TouchableOpacity style={{alignItems:'center',height:80,width:70}}  onPress={()=>NavigationService.navigate('CarMapScreen')}>
                                <View style={styles.circleIcon}>
                                    <Image source={require('../../assets/icons/car_booking.png')} style={{height:40,width:40}}/>
                                </View>
                                <Text>Car</Text>
                                {/* <PowerTranslator text={'Car'}/> */}
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:'center',height:80,width:70}} onPress={()=>NavigationService.navigate('FoodDeleveryTypeScreen')}>
                                <View style={styles.circleIcon}>
                                    <Image source={require('../../assets/icons/food_booking.png')} style={{height:35,width:35}}/>
                                </View>
                                <Text>Food</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:'center',height:80,width:70}} onPress={()=>NavigationService.navigate('GroceryDeleveryTypeScreen')}>
                                <View style={styles.circleIcon}>
                                    <Image source={require('../../assets/icons/grocery_booking.png')} style={{height:35,width:35}} />
                                </View>
                                <Text>Grocery</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:'center',height:80,width:70}} onPress={()=>NavigationService.navigate('EStoreScreen')}>
                                <View style={styles.circleIcon}>
                                    <Image source={require('../../assets/icons/shopping1_booking.png')} style={{height:50,width:50,marginLeft:-5}}/>
                                </View>
                                <Text>E-Store</Text>
                            </TouchableOpacity>

                            <TouchableOpacity style={{alignItems:'center',height:80,width:70}} onPress={()=>NavigationService.navigate('LiveStoreScreen')}>
                                <View style={styles.circleIcon}>
                                    <Image source={require('../../assets/icons/news_booking.png')} style={{height:30,width:30}} />
                                </View>
                                <Text>Live Store</Text>
                            </TouchableOpacity>
                        </View>
                    </View>
                    <View style={{width:'100%'}}>
                        <View style={{width:'100%',flexWrap:'wrap',flexDirection:'row',marginHorizontal:5}}>
                            {
                                offer.map((item,index)=>{
                                    return(
                                        <OfferCard key={index}/>
                                    )
                                })
                            }
                        </View>

                        <View style={{width:'100%',flexWrap:'wrap',flexDirection:'row',marginHorizontal:5}}>
                            {
                                offer.map((item,index)=>{
                                    return(
                                        <ProductCard key={index}/>
                                    )
                                })
                            }
                        </View>
                    </View>
                </ScrollView>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    customSlide:{
        flex:1
    },
    customImage:{
        height:'100%',
        resizeMode:'contain'
    },
    circleIcon: {
        height:60,
        width:60,
        backgroundColor:'#f8bc06',
        borderRadius:60,
        borderWidth:1,
        borderColor:'#cacbcb',
        justifyContent:'center',
        alignItems:'center'
    }
})

export default HomeScreen;