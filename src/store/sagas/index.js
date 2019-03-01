import WeatherSagas from "./Weather";
import ApiErrors from "./ApiErrors";
import MapVisual from "./MapVisual";

export default [...ApiErrors, ...WeatherSagas, ...MapVisual]; //Expose Sagas
