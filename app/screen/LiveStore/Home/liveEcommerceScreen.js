import React from 'react';
import {
    View,
    Text,
    StyleSheet,
    Image,
    ScrollView,
    Picker
} from 'react-native';
import AllHeaderWithCart  from '@Component/Headers/HeaderWithCart/allHeaderwithCart';
import ServicesHomeHeader from '@Component/Headers/HomeHeaders/servicesHomeHeader';
import { Icon, Button, Card, CardItem, Accordion, Container, Content } from 'native-base';
class EcommerceScreen extends React.Component {

    render() {
        return (
            <View style={{flex:1}}>
                <AllHeaderWithCart name="Live Ecommerce" />
                <ScrollView>                   
                    <View style={{ height: 40, flexDirection: 'row', marginTop: '2%' }}>
                        <Text style={{ fontWeight: 'bold', fontSize: 18, marginLeft: '3%' }}>Electronics</Text>
                        <Button bordered danger style={styles.livebutton}>
                            <Icon type='Entypo' name='controller-record' style={{ color: 'red', fontSize: 10, marginRight: '2%' }} />
                            <Text style={{ color: 'red', marginRight: '15%' }}>LIVE</Text>
                        </Button>
                    </View>
                    <View style={{ height: 30, borderBottomWidth: 1 }}>
                        <Text style={{ marginLeft: '3%' }}>Samsung Smart LED</Text>
                    </View>
                    <View>
                        <Card style={{ height: 230, width: 355 }}>
                            <CardItem>
                                <Image
                                    source={{ uri: 'http://www.clarity-comms.co.uk/wp-content/uploads/2016/11/social-media-agency-birmingham-clarity-comms-facebook-live-post.jpg' }}
                                    style={{ height: 200, width: 325, borderRadius: 10 }}
                                />
                            </CardItem>
                        </Card>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>Samsung Smart LED</Text>
                        <Text style={styles.title}>(128GB,Black)</Text>
                    </View>
                    <View>
                        <Text style={styles.title}>6 GB RAM</Text>
                    </View>
                    <View style={{ flexDirection: 'row' }}>
                        <Text style={styles.title}>Price :</Text>
                        <Text style={{ fontSize: 18, fontWeight: 'bold' }}> $100</Text>
                    </View>
                    <View style={{ marginTop: '5%' }}>
                        <Button style={{ backgroundColor: 'black', height: 45, width: 120, alignSelf: 'center', borderRadius: 10 }}>
                            <Text style={{ color: 'white', fontWeight: 'bold', marginLeft: '8%' }}>ADD TO CART</Text>
                        </Button>
                    </View>
                    {/* <View>
                        <Card style={styles.cardview}>
                            <CardItem>
                                <Text style={styles.containers}>All DESCRIPTIONS</Text>
                                <Icon type='AntDesign' name='caretup' style={{ fontSize: 30, marginLeft: '50%' }} />
                            </CardItem>
                        </Card>
                        <Card style={styles.cardview}>
                            <CardItem>
                                <Text style={styles.containers}>KEY FEATURES</Text>
                                <Icon type='AntDesign' name='caretup' style={{ fontSize: 30, marginLeft: '57%' }} />
                            </CardItem>
                        </Card>
                        <Card style={styles.cardview}>
                            <CardItem>
                                <Text style={styles.containers}>INGREDIENTS</Text>
                                <Icon type='AntDesign' name='caretup' style={{ fontSize: 30, marginLeft: '60%' }} />
                            </CardItem>
                        </Card>
                        <Card style={styles.cardview}>
                            <CardItem>
                                <Text style={styles.containers}>CONTANTS</Text>
                                <Icon type='AntDesign' name='caretup' style={{ fontSize: 30, marginLeft: '64%' }} />
                            </CardItem>
                        </Card>
                    </View> */}
                    <View style={{marginTop:'5%'}}>
                        <Container style={{height:300}}>
                            <Content padder>
                                <Accordion
                                    dataArray={dataArray}
                                    headerStyle={{ backgroundColor: "white" }}
                                    contentStyle={{ backgroundColor: "white"}}
                                />
                            </Content>
                        </Container>
                    </View>
                </ScrollView>

            </View>
        )
    }
}
const dataArray = [
    { title: "All Descriptions", content: "Hellow World 1" },
    { title: "Key Features", content: "Hellow World 2" },
    { title: "Ingridients", content: "Hellow World 3" },
    { title: "Contants", content: "Hellow World 4" }
];
const styles = StyleSheet.create({
    cardview: {
        height: 45,
        width: 355
    },
    containers: {
        fontWeight: 'bold',
        fontSize: 12
    },
    livebutton: {
        borderRadius: 25,
        height: 25,
        width: 70,
        marginLeft: '40%'
    },
    title: {
        marginLeft: '2%',
        fontSize: 18,
        textDecorationLine: 'underline'
    }
})
export default EcommerceScreen;