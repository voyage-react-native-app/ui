import React from 'react';
import { connect } from 'react-redux';

import Place from '../../components/Place/Place';

const mapStateToProps = (state, ownProps) => ({
    places: state.user.places,
    imageUri: ownProps.imageUri,
    placeName: ownProps.placeName,
    rate: ownProps.rate,
    placeTypes: ownProps.placeTypes
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Place);
