$(document).ready(function() {
    var ccounter = 1;
    var row = "<div class=row></div>"
    var cardiv = $("div[class='container cars-container']");
    $(row).appendTo(cardiv);
    $.getJSON("https://mock-cars-api.herokuapp.com/api/v1/cars", function(data){
        $.each(data, function (index, value) {
            var rowdiv = $(".row").last();
            var input = "<div class='column'><p>"+value.makeName + " " + value.modelName + " " + value.carYear + "</p><img src='"+value.mainPictureUrl+"'></div>"
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