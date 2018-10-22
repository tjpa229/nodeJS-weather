const request=require('request');
const API_KEY='AIzaSyCJA2G9fH-jJvrUeXaDIEC1X9_VnwkLuo0';

var geocodeAddress = (address, callback) => {
    var encoded_address = encodeURIComponent(address, callback);


    request({
        url: `https://maps.googleapis.com/maps/api/geocode/json?address=${encoded_address}&key=${API_KEY}`,     
        json: true
    },  (error, response, body)=>{

        if(error){
            callback('Unable to connect to servers!');
        }
        else if(body.status==='ZERO_RESULTS'){
            callback('Unable to connect to servers!');
        }
        else if(body.status==='OK'){
            callback(undefined,{
                address: body.results[0].formatted_address,
                latitude: body.results[0].geometry.location.lat,
                longitude: body.results[0].geometry.location.lng
            });
        }
    });
};

module.exports.geocodeAddress = geocodeAddress;