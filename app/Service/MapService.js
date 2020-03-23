import HttpClient from '@Utils/HttpClient'


function MapPing() {
    let endpoint = 'mapPing.php';
    return HttpClient.put(endpoint);
}

export default {
    MapPing
}