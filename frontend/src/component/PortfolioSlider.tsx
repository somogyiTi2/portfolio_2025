import Carousel from 'react-bootstrap/Carousel';
import ExampleCarouselImage from './ExampleCarouselImage';

const DummyData = [
  {
    id: 1,
    title: "First Project",
    img: "https://picsum.photos/200/300",
    text: "This is the first project description.",
    link: "https://example.com/first",
    technologies: ["React", "Node.js", "MongoDB"]
  },
  {
    id: 2,
    title: "Second Project",
    img: "https://picsum.photos/200/500",
    text: "This is the second project description.",
    link: "https://example.com/second",
    technologies: ["Vue.js", "Express", "MySQL"]
  },
  {
    id: 3,
    title: "Third Project",
    img: "https://picsum.photos/800/600",
    text: "This is the third project description.",
    link: "https://example.com/third",
    technologies: ["Angular", "Firebase", "TypeScript"]
  }
];

const CarouselFadeExample = () => {
  return (
    <Carousel fade>
      {DummyData.map(item => (
        <Carousel.Item key={item.id}>
          <ExampleCarouselImage item={item} theme="light" />
        </Carousel.Item>
      ))}
    </Carousel>
  );
}

export default CarouselFadeExample;
