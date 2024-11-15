import AdVers from "./AdVers";
import FindUs from "./FindUs";
import Qzone from "./Qzone";
import Social from "./Social";
const Rightsection = () => {
    return (
        <div className="flex flex-col gap-y-3">
            <Social />
            <FindUs />
            <Qzone />
            <AdVers/>
        </div>
    );
};

export default Rightsection;