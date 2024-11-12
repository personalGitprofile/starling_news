import Header from "../../componets/Header/Header";
import LeftSideHome from "../../componets/LeftSideHome/LeftSideHome";
import Marquee from "../../componets/Marquee/Marquee";
import Navbar from "../../componets/Navbar/Navbar";
import RightSideHome from "../../componets/RightSideHome/RightSideHome";


const Home = () => {
    return (
        <div className="w-full " >
            <Marquee></Marquee>
            <div className="grid grid-cols-4 gap-4 mx-auto mt-6 p-5">
                <LeftSideHome ></LeftSideHome>
                <div className="col-span-2 border">
                    <div>
                        <h1 className="font-bold p-5">Starling News Agency Home</h1>
                    </div>
                </div>
                <RightSideHome></RightSideHome>
            </div>
            
        </div>
    );
};

export default Home;