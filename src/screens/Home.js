import React, { Component } from 'react';
import {
    View,
} from 'react-native';

import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { showSidebar } from '../actions'; //for use the Rest_API
import colors from '../constants/colors';
import { Button, Icon, Text } from 'native-base';

class Home extends Component {
    static navigationOptions = {
        headerStyle: {
            display: 'none'
        },

    };
    constructor(props) {
        super(props);

        this.state = {

        };
    }

    componentWillMount () {
    }
    render () {
        return (
            <View>
                <Button transparent style={{ backgroundColor: colors.white, }} onPress={this.props.actions.showSidebar}>
                    <Icon name='menu' style={{ color: 'black' }} />
                </Button>
                <Text>Home Screen</Text>
            </View>
        );
    }
}

function mapStateToProps (state) {
    //pass the providers
    return {
    }
}

/* Map Actions to Props */
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({
            showSidebar
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Home);
