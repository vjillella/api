
$(document).ready(function () {
    $('#results').html('');
    $.ajax({
        type: 'GET',
         url:"http://m.lowes.com/IntegrationServices/resources/productList/json/v3_0/4294857975?langId=-1&storeId=10702&catalogId=10051&nValue=4294857975&storeNumber=0595&pageSize=20&firstRecord=0&refinements=5003703",
         //contentType:"text/json",
        // crossDomain: true,
        xhrFields: { // to enable CORS. code from HTML5rocks.com
            withCredentials: false
        },
/*        beforeSend: function (request)
            {
                request.setRequestHeader("Access-Control-Allow-Origin", '*');
            },*/
         headers: { 'Access-Control-Allow-Origin': '*' },
         contentType: 'text/plain',
         //dataType : 'jsonp', // Notice! JSONP <-- P (lowercase)
         success:function(json){
             // do stuff with json (in this case an array)
             console.log("Success", json);
         },
         error:function(err){
             console.log("Error", err);
         }      
    });
});
