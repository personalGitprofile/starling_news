import { useLoaderData, useParams } from "react-router-dom";


const NewsDetails = () => {
    const newsDetails = useLoaderData()
    console.log(newsDetails)
    const { id } = useParams()
    const idInt = parseInt(id)
    console.log(idInt)
    const detail = newsDetails.find(details => details._id === idInt)
    console.log(detail)
    return (
        <div>
            <h1>Details {id}</h1>
        </div>
    );
};

export default NewsDetails;