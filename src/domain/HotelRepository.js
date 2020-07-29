import * as geolib from 'geolib';

import Rakuten from '../lib/Rakuten';

const RAKUTEN_APP_ID = process.env.RAKUTEN_APP_ID;

// eslint-disable-next-line
export const searchHotelByLocation = (location, condition) => {
  const params = {
    applicationId: RAKUTEN_APP_ID,
    datumType: 1,
    latitude: location.lat,
    longitude: location.lng,
    squeezeCondition: condition,
  };

  return Rakuten.Travel.simpleHotelSearc(params)
    .then((result) => {
      return result.data.hotels.map((hotel) => {
        const basicInfo = hotel.hotel[0].hotelBasicInfo;
        const distance = geolib.getDistance(
          { latitude: location.lat, longitude:location.lng },
          { latitude: basicInfo.latitude, longitude: basicInfo.longitude },
        );
        return {
          id: basicInfo.hotelNo,
          name: basicInfo.hotelName,
          url: basicInfo.hotelInformationUrl,
          thumbUrl: basicInfo.hotelThumbnailUrl,
          price: basicInfo.hotelMinCharge,
          reviewAverage: basicInfo.reviewAverage,
          reviewCount: basicInfo.reviewCount,
          distance,
        };
      });
    });
};
