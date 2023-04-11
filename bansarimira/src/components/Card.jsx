const Card = ({ title, description, image, link }) => {
    return (
        <div className="w-full rounded-lg shadow-md lg:max-w-sm transition-shadow duration-200 transform hover:shadow-xl">
        <img src={image} alt={title} className="object-cover w-full h-48" />
        <div className="p-4">
            <h3 className="text-xl font-semibold">{title}</h3>
            <p className="mb-2 leading-normal">{description}</p>
            <a href={link} className="px-4 py-2 text-sm rounded shadow">
            Learn More
            </a>
        </div>
        </div>
    );
};

export default Card;