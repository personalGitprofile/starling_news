
const Marquee = () => {
    return (
        <div className="mx-auto w-8/12 mt-14 bg-amber-200 flex items-center  ">
            <h1 className="bg-red-700 inline-block w-60 p-5 text-xl font-bold text-white -skew-x-6 -ml-2">Breaking News</h1>
            <marquee className="font-black"> <h1>Breaking News</h1></marquee>
        </div>
    );
};

export default Marquee;