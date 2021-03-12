import React from 'react';
import { connect } from 'react-redux';

import Header from '../../components/Header/Header';

const mapStateToProps = state => ({
    location: state.main.location
});

const mapDispatchToProps = dispatch => ({

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Header);
