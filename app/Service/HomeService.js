import HttpClient from '@Utils/HttpClient'


function HomeList() {
    let endpoint = 'home_list.php';
    return HttpClient.put(endpoint);
}
function Postdetails(id) {
    let endpoint = 'postdetails.php?id='+id;
    return HttpClient.put(endpoint);
}

export default {
    HomeList,
    Postdetails
}