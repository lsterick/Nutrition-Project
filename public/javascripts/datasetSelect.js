var newRestaurantButton = function () {
    console.log("hi");
    window.location.assign("/dataEntry");
}

$(document).ready(function () {
 
    $("#newRestaurant").click(newRestaurantButton);
 
});
