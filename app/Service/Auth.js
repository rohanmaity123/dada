import HttpClient from '@Utils/HttpClient'
import Storage from '@Utils/Storage'
import { AsyncStorage } from 'react-native';


async function login(mobile, pass) {
    let endpoint = 'login.php?mobile='+mobile+'&pass='+pass;
    let data = {
        mobile: mobile,
        pass : pass,
    }
    console.log(data);
    return HttpClient.post(endpoint, data);
}



function register(name,mobile,email,pass) {
    let endpoint = 'register.php?mobile='+mobile+'&name='+name+'&email='+email+'&pass='+pass;
    return HttpClient.get(endpoint);
}

async function getAccount() {
    return await Storage.get('account');
}

async function setAccount(data) {
    return await Storage.set('account', data);
}

async function logout() {
    
    return await Storage.set('account', null);
    console.log('logout');
}

export default {
    register,
    login,
    logout,
    getAccount,
    setAccount,
}