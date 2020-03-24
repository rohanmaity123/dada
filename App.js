import React,{Component} from 'react';
import { ActivityIndicator, StyleSheet, View } from 'react-native'
import { createAppContainer,createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import { Root} from 'native-base';
import Storage from '@Utils/Storage';
import NavigationService from './app/Service/Navigation';
import LoginScreen from './app/screen/Auth/loginScreen'
import RegisterScreen from './app/screen/Auth/registerScreen';
import HomeScreen from './app/screen/Home/homeScreen';
import LanguageScreen from './app/screen/Auth/chooseLanguageScreen';
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import WalletScreen from './app/screen/Wallet/walletScreen';
import { createBottomTabNavigator } from 'react-navigation-tabs';
import Entypo from 'react-native-vector-icons/Entypo';
import AddMoney from './app/screen/Wallet/addMoney';
import OrderScreen from './app/screen/Order/orderScreen';
import SupportScreen from './app/screen/Support/supportScreen';
import { Image } from 'react-native';
import AccountScreen from './app/screen/Account/accountScreen';
import DeleveryType from './app/screen/Food/DeleveryType/deleveryType';
import FoodHomeScreen from './app/screen/Food/Home/foodHomeScreen';
import FoodOrderScreen from './app/screen/Food/Order/foodOrderScreen';
import FoodSupport from './app/screen/Food/Support/foodSupport';
import ShopReview from './app/screen/Food/ShopReviewes/shopReview';
import SingleRestaurent from './app/screen/Food/Restaurant/singleRestaurant';
import SingleFood from './app/screen/Food/Restaurant/singleFood';
import CartScreen from './app/screen/Food/Cart/cartScreen';
import SingleMeal from './app/screen/Food/Restaurant/singleMeal';



import LiveStoreDeleveryType from './app/screen/LiveStore/DeleveryType/deleveryType';
import LiveStoreHomeScreen from './app/screen/LiveStore/Home/livestoreHomeScreen';
import LiveStoreOrderScreen from './app/screen/LiveStore/Order/liveStoreOrderScreen';
import LiveStoreSupportScreen from './app/screen/LiveStore/Support/LiveStoreSupportScreen';
import EditProfile from './app/screen/Account/editProfile';
import ProductScreen from './app/screen/LiveStore/Home/productScreen';
import EcommerceScreen from './app/screen/LiveStore/Home/liveEcommerceScreen';
import EStoreDeleveryType from './app/screen/EStore/DeleveryType/deleveryType';
import CatagoryType from './app/screen/EStore/Catagory/catagory';
import EStoreHomeScreen from './app/screen/EStore/Home/home';
import EStoreOrder from './app/screen/EStore/Order/order';
import EStoreSupportScreen from './app/screen/EStore/Support/support';
import CarScreen from './app/screen/Car/carSupport';
import GroceryDeleveryType from './app/screen/Grocery/DeleveryType/deleveryType';
import GroceryHomeScreen from './app/screen/Grocery/Home/homeScreen';
import GroceryOrderScreen from './app/screen/Grocery/Order/orderScreen';
import GrocerySupport from './app/screen/Grocery/Support/supportScreen';
import SingleShop from './app/screen/Grocery/Shop/singleShop';
import ShopFeedbackCard from './app/screen/Grocery/ShopReviewes/shopReview';
import GroceryCatagoryType from './app/screen/Grocery/Category/categoryType';
import Icon from 'react-native-vector-icons/FontAwesome';


const HomeStackNavigator = createStackNavigator({
  HomeStack:{
    screen: HomeScreen,
    navigationOptions:{
      title:'DADA USER',
      headerLeft: false,
      headerStyle:{
        backgroundColor:'#f8bc06'
      }
    }
  },

})

const foodStackNavigator = createStackNavigator({
  SingleShopPage:{
    screen: SingleRestaurent
  },
  FoodSingleScreen:{
    screen: SingleFood
  },
  MealSingleScreen:{
    screen: SingleMeal
  }
},{
  headerMode:'none'
})

const FoodTabNavigator = createBottomTabNavigator({
  FoodHomeTab:{
    screen: FoodHomeScreen,
    navigationOptions:{
      title:'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={30} color={tintColor} />
    }
  },
  FoodOrderTab:{
    screen: FoodOrderScreen,
    navigationOptions:{
      title:'Order',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/order_logo.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
  FoodSupportTab:{
    screen: FoodSupport,
    navigationOptions:{
      title:'Support',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/contact_us.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  }
},{
  initialRouteName:'FoodHomeTab'
});

const GroceryStackNavigator = createStackNavigator({
  ShopPage:{
    screen: SingleShop
  },
  FoodSingleScreen:{
    screen: SingleFood
  },
  MealSingleScreen:{
    screen: SingleMeal
  }
},{
  headerMode:'none'
})

const GroceryTabNavigator = createBottomTabNavigator({
  GroceryHomeTab:{
    screen: GroceryHomeScreen,
    navigationOptions:{
      title:'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={30} color={tintColor} />
    }
  },
  GroceryOrderTab:{
    screen: GroceryOrderScreen,
    navigationOptions:{
      title:'Order',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/order_logo.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
  GrocerySupportTab:{
    screen: GrocerySupport,
    navigationOptions:{
      title:'Support',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/contact_us.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  }
},{
  initialRouteName:'GroceryHomeTab'
});

const LiveStoreTabNavigator = createBottomTabNavigator({
  LiveStoreHomeTab:{
    screen: LiveStoreHomeScreen,
    navigationOptions:{
      title:'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={30} color={tintColor} />
    }
  },
  LiveStoreOrderTab:{
    screen: LiveStoreOrderScreen,
    navigationOptions:{
      title:'Order',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/order_logo.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
  LiveStoreSupportTab:{
    screen: LiveStoreSupportScreen,
    navigationOptions:{
      title:'Support',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/contact_us.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
},{
  initialRouteName:'LiveStoreHomeTab',
  tabBarOptions:{
    activeTintColor:'#f8bc06'
  }
});
const EStoreTabNavigator = createBottomTabNavigator({
  EStoreStoreHomeTab:{
    screen: EStoreHomeScreen,
    navigationOptions:{
      title:'Home',
      tabBarIcon: ({ tintColor }) => <FontAwesome name="home" size={30} color={tintColor} />
    }
  },
  EStoreStoreOrderTab:{
    screen: EStoreOrder,
    navigationOptions:{
      title:'Order',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/order_logo.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
  EStoreStoreSupportTab:{
    screen: EStoreSupportScreen,
    navigationOptions:{
      title:'Support',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/contact_us.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
},{
  initialRouteName:'EStoreStoreHomeTab',
  tabBarOptions:{
    activeTintColor:'#f8bc06'
  }
});

const HomeTabNavigator = createBottomTabNavigator({
  HomeTab:{
    screen: HomeStackNavigator,
    navigationOptions:{
      title:'Home',
      tabBarIcon: ({ tintColor }) => <Icon name="home" type="AntDesign" size={30} color={tintColor} />
    }
  },
  WalletTab:{
    screen: WalletScreen,
    navigationOptions:{
      title:'Wallet',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/wallet_btm.png')} style={{height:30,width:30,opacity:0.7}}/>,
      tabBarVisible: false
    }
  },
  OrderTab:{
    screen: OrderScreen,
    navigationOptions:{
      title:'Order',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/order_logo.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
  SupportTab:{
    screen:SupportScreen,
    navigationOptions:{
      title:'Support',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/contact_us.png')} style={{height:30,width:30,opacity:0.5}}/>,
      tabBarVisible: false
    }
  },
  AccountTab:{
    screen: AccountScreen,
    navigationOptions:{
      title:'Account',
      tabBarIcon: ({ tintColor }) => <Image source={require('@Assets/icons/account_logo.png')} style={{height:25,width:25,opacity:0.5}}/>,
      tabBarVisible: false
    }
  }
},{
  initialRouteName:'HomeTab',
  tabBarOptions:{
    activeTintColor:'#f8bc06'
  }
});

const MainNavigator = createStackNavigator({
  Login: {
    screen: LoginScreen,
    
  },
  Register: {
    screen: RegisterScreen,
    
  },
  ChooseLanguage:{
    screen: LanguageScreen,
    
  },
  Home:{
    screen: HomeTabNavigator,
    navigationOptions:{
      header: false
    }
  },
  FoodScreen:{
    screen: FoodTabNavigator,
  },
  FoodStack:{
    screen: foodStackNavigator
  },
  FoodShopReviewScreen:{
    screen: ShopReview,
  },
  AddMoney:{
    screen: AddMoney,
    // navigationOptions:{
    //   header: false
    // }
  },
  CarMapScreen:{
    screen:CarScreen,
  },
  FoodDeleveryTypeScreen: {
    screen:DeleveryType,
    // navigationOptions:{
    //   header: false
    // }
  },
  GroceryDeleveryTypeScreen:{
    screen:GroceryDeleveryType,
  },
  groceryHomeScreen:{
  screen:GroceryTabNavigator,
  },
  GroceryStack:{
    screen:GroceryStackNavigator,
  },
  GroceryReviewScreen:{
    screen:ShopFeedbackCard,
  },
  GroceryCategory:{
    screen:GroceryCatagoryType,
  },
  LiveStoreScreen:{
    screen:LiveStoreDeleveryType,
    // navigationOptions:{
    //   header:false
    // }
  },
  
  Cart:{
    screen:CartScreen
  },
  LiveStoreHome:{
    screen: LiveStoreTabNavigator,
    // navigationOptions:{
    //   header:false
    // }
  },
  LiveStoreProduct:{
    screen:ProductScreen,
    // navigationOptions:{
    //   header:false
    // }
  },
  LiveEcommerce:{
     screen:EcommerceScreen,
  },
  EStoreScreen:{
    screen:EStoreDeleveryType,
  },
  EStoreCatagory:{
    screen:CatagoryType,
  },
  EStoreHome:{
    screen:EStoreTabNavigator,
  },
  EditDetailsScreen:{
    screen:EditProfile,
    // navigationOptions:{
    //   header:false
    // }
  }, 
},{
  initialRouteName:'Login',
  headerMode: 'none'
});

class AppLoading extends Component {

  constructor(props) {
    super(props);
       this._logData();
   }

   _logData = async() => {
    let data = await Storage.get('account');
    console.log(data)
    this.props.navigation.navigate(data!=null ? 'App' : 'Auth');
  
   }
 render() {
  return (
    <View style={{flex: 1,justifyContent: 'center'}}>
          <ActivityIndicator size="large" color="#33B5FF" />
    </View>
   );
 }
} 


const LoginCheck=createAppContainer(
  createSwitchNavigator(
    {
      AuthLoading: AppLoading,
      App: HomeTabNavigator,
      Auth: MainNavigator,

    },
    {
      initialRouteName: 'AuthLoading',
    }
  
  )
)



export default class App extends React.Component{
  render(){
      return(
        <Root>
          <LoginCheck ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
        </Root>
      )
    }
  }
// const AppRoot = createAppContainer(MainNavigator);

// export default class App extends React.Component{
//   render(){
//       return(
//         <Root>
//           <AppRoot ref={(r) => {NavigationService.setTopLevelNavigator(r)}}/>
//         </Root>
//       )
//     }
//   }