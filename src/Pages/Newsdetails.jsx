import { Link, useLoaderData } from "react-router-dom";
import Navbar from "../Components/Navbar";
import Rightsection from "../Components/Rightsection";
import Header from "../Components/Header";

const Newsdetails = () => {
    const data = useLoaderData()
    console.log(data);
    const news = data.data[0]
    console.log(news);
    return (
        <div className="w-10/12 mx-auto">
            <header className="space-y-3">
                <Header/>
                <Navbar/>
            </header>
            <main className="grid grid-cols-12 ">
                <section className="col-span-9">
                    <h1 className="mt-4">Dragon News</h1>
                    <div className="card card-compact bg-gray-100 p-6 mr-5 mt-3 shadow-xl">
                        <figure>
                            <img
                                src={news.image_url}
                                alt="Shoes"
                                className="rounded-xl"
                            />
                        </figure>
                        <div className="card-body">
                            <h2 className="card-title">{news.title}</h2>
                            <p>{news.details}</p>
                            <div className="card-actions justify-start">
                                <Link to="/category/01" className="btn btn-primary">All News in The category</Link>
                            </div>
                        </div>
                    </div>
                </section>
                <aside className="col-span-3 mt-3">
                    <Rightsection/>
                </aside>
            </main>
        </div>
    );
};

export default Newsdetails;