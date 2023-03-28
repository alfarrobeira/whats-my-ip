// Check this for help: https://blog.logrocket.com/react-leaflet-tutorial/
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

export default ({ lng, lat }) => {
    const position = [lat, lng];

    return (
        <MapContainer center={position} zoom={13} scrollWheelZoom={false}>
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={position}>
                <Popup>
                    We found you! <br /> Pretty scary, hm? ;-)
                </Popup>
            </Marker>
        </MapContainer>
    );
}
