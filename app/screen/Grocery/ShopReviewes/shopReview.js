import React from 'react';
import {
    View,Text, Dimensions, Image, ScrollView
}from 'react-native';
import AllNormalHeader from '@Component/Headers/normalHeaders/allNormalHeader';
import StarRating from 'react-native-star-rating';
import ShopFeedbackCard from '@Component/Grocery/ShopReview/shopRiviewCard';

class ShopFeedback extends React.Component{
    render(){
        const reviewes = [
            {
                review:''
            },
            {
                review:''
            },
            {
                review:''
            },
            {
                review:''
            },
            {
                review:''
            },
            {
                review:''
            },
            {
                review:''
            },
        ]
        const Width = Dimensions.get('screen').width;
        return(
            <View style={{width:Width,alignItems:'center'}}>
                <AllNormalHeader name="Shop Reviews"/>
                <View style={{borderBottomWidth:1,width:'95%',borderBottomColor:'#ccc'}}>
                    <View style={{alignItems:'center',marginVertical:10}}>
                        <Text style={{fontSize:18}}>RM Groffers</Text>
                    </View>
                    <View style={{flexDirection:'row',justifyContent:'center',alignItems:'center',marginVertical:10}}>
                        <Text style={{marginHorizontal:10}}>{3.5}</Text>
                        <StarRating
                            disabled={true}
                            maxStars={5}
                            halfStarEnabled={true}
                            rating={3.5}
                            fullStarColor={'orange'}
                            starSize={30}
                        />
                    </View>
                </View>
                <ScrollView style={{width:Width,marginVertical:5}} showsVerticalScrollIndicator={false}>
                    {
                        reviewes.map((item,index)=>{
                            return(
                                <ShopFeedbackCard key={index}/>
                            )
                        })
                    }
                </ScrollView>
            </View>
        )
    }
}

export default ShopFeedback;