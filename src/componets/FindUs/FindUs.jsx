import { FaFacebook, FaInstagram } from "react-icons/fa";
import { FaX } from "react-icons/fa6";
import { Link } from "react-router-dom";


const FindUs = () => {
    return (
        <div>
            
             <Link><p className="items-center border  p-3 flex gap-2 text-red-800 font-medium rounded-t-md"><FaFacebook  className="text-blue-800"/>Facebook</p></Link>
             <Link><p className="items-center border-x  p-3 flex gap-2 text-red-800 font-medium  "><FaX  className="text-black"/>Twitter</p></Link>
             <Link><p className="items-center border  p-3 flex gap-2 text-red-800 font-medium  rounded-b-md"><FaInstagram  className="text-violet-900"/>Instagram</p></Link>
        </div>
    );
};

export default FindUs;