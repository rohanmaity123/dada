import React from 'react';
import {
    View,
    Text,
    Platform,
    TextInput,
    TouchableNativeFeedback,
    Image,
    StyleSheet,
    Modal,
    TouchableOpacity,
    Dimensions,
    ScrollView
} from 'react-native';
import MapView, { PROVIDER_GOOGLE } from 'react-native-maps';
import { Card, Body, Icon, Button, ListItem, Left, Right, Radio, CardItem } from 'native-base';
import { Searchbar, shadow } from 'react-native-paper';

class CarScreen extends React.Component {
    state = {
        search: '',
    };

    updateSearch = search => {
        this.setState({ search });
    };
    constructor(props) {
        super(props);
        this.state = {
            Elactronics: false,
            Fashion: false,
            Furniture: false,
            shortModal: false,
            carModal: false,
        }
    };

    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
        const { search } = this.state;
        return (
            <View style={{ flex: 1 }}>


                <MapView
                    style={{ flex: 1 }}
                    provider={PROVIDER_GOOGLE}
                    showsUserLocation
                    initialRegion={{
                        latitude: 37.78825,
                        longitude: -122.4324,
                        latitudeDelta: 0.0922,
                        longitudeDelta: 0.0421
                    }}
                />
                <View style={{ position: 'absolute', width: '100%', top: 80 }}>
                    <View >
                        <TouchableNativeFeedback onPress={() => this.setState({ shortModal: true, carModal: false })}>
                            <View style={{  marginLeft: '2%', marginRight: '2%', height: 40, backgroundColor: 'white', borderRadius: 5, height: 50 }}>
                                <Text >Pick Up From</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                    <View style={{ marginTop: '0.5%' }}>
                        <TouchableNativeFeedback onPress={() => this.setState({ carModal: true })}>
                            <View style={{   marginLeft: '2%', marginRight: '2%', height: 40, backgroundColor: 'white', borderRadius: 5, height: 50 }}>
                                <Text>Enter Drop Location</Text>
                            </View>
                        </TouchableNativeFeedback>
                    </View>
                </View>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.shortModal}
                    onRequestClose={() => this.setState({ shortModal: false })}
                >
                    <View style={{ backgroundColor: '#000000ba', height: Height, width: Width, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ height: '30%', width: Width }} onPress={() => this.setState({ shortModal: false })}>

                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#dadada', height: '70%', width: '100%' }}>
                            <Text style={{ fontWeight: 'bold', fontSize: 20, textAlign: 'center', marginTop: '2%' }}>Enter Location</Text>
                            <View style={{ marginTop: '2%', borderWidth: 1, boarderColor: 'black', marginLeft: '2%', marginRight: '2%', height: 45, backgroundColor: 'white', borderRadius: 10, marginTop: '3%' }}>
                                <Searchbar placeholder='Search By Live Product ' style={{ width: '99%', height: 40 }} />
                            </View>
                            <View style={{ marginTop: '2%', borderWidth: 1, boarderColor: 'black', marginLeft: '2%', marginRight: '2%', height: 45, backgroundColor: 'white', borderRadius: 10, marginTop: '2%' }}>
                                <Searchbar placeholder='Search By Live Product ' style={{ width: '99%', height: 40 }} />
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: '5%' }}>
                                <View style={{ marginLeft: '3%', marginTop: '3%' }}>
                                    <Icon type='MaterialCommunityIcons' name='home-circle' style={{ fontSize: 40 }} />
                                </View>
                                <View style={{ marginLeft: '8%' }}>
                                    <Text style={{ fontSize: 18 }}>Add Home</Text>
                                    <Text>DN37,DN BLOCK,SECTOR V,Bidhannager,kolkata,westbengal</Text>

                                </View >
                                <View >
                                    <Icon type='Entypo' name='circle-with-cross' style={{ fontSize: 10 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: '1%', height: 60, width: '100%' }}>
                                <View style={{ marginLeft: '3%', marginTop: '1%' }}>
                                    <Icon type='MaterialIcons' name='work' style={{ fontSize: 40 }} />
                                </View>
                                <View style={{ marginLeft: '8%' }}>
                                    <Text style={{ fontSize: 18 }}>Add Work</Text>
                                    <Text>New Town</Text>

                                </View >
                                <View style={{ marginLeft: '47%', marginTop: '6%' }}>
                                    <Icon type='Entypo' name='circle-with-cross' style={{ fontSize: 10 }} />
                                </View>
                            </View>
                            <View style={{ flexDirection: 'row', backgroundColor: 'white', marginTop: '1%', height: 60, width: '100%' }}>
                                <View style={{ marginLeft: '3%', marginTop: '1%' }}>
                                    <Icon type='MaterialCommunityIcons' name='star-circle' style={{ fontSize: 40 }} />
                                </View>
                                <View style={{ marginLeft: '8%', marginTop: '4%' }}>
                                    <Text style={{ fontSize: 18 }}>Saved Places</Text>
                                </View >
                                <View style={{ marginLeft: '35%', marginTop: '5%' }}>
                                    <Icon type='AntDesign' name='right' style={{ fontSize: 25 }} />
                                </View>
                            </View>
                        </View>
                    </View>
                </Modal>
                <Modal
                    animationType="slide"
                    transparent={true}
                    visible={this.state.carModal}
                    onRequestClose={() => this.setState({ carModal: false })}
                >
                    <View style={{ backgroundColor: '#000000ba', height: Height, width: Width, alignItems: 'center', justifyContent: 'flex-end' }}>
                        <TouchableOpacity style={{ height: '60%', width: Width }} onPress={() => this.setState({ carModal: false })}>

                        </TouchableOpacity>
                        <View style={{ backgroundColor: '#fff', height: '40%', width: '100%' }}>
                            <Text style={{ textAlign: 'center', marginTop: '3%' }}>Compact cars,affordable every day</Text>
                            <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                                <View style={{ flexDirection: 'row' }}>
                                    <View >
                                        <Card style={{ height: 70, width: 70, borderRadius: 40 }}>
                                            <Body>
                                                <Image source={{ uri: 'https://www.nicepng.com/png/detail/109-1093625_car-vector-png.png' }}
                                                    style={{ height: 35, width: 58, marginTop: '30%' }}
                                                />
                                            </Body>

                                        </Card>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>POOL</Text>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>$96</Text>
                                    </View>
                                    <View>
                                        <Card style={{ height: 70, width: 70, borderRadius: 40 }}>
                                            <Body>
                                                <Image source={{ uri: 'https://cdn.clipart.email/736e01083fb20640f49fbfcd622185a5_green-car-material-cartoon-car-vacation-png-image-and-clipart-_650-400.jpeg' }}
                                                    style={{ height: 35, width: 58, marginTop: '30%' }}
                                                />
                                            </Body>
                                        </Card>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>GO</Text>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>$118</Text>
                                    </View>
                                    <View>
                                        <Card style={{ height: 70, width: 70, borderRadius: 40 }}>
                                            <Body>
                                                <Image source={{ uri: 'https://thumbs.dreamstime.com/t/yellow-car-illustration-white-background-66296617.jpg' }}
                                                    style={{ height: 35, width: 58, marginTop: '30%' }}
                                                />
                                            </Body>
                                        </Card>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>PREMIER</Text>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>$139</Text>
                                    </View>
                                    <View>
                                        <Card style={{ height: 70, width: 70, borderRadius: 40 }}>
                                            <Body>
                                                <Image source={{ uri: 'https://previews.123rf.com/images/photoestelar/photoestelar1705/photoestelar170500165/77835235-motocross-rider-isolated-over-white-backgrorund-cartoon-style-conceptual-illustration-about-motocros.jpg' }}
                                                    style={{ height: 35, width: 58, marginTop: '30%' }}
                                                />
                                            </Body>
                                        </Card>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>BIKE</Text>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>$43</Text>
                                    </View>
                                    <View>
                                        <Card style={{ height: 70, width: 70, borderRadius: 40 }}>
                                            <Body>
                                                <Image source={{ uri: 'https://i.pinimg.com/originals/27/8a/99/278a99ac7ece24bfcc4e00b469270a79.png' }}
                                                    style={{ height: 35, width: 58, marginTop: '30%' }}
                                                />
                                            </Body>
                                        </Card>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>HOSPITAL</Text>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>$54</Text>
                                    </View>
                                    <View>
                                        <Card style={{ height: 70, width: 70, borderRadius: 40 }}>
                                            <Body>
                                                <Image source={{ uri: 'https://png.pngtree.com/png-clipart/20190517/original/pngtree-hand-drawn-cartoon-volunteer-doing-public-welfare-help-png-image_3849065.jpg' }}
                                                    style={{ height: 35, width: 58, marginTop: '30%' }}
                                                />
                                            </Body>
                                        </Card>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>OTHERS</Text>
                                        <Text style={{ textAlign: 'center', fontWeight: 'bold' }}>$107</Text>
                                    </View>

                                </View>
                            </ScrollView>
                                <View style={{marginBottom:'15%'}}> 
                                    <Button style={{height:32,width:130,alignSelf:'center',backgroundColor:'black',borderRadius:5}}>
                                        <Text style={{fontWeight:'bold',color:'white',marginLeft:'12%'}}>
                                            CONFIRM GO
                                        </Text>
                                    </Button>
                                </View>
                        </View>                        
                    </View>
                </Modal>
            </View>
        )
    }
}
export default CarScreen;