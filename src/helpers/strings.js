import { isNilOrEmpty } from "./helper";
import nikon from './../ressources/images/nikon-d7500.jpg';
import drone from './../ressources/images/drone-r-falcon.jpg';
import hp from './../ressources/images/hp.jpg';
import huawei from './../ressources/images/huawei-p20-lite.png';
import envy from './../ressources/images/hp-envy.jpg';

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
        case languages.ar: return object.ar;

        default: return object.en;
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

export const products = [
        {
            "productId": 1,
            "oldPrice": 2699.99,
            "price": 2499.99,
            "rating": 4,
            "title": "Huawei p20 lite",
            "src": huawei,
            "alt": huawei,
            "description": "Le Huawei P20 Lite est un smartphone équipé d'un écran bord à bord de 5,84 pouces au format 19/9. Fonctionnant avec Android 8 et la surcouche EMUI 8, il embarque le processeur Kirin 659 couplé à 4 Go de mémoire vive et 64 Go d'espace de stockage extensible. Côté photo, il dispose d'un double module principal (16 Mpix + 2 Mpix) et pour les selfies d'un capteur de 16 Mpix. "
        },
        {
            "productId": 2,
            "price": 5299.99,
            "rating": 3,
            "title": "NIKON D5300 Noir",
            "src": nikon,
            "alt": nikon,
            "description": "NIKON D5300 Noir + AF-P 18-55VR Appareil photo reflex - Capteur CMOS format DX 24.2 Mégapixels - Écran orientable 8,1 cm (3,2 pouces) - Wi-Fi et GPS intégrés - Processeur EXPEED 4 - Sensibilité élevée (jusqu’à 12 800 ISO) - Vidéos en Full HD - Support d‘enregistrement: Cartes mémoire SD / SDHC et SDXC compatibles UHS-I - USB Hi-Speed - Sortie vidéo: NTSC, PAL - Sortie mini HDMI (type C)"
        },
        {
            "productId": 3,
            "oldPrice": 2009.99,
            "price": 1539.99,
            "rating": 4.9,
            "title": "Drone falcon",
            "src": drone,
            "alt": drone,
            "description": "Le R-FALCON se réinvente avec une nouvelle version du modèle phare de PNJ. Découvrez le R-Falcon FHD maintenant équipé d’une caméra grand angle Full HD."
        },
        {
            "productId": 4,
            "oldPrice": 13959.99,
            "price": 13718.99,
            "rating": 2,
            "title": "Hp envy",
            "src": envy,
            "alt": envy,
            "description": "HP ENVY Notebook 17-ae001nk: Processeur Intel Core i7-7500U (2,7 GHz jusqu’à 3,5 GHz, 4 Mo de mémoire cache, 2 cœurs), Mémoire Vive 16Go, Disque Dur 1To SATA+ 128 Go SSD, Carte graphique NVIDIA GeForce 940MX 4 Go, Ecran 17,3 pouces FHD (1 920 x 1080), Intel 802.11ac et Bluetooth 4.2, 1 port USB 3.1 Type-C 1e génération (transfert de donnée), DP1.2; 3 ports USB 3.1 1e génération ; 1 port HDMI; 1 port RJ-45; 1 prise combinée casque/microphone, 1 lecteur de cartes multimédias SD multiformat, Windows 10 Famille 64, GARANTIE 1 AN"
        },
        {
            "productId": 5,
            "oldPrice": 2399.99,
            "price": 2199.99,
            "rating": 1,
            "title": "HP Z420",
            "src": hp,
            "alt": hp,
            "description": "La performance que vous souhaitez. La valeur dont vous avez besoin. Le HP Z420 vous promet l’extensibilité professionnelle dans le format d’une mini-tour accessible sans outils, le tout pour un prix défiant toute concurrence. Muni d’un maximum de 8 processeurs discrets, de la plus récente technologie de traitement et la puissance d’E/S d’IntelMD, et de la plus récente technologie graphique provenant des chefs de file du domaine, le station de travail HP Z420 a toute la puissance dont vous avez besoin pour faire le travail."
        }
    ];