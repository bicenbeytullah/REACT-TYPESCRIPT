import { serialize } from "v8";

export interface OffersType {
    sale:{
        id: number;
        type: string;
        location: string;
        room: string;
        size: string;
        image: string;
        price: string;
    }[];
    rent:{
        id:number;
        type: string;
        location: string;
        room: string;
        size:  string;
        image: string;
        price: string;
    }[];
};

export const sales:OffersType['sale'] = [
    {
        id:1,
        type: 'Penthouse',
        location: 'Alanya',
        room: '2+1',
        size: '60m2',
        price: '450.000$',
        image: 'https://tur-nieruchomosci.pl/blog/wp-content/uploads/2021/11/Penthouse-definicja.jpg',
    },{
        id:2,
        type: 'Villa',
        location: 'Mahmutlar',
        room: '1+1',
        size: '45m2',
        price: '280.000$',
        image: 'https://magazine.elitehavens.com/wp-content/uploads/2021/05/Header.jpg',
    },{
        id:3,
        type: 'Villa',
        location: 'Alanya',
        room: '2+1',
        size: '60m2',
        price: '220.000$',
        image: 'https://d3oo9u3p09egds.cloudfront.net/rental_property/colina-villa-h/01_Facade__10_.jpeg',
    }
];

export const rents:OffersType['rent'] = [
    {
        id: 1,
        type: 'Flat',
        location: 'Kestel',
        room: '3+1',
        size: '110m2',
        price: '850$',
        image: 'https://assets.architecturaldigest.in/photos/6008343851daf9662c148cc6/master/pass/ikea-rustomjee-mumbai-flats-main-1366x768.jpg',
    },{
        id: 2,
        type: 'Flat',
        location: 'Tosmur',
        room: '2+1',
        size: '65m2',
        price: '1.100$',
        image: 'https://res.cloudinary.com/stanza-living/image/upload/f_auto,q_auto,w_600/e_improve/e_sharpen:10/e_saturation:10/f_auto,q_auto/v1660739488/Website/CMS-Uploads/mzhezfp7nqujkuxb5j8o.jpg',
    },{
        id: 3,
        type: 'Flat',
        location: 'Alanya',
        room: '2+1',
        size: '65m2',
        price: '950$',
        image: 'https://thumbs.dreamstime.com/b/black-white-room-spacious-fully-furnished-living-100211168.jpg',
    }
];
