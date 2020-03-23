import React from 'react';
import {
    View, Dimensions, Text
} from 'react-native';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { TouchableOpacity } from 'react-native-gesture-handler';
import NavigationService from '../../../Service/Navigation';

class AllNormalHeader extends React.Component {

    render() {
        const Width = Dimensions.get('screen').width;
        return (
            <View style={{ height: 55, width: Width, backgroundColor: '#f8bc06', justifyContent: 'center',elevation:5 }}>
                <View style={{ flexDirection: 'row' }}>
                    <TouchableOpacity style={{ width: 32, height: 32, marginHorizontal: 10, alignItems: 'center' }} onPress={()=>NavigationService.back()}>
                        <Ionicons name="ios-arrow-round-back" size={30} />
                    </TouchableOpacity>
                    <Text style={{ fontSize: 20, marginHorizontal: 10 }}>{this.props.name}</Text>
                </View>
            </View>
        )
    }
}

export default AllNormalHeader;