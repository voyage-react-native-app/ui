import React from 'react';
import { connect } from 'react-redux';

import SignUpScreen from '../../views/SignUpScreen/SignUpScreen';
import { inputUserName, inputUserEmail, inputUserPassword, registerUser } from '../../redux/actions/actions';

const mapStateToProps = state => ({
    username: state.user.username,
    email: state.user.email,
    password: state.user.password,
});

const mapDispatchToProps = dispatch => ({
    inputUserName: username => {
        dispatch(inputUserName(username));
    },
    inputUserEmail: username => {
        dispatch(inputUserEmail(username));
    },
    inputUserPassword: username => {
        dispatch(inputUserPassword(username));
    },
    registerUser: userData => {
        dispatch(registerUser(userData));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(SignUpScreen);
