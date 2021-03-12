import React from 'react';
import { connect } from 'react-redux';

import PlaceType from '../../components/PlaceType/PlaceType';
import { selectPlaceType, unselectPlaceType } from '../../redux/actions/actions';

const mapStateToProps = (state, ownProps) => ({
    selectedPlaceTypes: state.user.selectedPlaceTypes,
    placeTypeName: ownProps.placeTypeName
});

const mapDispatchToProps = dispatch => ({
    selectPlaceType: (placeTypeName) => {
        dispatch(selectPlaceType(placeTypeName))
    },
    unselectPlaceType: (placeTypeName) => {
        dispatch(unselectPlaceType(placeTypeName))
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(PlaceType);
