import { Link } from "react-router-dom";


const NewsCard = ({ news }) => {
    console.log(news)
    const {_id,title,thumbnail_url,details,image_url}=news
    return (
        <div>
             <div className=" bg-base-200 mx-auto py-2 w-11/12">
      <div className=" ">
        <h2 className="text-center py-4 font-bold text-3xl text-[#456787]">
         
        </h2>
                    <div className="card bg-base-100  pb-7  ">
                        <img className=" mx-auto my-4 " src={image_url} alt="" />
                        <h1 className="p-11 text-2xl font-bold">{title}</h1>
                        {
                            details.length > 200 ? <p className="px-6">{details.slice(0, 200)} <Link to={`/news/${_id}`} className="font-semibold text-blue-800 ">See more......</Link></p>  : <p>{details}</p>
                       }
        </div>
      </div>
     
    </div>
        </div>
    );
};

export default NewsCard;