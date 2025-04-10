import Hotspot from '../components/Hotspot';

export default function Home() {
  const hotspots = [
  {
    id: 1,
    x: 28, // percentage from left
    y: 52, // percentage from top
    title: 'My GitHub',
    link: 'https://github.com/darrenyong',
  },
  {
    id: 2,
    x: 45,
    y: 60,
    title: 'My Steam',
    link: 'https://steamcommunity.com/id/yongdarren/',
  },
  {
    id: 3,
    x: 70,
    y: 40,
    title: 'My photos',
    link: 'https://www.flickr.com/dyongg/',
  },
  {
    id: 4,
    x: 85,
    y: 70,
    title: 'My dog',
    link: 'https://instagram.com/mochithesheeb',
  },
  {
    id: 5,
    x: 15,
    y: 75,
    title: 'My car',
    link: 'https://instagram.com/_wide2is',
  },
]

  return (
    hotspots.map((hotspot) => {
      return (
        <Hotspot title={hotspot.title} x={hotspot.x} y={hotspot.y} key={hotspot.id} link={hotspot.link}/>
      )
    })
  );
}
