import React from 'react';
import { connect } from 'react-redux';

import { displayLoader } from '../../redux/actions/actions';
import LaunchHero from '../../components/LaunchHero/LaunchHero';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    displayLoader: (args) => {
        dispatch(displayLoader());
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(LaunchHero);
