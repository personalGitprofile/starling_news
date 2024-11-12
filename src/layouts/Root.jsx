import { Outlet } from "react-router-dom";
import Navbar from "../componets/Navbar/Navbar";

const Root = () => {
    return (
        <div className="bg-stone-100 w-full mx-auto px-14">
            <Navbar ></Navbar>
          <Outlet></Outlet>
        </div>
    );
};

export default Root;