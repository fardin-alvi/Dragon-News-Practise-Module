import { FaFacebook, FaInstagram, FaTwitter } from "react-icons/fa";

const FindUs = () => {
    return (
        <div>
            <h1 className="font-semibold text0lg">Find Us On</h1>
            <div className="*:w-full space-y-2 mt-3">
                <button className="btn justify-start flex gap-x-2"><FaFacebook className="text-blue-600"/>Facebook</button>
                <button className="btn justify-start flex gap-x-2"><FaInstagram className="text-orange-600" />Instragram</button>
                <button className="btn justify-start flex gap-x-2"><FaTwitter className="text-blue-600" />Twitter</button>
            </div>
        </div>
    );
};

export default FindUs;