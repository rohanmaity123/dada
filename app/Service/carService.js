import HttpClient from '@Utils/HttpClient'


function getCarType(u_id) {
    let car = 'car_type.php?u_id='+u_id;
    return HttpClient.get(car);
}

function getShareCarType(u_id) {
    let ShareCar = 'share_car_type.php?u_id='+u_id;
    return HttpClient.get(ShareCar);
}

function bookingService(data){
    let booking='driver_booking.php';
    console.log('driverData',data);
    return HttpClient.post(booking,data);
}

function shareBookingService(data){
    let shareBooking='share_driver_booking.php';
    return HttpClient.post(shareBooking,data);
}

function fetchDriver(data){
    let driver = 'driver_detail.php?invoice_no='+data;
    // console.log('driver',driver)
    return HttpClient.get(driver);
}
function fetchBooking(data){
    let bookingHistory='booking_history.php?user_id='+data;
    return HttpClient.get(bookingHistory);
}
function deleteDriver(data){
    let allDriver = 'delete_driver.php?invoice_no='+data;
    return HttpClient.get(allDriver);
}
function coupon(){
   let allCoupon = 'coupon.php'
    return HttpClient.get(allCoupon);
}
export default {
    getCarType,
    bookingService,
    fetchDriver,
    fetchBooking,
    deleteDriver,
    coupon,
    getShareCarType,
    shareBookingService
}