import FindUs from "../FindUs/FindUs";
import Login from "../LoginWithComponent/Login";
import Q_zone from "../Q_Zone/Q_zone";


const RightSideHome = () => {
    return (
        <div className="p-2 w-full" >
            
            <div className="mb-8">
            <h1 className="font-bold pb-1 ">Login With</h1>
                <Login></Login>

            </div>
            <div className="mb-8">
            <h1 className="font-bold pb-1 ">Find Us</h1>
                <FindUs></FindUs>
            </div>
            <div className="bg-slate-300 p-3 rounded-md">
                <h1 className="font-bold p-3 ">Q-Zone</h1>
                <Q_zone></Q_zone>
            </div>
        </div>
    );
};

export default RightSideHome;