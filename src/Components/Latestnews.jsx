import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";
const Latestnews = () => {
    return (
        <div className="flex items-center gap-x-2 bg-base-200">
            <p className="bg-[#D72050] text-white px-3 py-1">Latesst</p>
            <Marquee>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut magni blanditiis debitis doloremque rem fuga tempore dolorem facilis
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut magni blanditiis debitis doloremque rem fuga tempore dolorem facilis
                </Link>
                <Link to="/news">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Nesciunt ut magni blanditiis debitis doloremque rem fuga tempore dolorem facilis
                </Link>
            </Marquee>
        </div>
    );
};

export default Latestnews;