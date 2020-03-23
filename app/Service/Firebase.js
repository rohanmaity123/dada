import firebase from 'react-native-firebase';
import Geolocation from '@react-native-community/geolocation';

async function getData() {
    // let allData = [];

    // await firebase.database().ref('driver').on('value', function (snapshoot){
    //   // console.log('snapshoot',snapshoot)
      
    //   allData.push(snapshoot.val());
    // })
    // return allData;

    // return {
      // type: ChatActionTypes.GET_ALL_USER,
      // payload:
          new Promise((resolve, reject) => {
             let allData = [];

              firebase.database().ref('driver').on('value', function (snapshoot){
                // console.log('snapshoot',snapshoot)
                
                allData.push(snapshoot.val());
              });
              return resolve(allData);
          })
  // }
}

// async function latlng(){
//     Geolocation.getCurrentPosition(info => {
//             this.setState({
//                 latitude: info.coords.latitude,
//                 longitude: info.coords.longitude,
//               });
       
//      }); 
//   }


export default {
    getData,
    // latlng
}