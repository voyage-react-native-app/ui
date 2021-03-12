import React from 'react';
import { connect } from 'react-redux';

import HomeScreen from '../../views/HomeScreen/HomeScreen';
import { fetchPlaces, getLocation } from '../../redux/actions/actions';
import store from '../../redux/store';

const mapStateToProps = state => ({
    location: state.main.location,
    places: state.user.places
});

const mapDispatchToProps = dispatch => ({
    getLocation: coords => {
        dispatch(getLocation(coords));
    },
    fetchPlaces: coords => {
        const {
            user: { selectedPlaceTypes }
        } = store.getState();
        dispatch(fetchPlaces(coords, selectedPlaceTypes))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(HomeScreen);
