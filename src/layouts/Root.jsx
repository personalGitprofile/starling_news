import { Outlet } from "react-router-dom";

const Root = () => {
    return (
        <div className="bg-stone-100 w-full mx-auto px-14">
          <Outlet></Outlet>
        </div>
    );
};

export default Root;