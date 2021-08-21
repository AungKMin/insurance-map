import Geocode from "react-geocode";
import dotenv from 'dotenv';
dotenv.config();

Geocode.setApiKey(process.env.REACT_APP_GOOGLE_API_KEY); // set API key

// export const getLatLngFromAddress = (address) => { 
//     // Get latitude & longitude from address.
//     return Geocode.fromAddress(address)
// }

export const getLatLngFromAddress = (address) => { 
    // Get latitude & longitude from address.
    return Geocode.fromAddress(address).then(
        (response) => {
            const { lat, lng } = response.results[0].geometry.location;
            console.log(`from api: lat: ${lat} lng: ${lng}`);
            return({lat: lat, lng: lng});
        }
    );
}
