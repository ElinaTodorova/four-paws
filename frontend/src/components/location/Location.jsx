import { useState } from "react";
import {
  APIProvider,
  Map,
  Marker,
  InfoWindow,
} from "@vis.gl/react-google-maps";
import ShopInfo from "./shop-info/ShopInfo";

import "./Location.sass";

export default function Location() {
  const [open, setOpen] = useState(false);

  const position = { lat: 45.7967, lng: 4.8467 };

  return (
    <>
      <ShopInfo />
      <APIProvider apiKey={import.meta.env.VITE_API_KEY}>
        <div className="conatiner-map">
          <Map defaultCenter={position} defaultZoom={11}>
            <Marker position={position} onClick={() => setOpen(true)} />
            {open && (
              <InfoWindow
                position={position}
                onCloseClick={() => setOpen(false)}
              >
                <p>Four Paws 🐾</p>
                <p>Monday - Saturday</p>
                <p>8h - 19h</p>
                <p>Sunday</p>
                <p>Closed</p>
              </InfoWindow>
            )}
          </Map>
        </div>
      </APIProvider>
    </>
  );
}
