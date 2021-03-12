import React from 'react';
import { connect } from 'react-redux';

import SelectedPlaceTypesSlider from '../../components/SelectedPlaceTypesSlider/SelectedPlaceTypesSlider';

const mapStateToProps = state => ({
    selectedPlaceTypes: state.user.selectedPlaceTypes
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SelectedPlaceTypesSlider);
