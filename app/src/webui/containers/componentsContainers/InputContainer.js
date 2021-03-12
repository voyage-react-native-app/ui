import React from 'react';
import { connect } from 'react-redux';

import {inputUserName} from '../../redux/actions/actions';
import Input from '../../components/Input/Input';

const mapStateToProps = state => ({

});

const mapDispatchToProps = dispatch => ({
    inputUserName: (username) => {
        dispatch(inputUserName(username));
    },
    inputUserEmail: (email) => {
        dispatch(inputUserName(email));
    },
    inputUserPassword: (password) => {
        dispatch(inputUserName(password));
    }
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Input);
