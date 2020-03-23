import HttpClient from '@Utils/HttpClient'



function Profiledetails(u_id) {
    let endpoint = 'profile_details.php?u_id='+u_id;
    return HttpClient.put(endpoint);
}

export default {
    Profiledetails
}