import React, { Component } from 'react';

import 'react-dropdown/style.css';
import './styles.css';
import '../../ressources/Fonts/font.css';
import Product from '../Product';
import nikon from '../../ressources/images/nikon-d7500.jpg';
import drone from '../../ressources/images/drone-r-falcon.jpg';
import hp from '../../ressources/images/hp.jpg';
import huawei from '../../ressources/images/huawei-p20-lite.png';
import envy from '../../ressources/images/hp-envy.jpg';

export default class ProductList extends Component {
    render() {
        return (
            <div>
                <Product oldPrice={2699.99} price={2499.99} rating={4} title="Huawei p20 lite" src={huawei} alt={huawei} description={{isHidden: false, message: "Le Huawei P20 Lite est un smartphone équipé d'un écran bord à bord de 5,84 pouces au format 19/9. Fonctionnant avec Android 8 et la surcouche EMUI 8, il embarque le processeur Kirin 659 couplé à 4 Go de mémoire vive et 64 Go d'espace de stockage extensible. Côté photo, il dispose d'un double module principal (16 Mpix + 2 Mpix) et pour les selfies d'un capteur de 16 Mpix. "}}/>
                <hr/>
                <Product oldPrice={5599.99} price={5299.99} rating={3} title="NIKON D5300 Noir" src={nikon} alt={nikon} description={{isHidden: false, message: "NIKON D5300 Noir + AF-P 18-55VR Appareil photo reflex - Capteur CMOS format DX 24.2 Mégapixels - Écran orientable 8,1 cm (3,2 pouces) - Wi-Fi et GPS intégrés - Processeur EXPEED 4 - Sensibilité élevée (jusqu’à 12 800 ISO) - Vidéos en Full HD - Support d‘enregistrement: Cartes mémoire SD / SDHC et SDXC compatibles UHS-I - USB Hi-Speed - Sortie vidéo: NTSC, PAL - Sortie mini HDMI (type C)"}}/>
                <hr/>
                <Product oldPrice={2009.99} price={1539.99} rating={4.9} title="Drone falcon" src={drone} alt={drone} description={{isHidden: false, message: "Le R-FALCON se réinvente avec une nouvelle version du modèle phare de PNJ. Découvrez le R-Falcon FHD maintenant équipé d’une caméra grand angle Full HD."}}/>
                <hr/>
                <Product oldPrice={13959.99} price={13718.99} rating={2} title="Hp envy" src={envy} alt={envy} description={{isHidden: false, message: "HP ENVY Notebook 17-ae001nk: Processeur Intel Core i7-7500U (2,7 GHz jusqu’à 3,5 GHz, 4 Mo de mémoire cache, 2 cœurs), Mémoire Vive 16Go, Disque Dur 1To SATA+ 128 Go SSD, Carte graphique NVIDIA GeForce 940MX 4 Go, Ecran 17,3 pouces FHD (1 920 x 1080), Intel 802.11ac et Bluetooth 4.2, 1 port USB 3.1 Type-C 1e génération (transfert de donnée), DP1.2; 3 ports USB 3.1 1e génération ; 1 port HDMI; 1 port RJ-45; 1 prise combinée casque/microphone, 1 lecteur de cartes multimédias SD multiformat, Windows 10 Famille 64, GARANTIE 1 AN"}}/>
                <hr/>
                <Product oldPrice={2399.99} price={2199.99} rating={1} title="HP Z420" src={hp} alt={hp} description={{isHidden: false, message: "La performance que vous souhaitez. La valeur dont vous avez besoin. Le HP Z420 vous promet l’extensibilité professionnelle dans le format d’une mini-tour accessible sans outils, le tout pour un prix défiant toute concurrence. Muni d’un maximum de 8 processeurs discrets, de la plus récente technologie de traitement et la puissance d’E/S d’IntelMD, et de la plus récente technologie graphique provenant des chefs de file du domaine, le station de travail HP Z420 a toute la puissance dont vous avez besoin pour faire le travail."}}/>
            </div>
        );
    }
}

