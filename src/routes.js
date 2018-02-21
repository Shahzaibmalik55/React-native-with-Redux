
import React, { Component } from 'react';
import Login from './screens/Login';
import Home from './screens/Home';
import colors from './constants/colors';

import { StackNavigator } from 'react-navigation';
import { View } from 'react-native';
import { Drawer } from 'native-base'
import Sidebar from './components/sidebar';
import { connect } from 'react-redux'; //to pass functions
import { bindActionCreators } from 'redux';
import { hideSidebar } from './actions'; //for use the Rest_API
import { Button, Icon, Text } from 'native-base';

const RootStack = StackNavigator(
    {
        Login: {
            screen: Login,
        },
        Home: {
            screen: Home,
        },
    },
    {
        initialRouteName: 'Login',
        navigationOptions: {
            headerStyle: {
                backgroundColor: colors.white,
                // display: 'none'
            },
            headerTitleStyle: {
                fontWeight: 'normal',
                alignSelf: 'center',
            },
        },

    }
);
class Routes extends Component {
    constructor(props) {
        super(props);

        this.state = {
            drawer: null
        }
    }
    closeDrawer = () => {
        this.props.actions.hideSidebar();
        this.drawer._root.close()
    };
    openDrawer = () => {
        console.log("OPen")
        this.drawer._root.open()
    };
    render () {
        let { showSidebar } = this.props;
        if (showSidebar) {
            this.openDrawer();
        }
        return (
            <Drawer
                ref={(ref) => { this.drawer = ref; }}
                onClose={() => this.closeDrawer()}
                content={<Sidebar />}
            >
                <RootStack />
            </Drawer>
        );
    }
}


function mapStateToProps (state) {
    //pass the providers
    return {
        auth: state.auth,
        showSidebar: state.sidebar
    }
}

/* Map Actions to Props */
function mapDispatchToProps (dispatch) {
    return {
        actions: bindActionCreators({
            hideSidebar
        }, dispatch)
    };
}

export default connect(
    mapStateToProps, mapDispatchToProps
)(Routes);
