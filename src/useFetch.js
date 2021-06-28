import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); //loading message to show only if true
    const [error, setError] = useState(null);//Error message

    useEffect(() => {
        setTimeout(() => { //using setTimeout just to simulate isLoading message 

            fetch(url) // where to fetch data from 

                .then(res => {
                    console.log(res);
                    if (!res.ok) {               //Handle Error messages
                        throw Error('Error could not fetch data for that resource');
                    };
                    return res.json();           //use json to parse data in as an object to use
                })
                .then((data) => {                //take that data and set the state
                    console.log(data);
                    setData(data);
                    setIsLoading(false);          //only show loading messge if true
                    setError(null);              //setError back to null if there are no errors 
                })
                .catch((err) => {
                    // console.log(err.message);
                    setError(err.message);
                    setIsLoading(false);        //show no loading message if there are errors 
                });

        }, 1000);

    }, [url]); //whenever url changes usesEffect will re run the end point to get the data

    return { data, isLoading, error };
}

export default useFetch