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
  

    const newsDetails = useLoaderData()
    const { id } = useParams()
    console.log(newsDetails._id)




 

    return (
        <div>
            <h1>Hello details</h1>
         
        
        </div>
    );
};

export default NewsDetails;