import axios from 'axios';

export const getNearPlaces = async (
    pagetoken = undefined,
    location = undefined,
    key = undefined,
    type = undefined,
    radius = undefined,
) => {

    const url = `https://maps.googleapis.com/maps/api/place/nearbysearch/json`;

    const response = await axios.get(url, {
        params: {
            pagetoken: pagetoken,
            location: location,
            key: key,
            type: type,
            radius: radius,
        }
    });

    return response.data;

}