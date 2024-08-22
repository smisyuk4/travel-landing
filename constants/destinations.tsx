import first from '@/assets/destinations/rome.jpg';
import second from '@/assets/destinations/london.jpg';
import third from '@/assets/destinations/europe.jpg';

interface DestinationItem {
  image: { src: string };
  destination: string;
  cost: string;
  duration: number;
}

export const DESTINATIONS: DestinationItem[] = [
  {
    image: first,
    destination: 'Rome, Italy',
    cost: '5,42k',
    duration: 10,
  },
  {
    image: second,
    destination: 'London, UK',
    cost: '4,2k',
    duration: 12,
  },
  {
    image: third,
    destination: 'Full Europe',
    cost: '15k',
    duration: 28,
  },
];
