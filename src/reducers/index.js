import { combineReducers } from 'redux';
import ActiveCity from './active_city';
import ActiveCountry from './active_country';
import ActiveCulture from './active_Culture';
import BasketProducts from './active_Products';
import Cities from './cities';
import Countries from './countries';
import Cultures from './cultures';
import PrayerTimeInformations from './prayer_time_informations';
import ProductsInformations from './products_informations';

const rootReducer = combineReducers({
  countries: Countries,
  activeCountry: ActiveCountry,
  cities: Cities,
  activeCity: ActiveCity,
  prayerTimeInformations: PrayerTimeInformations,
  cultures: Cultures,
  activeCulture: ActiveCulture,
  basketProducts: BasketProducts,
  productsInformations: ProductsInformations
});

export default rootReducer;
