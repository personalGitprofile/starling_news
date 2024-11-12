import { Link, NavLink } from "react-router-dom";
import LeftSIdeNews from "./LeftSIdeNews";

const LeftSideHome = () => {
    return (
        <div className="p-2">
            <h1 className="font-bold p-5">All Category </h1>
            <div className="font-semibold  ml-7 p-2">
               <li className="list-none  py-1 hover:bg-red-600 hover:text-white"> <Link className="px-4">World</Link></li>
               <li className="list-none  py-1 hover:bg-red-600 hover:text-white"> <Link className="px-4">USA</Link></li>
               <li className="list-none  py-1 hover:bg-red-600 hover:text-white"> <Link className="px-4">Econmics</Link></li>
               <li className="list-none  py-1 hover:bg-red-600 hover:text-white"> <Link className="px-4">Education</Link></li>
               <li className="list-none  py-1 hover:bg-red-600 hover:text-white"> <Link className="px-4">Tech</Link></li>
               <li className="list-none  py-1 hover:bg-red-600 hover:text-white"> <Link className="px-4">Sports</Link></li>
        
            </div>
            <div className="pt-8">
<LeftSIdeNews></LeftSIdeNews>
            </div>
        </div>
    );
};

export default LeftSideHome;