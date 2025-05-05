import axios from "axios";
import React, { useState } from "react";
import { useEffect } from "react";


 const API_KEY = "jsr0VvJsaJd7Iz3wgqYFUbTNnE2X39qV";

const Random = () => {
   
    const [gif, setGif] = useState('');
    


    async function fetchData() {
      

        const url=`https://api.giphy.com/v1/gifs/random?api_key=${API_KEY}`;

        const {data} = await axios.get(url);
        const imageSource = data.data.images.downsized.url
        console.log(imageSource);

        console.log("High Guys Welcome To My GIThub")

        setGif(imageSource);

    }
    
  
    useEffect(() => {
        fetchData();
    },[]);

    const clickHandler = () => {
        fetchData()
    }


    return(
       <div className=" w-1/2  bg-pink-500 rounded-lg border border-black
       flex flex-col items-center gap-y-5 mt-6 mx-auto p-4 ">

        <h1 className="mt-[15px] text-2xl underline  uppercase font-bold">A Random Gif</h1>

        { gif ? (
  <img
    key={gif}
    src={gif}
    alt="Random Gif"
    width="450"
    className="w-[600px] h-[400px] object-cover rounded-md border"
  />
) : (
  <p className="text-white text-lg">Loading...</p>
)}

        <button onClick={clickHandler} 
        className="w-10/12 bg-green-300 text-lg py-2 rounded-lg mb-[20px]">
            Generate
        </button>
        </div>
    );
};

export default Random;

