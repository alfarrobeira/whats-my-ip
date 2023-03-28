import { useEffect, useState } from "react";
import { CircularProgress } from '@chakra-ui/react';
import utils from "../services/utils.jsx";
import Map from "./Map.jsx";
import CountryInfo from "./CountryInfo.jsx";

const IpCard = () => {
    const [ipAddress, setIpAddress] = useState();
    const [loading, setLoading] = useState(true);
    // specify which function to use from utils
    const { getMyIp } = utils();

    useEffect(() => {
        setLoading(true);
        getMyIp().then(data => {
            // console.log("Ip Card");
            // console.log(data);
            setIpAddress(data);
            setLoading(false);
        });
    }, []);

    return (
        <>
            {loading ?
                (
                    <div className="h-100 d-flex align-items-center mb-5 pb-5">
                        <CircularProgress isIndeterminate color='orange.400' size="80px" />
                    </div>
                ) : (
                    <div>
                        <div className="text-align-left">
                            <div><strong>Your IP is:</strong> {ipAddress.ip}</div>
                            <div><strong>You sit in:</strong> {ipAddress.city}</div>
                        </div>
                        <Map lng={ipAddress.longitude} lat={ipAddress.latitude} />
                        <hr/>
                        <CountryInfo countryCode={ipAddress.country}/>
                    </div>
                )
            }
        </>
    );

}

export default IpCard;

// example output:
// {
//     "ip": "93.215.26.33",
//     "network": "93.215.26.0/24",
//     "version": "IPv4",
//     "city": "Bamberg",
//     "region": "Bavaria",
//     "region_code": "BY",
//     "country": "DE",
//     "country_name": "Germany",
//     "country_code": "DE",
//     "country_code_iso3": "DEU",
//     "country_capital": "Berlin",
//     "country_tld": ".de",
//     "continent_code": "EU",
//     "in_eu": true,
//     "postal": "96052",
//     "latitude": 49.9101,
//     "longitude": 10.8894,
//     "timezone": "Europe/Berlin",
//     "utc_offset": "+0100",
//     "country_calling_code": "+49",
//     "currency": "EUR",
//     "currency_name": "Euro",
//     "languages": "de",
//     "country_area": 357021.0,
//     "country_population": 82927922,
//     "asn": "AS3320",
//     "org": "Deutsche Telekom AG"
// }