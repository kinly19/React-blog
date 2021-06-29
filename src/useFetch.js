import { useState, useEffect } from "react";


const useFetch = (url) => {

    const [data, setData] = useState(null);
    const [isLoading, setIsLoading] = useState(true); //loading message to show only if true
    const [error, setError] = useState(null);//Error message

    useEffect(() => {

        const abortCont = new AbortController(); //AbortController interface represents a controller object that allows you to abort one or more Web requests

        setTimeout(() => { //using setTimeout just to simulate isLoading message 

            fetch(url, { signal: abortCont.signal }) // url is where to fetch data from 

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
                    setIsLoading(false);          //only show loading message if true
                    setError(null);              //setError back to null if there are no errors 
                })
                .catch((err) => {
                    if (err.name === 'AbortError') { //because we have aborted the fetch() that updates setData(data), react is still trying to update our states for setError and SetIsLoading 
                        console.log('fetch abort')   // if any err.names are equal to AbortError dont set the states (setError and SetIsLoading)
                    } else {
                        // console.log(err.message);
                        setError(err.message);
                        setIsLoading(false);        //show no loading message if there are errors 
                    }
                });
        }, 1000);

        return () => abortCont.abort(); //if a component that uses this hook has unmounted before fetch() has completed, this will abort any requests initiated by fetch()
    }, [url]); //whenever url changes usesEffect will re run the end point to get the data

    return { data, isLoading, error };
};

export default useFetch;