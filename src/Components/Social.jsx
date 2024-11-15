import { FaFacebook, FaGoogle } from "react-icons/fa";
const Social = () => {
    return (
        <div>
            <h1 className="font-semibold text-lg">Login With</h1>
            <div className="flex flex-col gap-y-2 mt-3">
                <button className="btn flex items-center gap-x-2"><FaGoogle />Login With Google</button>
                <button className="btn flex items-center gap-x-2"><FaFacebook />Login With Github</button>
            </div>    
        </div>
    );
};

export default Social;