import React from "react";

import {
  withScriptjs,
  withGoogleMap,
  GoogleMap,
  Marker
} from "react-google-maps";

//step 1: Render Google Map.
//step 2: Wrap google map with withGoogleMap HOC.
//step 3: wrap againg with withScriptjs HOC.

const MapComponent = withScriptjs(
  withGoogleMap(props => {
    const { lat, lng, isMarkerShown } = props;
    return (
      <GoogleMap defaultZoom={4} defaultCenter={{ lat, lng }}>
        {isMarkerShown && <Marker position={{ lat, lng }} />}
      </GoogleMap>
    );
  })
);

export default MapComponent;
