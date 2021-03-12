import React from 'react';
import { connect } from 'react-redux';

import Place from '../../components/Place/Place';

const mapStateToProps = (state, ownProps) => ({
    selectedPlaceTypes: state.user.selectedPlaceTypes
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Place);
