import { useEffect, useState } from "react";
import utils from "../services/utils.jsx";

export default ({ countryCode }) => {
    const [countryInfo, setCountryInfo] = useState();
    const [loading, setLoading] = useState(true);
    const { getCountryInfo } = utils();

    useEffect(() => {
        setLoading(true);

        getCountryInfo(countryCode).then(data => {
            console.log("CountryInfo:");
            console.log(data);
            setCountryInfo(data);
            setLoading(false);
        });
    }, [countryCode]);

    return (
        <> {loading ?
            (
                <div />
            ) : (
                <div className="container">
                    <div className="row">
                        <div className="col-sm-3">
                            <img src={countryInfo.flags.png} alt="Flag" />
                        </div>
                        <div className="col-sm">
                            <h4>{countryInfo.name.common}</h4>
                            <div>{countryInfo.name.common} belongs to the region of <strong>{countryInfo.subregion ? countryInfo.subregion : countryInfo.region}</strong>.</div>
                            <div>It covers an area of <strong>{countryInfo.area} m³</strong> where approx. <strong>{countryInfo.population} people</strong> live.</div>
                            <div><em>Capital: </em>{countryInfo.capital}</div>
                            <div><em>Timezone: </em>{countryInfo.timezones.length > 1 ? "s" : ""}:
                                {countryInfo.timezones.length > 1 ? <ul>
                                    {/* why do I have to use map? and not forEach? */}
                                    {countryInfo.timezones.map(timezone =>
                                        <li>{timezone}</li>
                                    )}
                                </ul> : <span>&nbsp;{countryInfo.timezones[0]}</span>}
                            </div>
                            <div><em>People speak: </em>
                                {/* convert languages object to array with Object.values()
                                and back to string of concatenated elements with join() */}
                                {Object.values(countryInfo.languages).join(", ")}
                            </div>
                            <div><em>You can pay with: </em>
                                {/* how to access name property of currency object? */}
                                {console.log("Currencies 1: " + Object.values(countryInfo.currencies)['name'])}
                                {console.log("Currencies 2: " + (Object.keys(countryInfo.currencies).values))}
                                {Object.keys(countryInfo.currencies).join(", ")}
                            </div>
                        </div>
                    </div>
                </div>
            )
        }

        </>
    );
};

// challenge: get "Indian rupee"

// currencies {
//     INR {
//         name: "Indian rupee",
//         symbol: "₹"
//     }
// }