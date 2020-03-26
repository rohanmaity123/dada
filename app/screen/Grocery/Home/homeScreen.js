import React from 'react';
import{
    View, TextInput, Image, Dimensions, ScrollView,StyleSheet,Text
}from 'react-native';
import ServicesHomeHeader from '@Component/Headers/HomeHeaders/servicesHomeHeader';
import { Icon, Card } from 'native-base';
import ImageSlider from 'react-native-image-slider';
import { TouchableOpacity } from 'react-native-gesture-handler';
import ShopCard from '../../../components/Grocery/Home/shopCard';
import groceryService from '../../../Service/groceryService';

class GroceryHomeScreen extends React.Component{

    async componentDidMount() {
        await this.shopDetails();
    }

    shopDetails = async () =>{
        let shop = groceryService.getshopdetails()
        console.log(shop)
    }
    render(){
        const images = [
            require('@Assets/images/slider_food.png'),
            require('@Assets/images/slider_food.png'),
            require('@Assets/images/slider_food.png'),
        ];
        const hotel = [
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
        const Width = Dimensions.get('screen').width; 
        return(
            <View style={{flex:1}}>
                <ServicesHomeHeader name="Shop Details"/>
                <ScrollView showsVerticalScrollIndicator={false}>
                    <View style={{flexDirection:'row',width:Width-14,alignSelf:'center',marginVertical:10,height:50}}>
                        <View style={{backgroundColor:'#000',width:'9%',height:40,alignItems:'center',justifyContent:'center'}}>
                            <Icon name="my-location" type="MaterialIcons" style={{fontSize:21,color:'#f8bc06'}}/>
                        </View>
                        <View style={{width:'82%'}}>
                            <TextInput style={{borderWidth:1,paddingLeft:10,height:40}}/>
                        </View>
                        <View style={{width:'9%',height:40,backgroundColor:'#000',alignItems:'center',justifyContent:'center'}}>
                            <Image source={require('@Assets/icons/search.png')}/>
                        </View>
                    </View>
                    <View style={{height:170,backgroundColor:'#fff'}}>
                        <ImageSlider
                            autoPlayWithInterval={4000}
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                // It's important to put style here because it's got offset inside
                                <View key={index} style={[style, styles.customSlide]}>
                                    <Image source={item} style={styles.customImage} resizeMode="stretch"/>
                                </View>
                            )}
                        />
                    </View>

                    <View style={{marginVertical:10}}>
                        <View style={{marginLeft:8,marginVertical:3}}>
                            <Text style={{fontSize:16,fontWeight:'bold'}}>Feature Partner :</Text>
                        </View>
                        <View>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{flexDirection:'row'}}>
                                    {
                                        images.map((item,index)=>{
                                            return(
                                                <Card style={{width:Width/1.9,borderRadius:5,marginLeft:8,height:140}} key={index}>
                                                    <Image source={require('@Assets/images/img_car.png')} style={{width:Width/1.9,height:140,borderRadius:5}}/>
                                                </Card>
                                            )
                                        })
                                    }
                                </View>
                            </ScrollView>
                        </View>
                    </View>

                    <View>
                        <View style={{marginLeft:10}}>
                            <Text style={{fontWeight:'bold'}}>4 Shop</Text>
                        </View>
                        <View>
                            {
                                hotel.map((item,index)=>{
                                    return(
                                        <ShopCard key={index}/>
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
})

export default GroceryHomeScreen;