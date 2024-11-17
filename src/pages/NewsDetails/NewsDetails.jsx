// import React from 'react';

import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";

// const NewsDetails = () => {
//     const newsDetails = useLoaderData()
//     console.log(newsDetails)
//     const { id } = useParams()
//     const nDetai = newsDetails.find((detail) => {
//         deail.id === parseInt(id)
//     }
//         return (
//             <div>
//                 <h1>{ nDetai.id}</h1>
//             </div>
//         )

// export default NewsDetails;
// import React from 'react';

const NewsDetails = () => {
  

    const id = useParams()
    // before I try here using carly bracet that give me false feedback then I use only id and I get correct output
    console.log(id)




    const myNews = useLoaderData()
    console.log(myNews)

    const dNews = myNews.find((p) => p.id === id.parseInt)
    console.log(dNews)

    return (
        <div>
            <img src={dNews.image_url} alt="" />
            <h1>Hello details{dNews.title}</h1>
            <p>{dNews.details}</p>
            
         
        
        </div>
    );
};

export default NewsDetails;