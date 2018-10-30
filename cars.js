$(document).ready(function() {
    var ccounter = 1;
    var row = "<div class=row></div>"
    var cardiv = $("div[class='container cars-container']");
    var topics = ["bodyType","transmission","price","exteriorColorName","milage","cityFuelEconomy","highwayFuelEconomy","sellerRating","engineType","hasAccidents","wheelSystem"];
    var english = ["Type of body","Transmission","Price","Exterior Color","Milage","City MPG","Highway MPG","Seller Rating","Engine Type","Had Accidents","Wheel System"];
    $(row).appendTo(cardiv);
    $.getJSON("https://mock-cars-api.herokuapp.com/api/v1/cars", function(data){
        $.each(data, function (index, value) {
            var rowdiv = $(".row").last();
            var values = "<p class='small'>";
            $.each(value,function(key,val){
                var idx = jQuery.inArray(key,topics);
                if(idx!= -1){
                    values = values + english[idx] + ": " + val + "<br>";
                }
            });
            var values = values + "</p>";
            var input = "<div class='column'><p>"+value.makeName + " " + value.modelName + " " + value.carYear + "</p>"//<img src='"+value.mainPictureUrl+"'>";
            var input = input +values + "</div>"
            $(input).appendTo(rowdiv);
            console.log(value.mainPictureUrl)
            ccounter = ccounter + 1;
            if(ccounter == 6){
                ccounter = 1;
                $(row).appendTo(cardiv);
            }
        });
    });
});    