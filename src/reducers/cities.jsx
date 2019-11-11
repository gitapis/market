const defaultState = [
  {value: 1, country_id: 1, key:'Rabat', label:'الرباط'},
  {value: 2, country_id: 2, key:'Algeria', label:'الجزائر'},
  {value: 3, country_id: 3, key:'Tunisia', label:'تونس'},
  {value: 4, country_id: 4, key:'Nouakchott', label:'نواكشوط'},
  {value: 5, country_id: 5, key:'Tripoli', label:'طرابلس'},
  {value: 6, country_id: 6, key:'Cairo', label:'القاهرة'},
  {value: 7, country_id: 7, key:'Doha', label:'الدوحة'},
  {value: 8, country_id: 8, key:'Mecca', label:' مكة المكرمة'},
  {value: 9, country_id: 1, key:'Casablanca', label:'الدار البيضاء'},
  {value: 10, country_id: 1, key:'Fes', label:'فاس'},
  {value: 11, country_id: 2, key:'Ouahran', label:'وهران'},
  {value: 12, country_id: 1, key:'Tangier', label:'طنجة'},
]

export default function(state = defaultState, action) {
  switch(action.type) {
    case 'SELECT_CITIES' :
      return action.payload;

    default : return state;
  }
}
