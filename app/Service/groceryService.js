import HttpClient from '@Utils/HttpClient'


function getshopdetails(ShopData) {
    let shop = 'no_of_shop.php';
    console.log(shop)
    return HttpClient.post(shop,ShopData);
}

export default {
    getshopdetails,
}