import "./ExampleCarouselImage.css"
type ReferencesType = {
    id: number;
    title: string;
    img: string;
    text: string;
    link: string;
    technologies: string[];
};

const ExampleCarouselImage = ({ item, theme }: { item: ReferencesType, theme: string }) => (
    <div key={item.id} className="slide">
        <div className={`slide-text ${theme}`}>
            <h2>{item.title}</h2>
            <p>{item.text}</p>
            <p>{item.link}</p>
            <p>{item.technologies.join(', ')}</p>
        </div>
        <div className="slide-picture">
            <img src={item.img} alt={item.title} />
        </div>
    </div>
);

export default ExampleCarouselImage;
