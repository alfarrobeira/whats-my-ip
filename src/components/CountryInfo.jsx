import { useEffect, useState } from "react";
import utils from "../services/utils.jsx";

export default ({ countryCode }) => {
    // destructure object to avoid writing countryInfo over and over again, like countryInfo.flags, countryInfo.name, etc.
    const [ { flags, name, subregion, region, area, population, capital, timezones, languages, currencies }, setCountryInfo] = useState({});
    const [loading, setLoading] = useState(true);
    const { getCountryInfo } = utils();

    useEffect(() => {
        setLoading(true);

        getCountryInfo(countryCode).then(data => {
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
                            <img src={flags.png} alt="Flag" />
                        </div>
                        <div className="col-sm">
                            <h4>{name.common}</h4>
                            <div>{name.common} belongs to the region of <strong>{subregion ? subregion : region}</strong>.</div>
                            <div>It covers an area of <strong>{area} m³</strong> where approx. <strong>{population} people</strong> live.</div>
                            <div><em>Capital: </em>{capital}</div>
                            <div><em>Timezone</em>{timezones.length > 1 ? "s" : ""}:
                                {timezones.length > 1 ? <ul>
                                    {/* Usage of array.map is required, because forEach does not expose the content of the loop */}
                                    {timezones.map(timezone =>
                                        <li>{timezone}</li>
                                    )}
                                </ul> : <span>&nbsp;{timezones[0]}</span>}
                            </div>
                            <div><em>People speak: </em>
                                {/* convert languages object to array with Object.values()
                                and back to string of concatenated elements with join() */}
                                {Object.values(languages).join(", ")}
                            </div>
                            <div><em>You can pay with: </em>
                                {/* Nested objects! Access value of inner currency object */}
                                { (Object.values(currencies).map(currency => <span>{currency.name}, </span>)) }
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