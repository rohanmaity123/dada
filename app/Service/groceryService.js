import HttpClient from '@Utils/HttpClient'

function bannerimages(){
    let images = 'grocery_banner_image.php';
    return HttpClient.get(images);
}
function getshopdetails(type) {
    let shop = 'shop_details.php?type='+type;
    return HttpClient.get(shop);
}

function getproductdetails() {
    let product = 'product_details.php';
    return HttpClient.get(product);
}
function support(name,mobile,email,comment) {
    let supportdata = 'grocery_support.php?name='+name+'&mobile='+mobile+'&email='+email+'&comment='+comment;
    return HttpClient.get(supportdata);
}
function order(user_id){
    let oredrdetails = 'grocery_order.php?user_id='+user_id;
    return HttpClient.get(oredrdetails);
}
export default {
    bannerimages,
    getshopdetails,
    getproductdetails,
    support,
    order
}