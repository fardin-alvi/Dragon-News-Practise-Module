import { Link } from "react-router-dom";

const Cards = ({ news }) => {
    return (
        <div>
            <div className="card card-compact bg-base-100 shadow-xl">
                {/* Header section with author info */}
                <div className="flex items-center p-4">
                    <div className="avatar">
                        <div className="w-12 rounded-full">
                            <img src={news.author.img} alt={news.author.name} />
                        </div>
                    </div>
                    <div className="ml-4">
                        <h2 className="card-title text-lg">{news.author.name}</h2>
                        <p className="text-sm text-gray-500">{new Date(news.author.published_date).toLocaleDateString()}</p>
                    </div>
                    {/* Share icon */}
                    <div className="ml-auto">
                        <button className="btn btn-square btn-outline">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-6 w-6"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M8 12h.01M12 12h.01M16 12h.01M21 12h-.01M3 12h.01"
                                />
                            </svg>
                        </button>
                    </div>
                </div>

                {/* Title and Image */}
                <div className="px-4 pb-4">
                    <h3 className="text-xl font-bold">
                        {news.title}
                    </h3>
                    <div className="my-4">
                        <img
                            src={news.image_url}
                            alt="News"
                            className="rounded-lg w-full object-cover mb-4"
                        />
                    </div>

                    {/* Description */}
                    <p className="text-gray-600">
                        {news.details.slice(0, 100)}...
                    </p>

                    {/* Read More */}
                    <Link to={`/news/${news?._id}`} className="text-orange-500 font-bold cursor-pointer hover:underline mt-2 block">
                        Read More
                    </Link>

                    {/* Footer with rating and views */}
                    <div className="flex items-center justify-between mt-4">
                        {/* Rating */}
                        <div className="flex items-center space-x-1">
                            <div className="rating rating-sm">
                                {[...Array(Math.round(news.rating.number))].map((_, i) => (
                                    <input
                                        key={i}
                                        type="radio"
                                        name="rating-2"
                                        className="mask mask-star-2 bg-orange-400"
                                        checked
                                        readOnly
                                    />
                                ))}
                            </div>
                            <span className="text-sm text-gray-600">{news.rating.number}</span>
                        </div>

                        {/* Views */}
                        <div className="flex items-center space-x-1">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="h-5 w-5 text-gray-600"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                fill="none"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth="2"
                                    d="M15 12a3 3 0 11-6 0 3 3 0 016 0zm6 0c0 5-9 10-9 10S3 17 3 12a9 9 0 1118 0z"
                                />
                            </svg>
                            <span className="text-sm text-gray-600">{news.total_view}</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Cards;