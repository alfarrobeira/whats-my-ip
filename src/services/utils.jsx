import axios from "axios";

// Find API descriptions here:
// for getting user IP
// https://ipapi.co/api/?javascript#location-of-clients-ip 
// for getting country info
// https://restcountries.com/

const utils = () => {

    const IP_URL = "https://ipapi.co/json/";
    const COUNTRY_URL = "https://restcountries.com/v3.1/alpha/";

    // retrieve location for your IP address formatted as JSON
    // reminder: an async function returns a promise
    const getMyIp = async () => {
        // variant: fetching data with axios
        // const data = await axios.get(IP_URL);
        // return data.data;

        // 2 variants to handle promises: .then or await
        // 1. variant with await - recommended over nested '.then'
        try {
            const res = await fetch(IP_URL);
            const json = await res.json();
            return json;
        }
        catch (error) { console.log(error); }

        // // 2. variant with '.then' - can lead to nesting hell
        // const data = fetch(IP_URL)
        //     .then(response => response.json())
        //     .then(jsonData => jsonData)
        //     .catch(error => console.log("Error retrieving IP address" + error));

        // return data;       
    }

    const getCountryInfo = async (cc) => {
        // // variant: fetching data with axios
        // const data = await axios.get(COUNTRY_URL + cc);
        // return data.data[0];

        // variant with await - recommended to avoid nested '.then'
        try {
            // await: result is returned when available
            const res = await fetch(COUNTRY_URL + "IN");
            const json = await res.json();
            const data = json[0];
            return data;
        }
        catch (error) { console.log(error); }

        // // variant with '.then' - can lead to nesting hell
        // const data = fetch(COUNTRY_URL + cc)
        //     .then((res) => res.json())
        //     .then((jsonData) => jsonData[0])
        //     .catch(error => console.log(error));
        // return data;

        // // variant with '.then' and logging: make sure to return the result of the promise!
        // const data = fetch(COUNTRY_URL + cc)
        //     .then((res) => res.json() )
        //     .then((jsonData) => {
        //         console.log("Result fetch: " + jsonData[0]);
        //         return jsonData[0];
        //     })
        //     .catch(error => console.log(error));
        // return data;
    };

    return { getMyIp, getCountryInfo };
}

export default utils;
