import React, { Component } from "react";
import { connect } from "react-redux";
import * as actions from "../store/actions";
import MapComponent from "./MapComponent";
//Map Config contains configuration for the google map such as google map url etc..
import { mapConfig } from "../store/mapConfig";

class MapVisual extends Component {
  componentDidMount() {
    this.props.loadDronData();
  }

  render() {
    const data = this.props.data;
    console.log(data);

    const { latitude: lat = 29.7604, longitude: lng = -95.3698 } =
      data ? data[data.length - 1] : {};

    return (
      <MapComponent
        {...mapConfig}
        loadingElement={<div style={{ height: `100%` }} />}
        containerElement={<div style={{ height: `400px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        lat={lat}
        lng={lng}
      />
    );
  }
}

const dronSelector = state => state.dronData.data;

// map state to props
const mapStateToProps = (state, ownProps) => {
  return { data : dronSelector(state) };
};

//Map actions to props
const mapDispatchToProps = dispatch => ({
  loadDronData: () =>
    dispatch({
      type: actions.FETCH_DRON_DATA
    })
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MapVisual);
