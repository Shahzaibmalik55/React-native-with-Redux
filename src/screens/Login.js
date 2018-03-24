import React, { Component } from 'react';
import {
    Text,
    View,
    Button
} from 'react-native';
import { LoginStyles } from './styles/login';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { login } from '../actions'; //for use the Rest_API


class Login extends Component {
    static navigationOptions = {
        title: 'Login Page',


    };
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount() {

    }

    render() {
        let { user } = this.props.auth;
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <Text>Login Screen</Text>
                <Button
                    title="Go to Home"
                    onPress={() => this.props.navigation.push('Home')}
                />
            </View>
        );
    }
}

function mapStateToProps(state) {
    //pass the providers
    return {
        auth: state.auth
    }
}

/* Map Actions to Props */
function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({
            login
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Login);
