import { Link, NavLink } from "react-router-dom";
import LeftSIdeNews from "./LeftSIdeNews";
import { useEffect, useState } from "react";

const LeftSideHome = () => {
  const [category, setCategory] = useState([]);
  useEffect(() => {
    fetch("categories.json")
      .then((res) => res.json())
      .then((data) => setCategory(data));
  }, []);
  return (
    <div className="p-2">
      <div className="">
        <h1 className="font-bold p-5">All Category </h1>
        <div className="font-semibold  ml-7 p-2">
          {category.map((newsCategory) => (
            <li className="list-none  py-1 hover:bg-red-600 hover:text-white">
              <Link className="px-4">{newsCategory.name}</Link>
            </li>
          ))}
          <li className="list-none  py-1 hover:bg-red-600 hover:text-white">
            {" "}
            <Link className="px-4"></Link>
          </li>
        </div>
      </div>
      <div className="pt-8">
        <LeftSIdeNews></LeftSIdeNews>
      </div>
    </div>
  );
};

export default LeftSideHome;
