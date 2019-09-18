import { isNilOrEmpty } from "./helper";

export const getElementByCulture = (array, index, culture) => {
    switch (culture) {
        case languages.fr: return array[index].fr;
        case languages.en: return array[index].en;

        default: return array[index].ar;
    }
};

export const getDayByCulture = (day, culture) => {
    const filteredDays = days.filter(item => item.ar === day);

    if (isNilOrEmpty(filteredDays)) return day;

    switch (culture) {
        case languages.fr: return filteredDays[0].fr;
        case languages.en: return filteredDays[0].en;

        default: return day;
    }
};

export const getCitiesByCulture = (ddlCities, culture) => {
    if (isNilOrEmpty(ddlCities)) return null;

    return ddlCities.map(city => {
        const label = getElementByCulture(cities, city.value - 1, culture);

        return { ...city, label };
    })
};

export const getValueByCulture = (object, culture) => {
    switch (culture) {
        case languages.fr: return object.fr;
        case languages.en: return object.en;

        default: return object.ar;
    }
};

export const languages = { ar: "ar", fr: "fr", en: "en" };

export const prayerTime = { ar: "توقيت الصلاة", fr: "Horaire de la prière", en: "Prayer time" };

export const gregorianMonths = [
    { ar: "يناير", fr: "Janvier", en: "January" },
    { ar: "فبراير", fr: "Février", en: "February" },
    { ar: "مارس", fr: "Mars", en: "March" },
    { ar: "أبريل", fr: "Avril", en: "April" },
    { ar: "ماي", fr: "Mai", en: "May" },
    { ar: "يونيو", fr: "Juin", en: "June" },
    { ar: "يوليوز", fr: "Juillet", en: "July" },
    { ar: "غشت", fr: "Août", en: "August" },
    { ar: "شتنبر", fr: "Septembre", en: "September" },
    { ar: "أكتوبر", fr: "Octobre", en: "October" },
    { ar: "نونبر", fr: "Novembre", en: "November" },
    { ar: "دجنبر", fr: "Décembre", en: "December" },
];

export const hijriMonths = [
    { ar: "مُحَرَّم", fr: "Mouharram", en: "Muḥarram" },
    { ar: "صَفَر", fr: "Safar", en: "Ṣafar" },
    { ar: "رَبِيع ٱلْأَوَّل", fr: "Rabia al awal", en: "Rabīʿ al-Awwal" },
    { ar: "رَبِيع الثاني", fr: "Rabia ath-thani", en: "Rabīʿ ath-Thānī" },
    { ar: "جُمَادَىٰ ٱلْأُولَىٰ", fr: "Joumada al oula", en: "Jumādá al-Ūlá" },
    { ar: "جُمَادَىٰ الثاني", fr: "Joumada ath-thani", en: "Jumādá ath-Thānī" },
    { ar: "رَجَب", fr: "Rajab", en: "Rajab" },
    { ar: "شَعْبَان", fr: "Chaabane", en: "Sha‘bān" },
    { ar: "رَمَضَان", fr: "Ramadan", en: "Ramaḍān" },
    { ar: "شَوَّال", fr: "Chawwal", en: "Shawwāl" },
    { ar: "ذُو ٱلْقَعْدَة", fr: "Dhou al qi`da", en: "Dhū al-Qa‘dah" },
    { ar: "ذُو ٱلْحِجَّة", fr: "Dhou al-hijja", en: "Dhū al-Ḥijjah" },
];

export const days = [
    { ar: "الاثنين", fr: "Lundi", en: "Monday" },
    { ar: "الثلاثاء", fr: "Mardi", en: "Tuesday" },
    { ar: "الاربعاء", fr: "Mercredi", en: "Wednesday" },
    { ar: "الخميس", fr: "Jeudi", en: "Thursday" },
    { ar: "الجمعة", fr: "Vendredi", en: "Friday" },
    { ar: "السبت", fr: "Samedi", en: "Saturday" },
    { ar: "الاحد", fr: "Dimanche", en: "Sunday" },
];

export const dayTimings = [
    { ar: "الفجر", fr: "Al-Fajr", en: "Fajr" },
    { ar: "الشروق", fr: "Chourouk", en: "Sunrise" },
    { ar: "الظهر", fr: "Dhuhr", en: "Dhuhr" },
    { ar: "العصر", fr: "Al-Asr", en: "Asr" },
    { ar: "المغرب", fr: "Maghrib", en: "Maghrib" },
    { ar: "العشاء", fr: "Al-Ishaa", en: "Isha" },
];

export const calendar = [
    { ar: "هجري", fr: "Hijri", en: "Hijri" },
    { ar: "ميلادي", fr: "Grégorien ", en: "Gregorian" },
];

export const day = { ar: "يوم", fr: "Jour", en: "Day" };

export const month = { ar: "شهر", fr: "Mois", en: "Month" };

export const countriesPlaceholder = { ar: "اختر البلد", fr: "Choisissez un pays", en: "Select a country" };

export const countries = [
    {value: 1, ar:'المغرب', fr: "Maroc", en:'Morocco'},
    {value: 2, ar:'الجزائر', fr: "Algerie", en:'Algeria'},
    {value: 3, ar:'تونس', fr: "Tunisie", en:'Tunisia'},
    {value: 4, ar:'موريتانيا', fr: "Mauritanie", en:'Mauritania'},
    {value: 5, ar:'ليبيا', fr: "Libye", en:'Libya'},
    {value: 6, ar:'مصر', fr: "Egypte", en:'Egypt'},
    {value: 7, ar:'قطر', fr: "Qatar", en:'Qatar', },
    {value: 8, ar:'السعودية', fr: "Saudie", en:'Saudia'},
    {value: 9, ar:'الإمارات', fr: "Emirats", en:'Emirats'},
];

export const citiesPlaceholder = { ar: "اختر المدينة", fr: "Choisissez une ville", en: "Select a city" };

export const cities = [
    {value: 1, country_id: 1, ar:'الرباط', fr:'Rabat', en:'Rabat'},
    {value: 2, country_id: 2, ar:'الجزائر', fr:'Alger', en:'Algeria'},
    {value: 3, country_id: 3, ar:'تونس', fr:'Tunis', en:'Tunisia'},
    {value: 4, country_id: 4, ar:'نواكشوط', fr:'Nouakchott', en:'Nouakchott'},
    {value: 5, country_id: 5, ar:'طرابلس', fr:'Tripolie', en:'Tripoli'},
    {value: 6, country_id: 6, ar:'القاهرة', fr:'Caire', en:'Cairo'},
    {value: 7, country_id: 7, ar:'الدوحة', fr:'Doha', en:'Doha'},
    {value: 8, country_id: 8, ar:' مكة المكرمة', fr:'Mecque', en:'Mecca'},
    {value: 9, country_id: 1, ar:'الدار البيضاء', fr:'Casablanca', en:'Casablanca'},
    {value: 10, country_id: 1, ar:'فاس', fr:'Fès', en:'Fes'},
    {value: 11, country_id: 2, ar:'وهران', fr:'Oran', en:'Ouahran'},
    {value: 12, country_id: 1, ar:'طنجة', fr:'Tanger', en:'Tangier'},
];

export const cityLabel = { ar: "لمدينة", fr: "Pour la ville de", en: "For the city of" };

const currentYear = () => {
    const date = new Date();

    return date.getUTCFullYear();
};

export const copyright = {
    ar: `جميع الحقوق محفوظة © ${currentYear()}`,
    fr: `© Tous droits réservés - ${currentYear()}`,
    en: `Copyright  ${currentYear()} © All Rights Reserved`
};