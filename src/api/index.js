//keep api calls here
import axios from 'axios'; //library that helps makes calls

const URL ='https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'

export const getPlacesData = async (sw,ne) =>{
    try {
        const {data: { data }} = await axios.get(URL, {
          method: 'GET',
          params: {
            bl_latitude: sw.lat,
            tr_latitude: ne.lat,
            bl_longitude: sw.lng,
            tr_longitude: ne.lng,
            restaurant_tagcategory_standalone: '10591',
            restaurant_tagcategory: '10591',
            limit: '30',
            currency: 'USD',
            open_now: 'false',
            lunit: 'km',
            lang: 'en_US'
          },
          headers: {
            'X-RapidAPI-Key': 'e36dc5b587msh008ddc3288df5fbp101ec5jsn27b2f7460a60',
            'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
          }
        });

        return data;
    } catch (error){
        console.log(error)
    }

}