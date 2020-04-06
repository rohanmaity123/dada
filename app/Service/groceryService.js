import HttpClient from '@Utils/HttpClient'


function getshopdetails() {
    let shop = 'shop_details.php';
    return HttpClient.get(shop);
}

function getproductdetails() {
    let product = 'product_details.php';
    return HttpClient.get(product);
}
export default {
    getshopdetails,
    getproductdetails
}