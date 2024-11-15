import { Outlet } from "react-router-dom";
import Header from "../Components/Header";
import Latestnews from "../Components/Latestnews";
import Leftsection from "../Components/Leftsection";
import Navbar from "../Components/Navbar";
import Rightsection from "../Components/Rightsection";
import CategoryNews from "../Pages/CategoryNews";

const Home = () => {
    return (
        <div className="font-popins">
            <Header>
                <Header />
            </Header>
            <section className="w-10/12 mx-auto">
                <Latestnews/>
            </section>
            <nav className="w-10/12 mx-auto pt-4">
                <Navbar/>
            </nav>
            <main className="w-10/12 mx-auto pt-5 grid grid-cols-12">
                <aside className="left col-span-3"><Leftsection/></aside>
                <section className="col-span-6"><Outlet/></section>
                <aside className="col-span-3"><Rightsection/></aside>
            </main>
        </div>
    );
};

export default Home;