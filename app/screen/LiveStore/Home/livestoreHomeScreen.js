import React from 'react';
import{
    View, TextInput, Image, Dimensions, ScrollView,Text,StyleSheet
}from 'react-native';
import AllHeaderWithCart  from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import { Icon, Card, Body, Button, CardItem } from 'native-base';
import { Searchbar, shadow } from 'react-native-paper';
import ImageSlider from 'react-native-image-slider';

class LiveStoreHomeScreen extends React.Component{
    render(){
        const Width = Dimensions.get('screen').width; 
        const images = [
            require('@Assets/images/banner1.jpg'),
            require('@Assets/images/banner1.jpg'),
            require('@Assets/images/banner1.jpg'),
        ];
        return(

            <View style={{flex:1}}>
                <AllHeaderWithCart name="Live Store Home"/>
                <ScrollView showsVerticalScrollIndicator={false}>               
                    <View style={{marginTop:'2%',flexDirection:'row',borderWidth:1,boarderColor:'black',marginLeft:'2%',marginRight:'2%'}}>
                        <TextInput placeholder='Search By Live Product ' style={{width:'88%',height:40}} />
                        <Image source={require('@Assets/icons/search.png')} style={{backgroundColor:'black',height:40,width:42}} />
                    </View>
                    <View style={{height:155,marginTop:'2%'}}>
                    <ImageSlider
                            autoPlayWithInterval={3000}
                            images={images}
                            customSlide={({ index, item, style, width }) => (
                                // It's important to put style here because it's got offset inside
                                <View key={index} style={[style, styles.customSlide]}>
                                    <Image source={item} style={styles.customImage} />
                                </View>
                            )}
                        />
                    </View>
                    <Text style={styles.container}>Recommended store :</Text>
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
                    {/* <View style={{marginTop:'3%'}}>
                        <Card style={styles.customcard}>
                            <CardItem>
                                <Image 
                                        source={{uri:'https://www.cdc.gov/foodsafety/images/comms/GettyImages-898001644-300px.png'}}
                                        style={{height:150,width:180}}
                                    />
                            </CardItem>                           
                        </Card>
                    </View> */}
                    <Text style={styles.container}>
                        Upcoming Live Streaming
                    </Text>
                    <Text style={{textAlign:'center',marginTop:'8%',color:'red'}}>Upcoming Live Streaming Not Available !!</Text>
                    <Text style={styles.container}>2 Live Streaming</Text>
                    <View>
                        <Card style={styles.streemcard} >
                            <CardItem bordered button onPress={()=>this.props.navigation.navigate('LiveStoreProduct')}> 
                                <View >
                                    <Image 
                                        source={{uri:'http://www.clarity-comms.co.uk/wp-content/uploads/2016/11/social-media-agency-birmingham-clarity-comms-facebook-live-post.jpg'}}
                                        style={{height:80,width:90,marginRight:'10%'}}
                                    />                                    
                                </View>
                                <View >
                                    <Text style={styles.livetext}>PUBG Live Stream</Text>                                   
                                    <Text style={{width:180}}>25.55% OFF and OFFER Details</Text>
                                    <Button bordered danger style={{borderRadius:25,height:25,width:70}}>
                                        <Icon type='Entypo' name='controller-record' style={{color:'red',fontSize:10,marginRight:'2%'}} />
                                        <Text style={{color:'red',marginRight:'15%'}}>LIVE</Text>
                                    </Button>
                                </View>                               
                            </CardItem>                           
                        </Card>
                    </View>
                    <View>
                        <Card style={styles.streemcard}>
                            <CardItem bordered>
                                <View>
                                        <Image 
                                            source={{uri:'http://blog.freedocast.com/wp-content/uploads/2018/01/some-live-streaming-ideas-600.jpg'}}
                                            style={{height:80,width:90,marginRight:'10%'}}
                                        />                                       
                                </View>
                                <View>
                                    <Text style={styles.livetext}>Free Fire Live Stream</Text>
                                    <Text style={{width:180}}>33% OFF and OFFER Details</Text>
                                    <Button bordered danger style={{borderRadius:25,height:25,width:70}}>
                                        <Icon type='Entypo' name='controller-record' style={{color:'red',fontSize:10,marginRight:'2%'}} />
                                        <Text style={{color:'red',marginRight:'15%'}}>LIVE</Text>
                                    </Button>
                                </View>                               
                            </CardItem>                           
                        </Card>
                    </View>
                </ScrollView>               
            </View>
        )
    }
}

const styles = StyleSheet.create({
    streemcard:{
        height:120,
        width:'95%',
        marginLeft:'3%',
        marginTop:'3%',
        borderRadius:8
    },
    customcard:{
        height:160,
        width:200,
        marginLeft:'3%'
    },
    container:{
        fontWeight:'bold',
        marginTop:'3%',
        marginLeft:'2%',       
    },
    customSlide:{
        flex:1,       
    },
    customImage:{
        height:'100%',       
        width:'100%'
        
    },
    livetext:{
        marginTop:'1%',
        fontWeight:'bold',
        textDecorationLine:'underline'
    }
})

export default LiveStoreHomeScreen;