import React from 'react';
import {
    View, Text,Dimensions
} from 'react-native';
import { Card } from 'native-base';

class TransactionCard extends React.Component {
    render() {
        const Width = Dimensions.get('window').width;
        const Height = Dimensions.get('window').height;
        
        return (
            <Card style={{ width: Width - 20, alignSelf: 'center', paddingVertical: 5,borderRadius:3 }}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 15 }}>Transaction Details</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 50, fontSize: 15 }}>#8523564122</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 15 }}>Amount</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 50, fontSize: 15,color:'green' }}>$500</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 15 }}>Date</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 50, fontSize: 15 }}>22-11-2019</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 15 }}>Payment Mode</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 50, fontSize: 15 }}>Online</Text>
                    </View>
                </View>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ flex: 1 }}>
                        <Text style={{ fontWeight: 'bold', marginHorizontal: 10, fontSize: 15 }}>Status</Text>
                    </View>
                    <View style={{ flex: 1 }}>
                        <Text style={{ marginLeft: 50, fontSize: 15,color:'green' }}>SUCCESS</Text>
                    </View>
                </View>
            </Card>
        )
    }
}

export default TransactionCard;