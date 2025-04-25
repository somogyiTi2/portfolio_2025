import "./ExampleCarouselImage.css"
type ReferencesType = {
    id: number;
    title: string;
    img: string;
    text: string;
    link: string;
    technologies: string[];
    git: string;
};

const ExampleCarouselImage = ({ item, theme }: { item: ReferencesType, theme: string }) => (
    <div key={item.id} className={`slide ${theme}`}>
        <div className="slide-container">
            <div className={`slide-text ${theme} slide-text-left`}>
                <h2>{item.title}</h2>
                <p>{item.text}</p>
                <p>{item.technologies.join(', ')}</p>
                <p className="slide-linkek"
                >{item.link && <a href={item.link}>Link</a>}
                    {item.git && <a href={item.git}>GitHub</a>}</p>
            </div>
            <div className="slide-picture slide-picture-right">
                <img src={item.img} alt={item.title} />
            </div>
        </div>
    </div>
);

export default ExampleCarouselImage;
