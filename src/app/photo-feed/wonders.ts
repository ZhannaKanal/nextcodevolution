import { StaticImageData } from "next/image"
import i1 from './photos/i1.webp'
import i2 from './photos/i2.webp'
import i3 from './photos/i3.webp'
import i4 from './photos/i4.webp'


export type WonderImage = {
    id: string,
    name: string,
    src: StaticImageData,
    photographer: string,
    location: string
};

const wondersImages: WonderImage[] = [
    {
        id: '1',
        name: "Great Wall of China",
        src: i1,
        photographer: 'Photo by Max van den Oetelear',
        location: 'China',
    },
    {
        id: '2',
        name: "Petra",
        src: i2,
        photographer: 'Photo by Reiseuhu',
        location: 'Jordan',
    },
    {
        id: '3',
        name: "Christ the Redeemer",
        src: i3,
        photographer: 'Photo by Andrea',
        location: 'Brazil',
    },
]

export default wondersImages;