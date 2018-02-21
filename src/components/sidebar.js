
import React, { Component } from 'react';
import { Text, Content } from 'native-base';
import colors from '../constants/colors';
class Sidebar extends Component {
    render () {
        return (
            <Content style={{ backgroundColor: colors.white }}>
                <Text>Abc </Text>
            </Content>
        );
    }
}

export default Sidebar;