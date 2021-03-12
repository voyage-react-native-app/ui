import React from 'react';
import { connect } from 'react-redux';

import PlacesTypesScreen from '../../views/PlacesTypesScreen/PlacesTypesScreen';
import { submitSelectedPlaceTypes } from '../../redux/actions/actions';
import store from '../../redux/store';

const mapStateToProps = (state, ownProps) => ({
    selectedPlaceTypes: state.user.selectedPlaceTypes
});

const mapDispatchToProps = dispatch => ({
    submitSelectedPlaceTypes: selectedPlaceTypes => {
        const {
            user: { email }
        } = store.getState();
        dispatch(submitSelectedPlaceTypes(selectedPlaceTypes, email))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlacesTypesScreen);
