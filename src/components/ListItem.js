import React, {Component} from 'react';
import {Text, TouchableWithoutFeedback, View, LayoutAnimation, UIManager, StyleSheet} from 'react-native';
import {CardSection} from './common';
import {connect} from 'react-redux';


import * as actions from '../actions';
class ListItem extends Component {
    componentWillUpdate() {
        UIManager.setLayoutAnimationEnabledExperimental &&UIManager.setLayoutAnimationEnabledExperimental(true);
        LayoutAnimation.spring();
    }

    renderDescription() {
        const {library, expanded} = this.props;
        const {descriptionStyle} = styles;
        if(expanded) {
            return (
                <CardSection>
                    <Text style={descriptionStyle}>{library.description}</Text>
                </CardSection>
            )
        }

    }

    render() {
        const {id, title, description} = this.props.library;
        const {TextStyle} = styles;
        return (
            <TouchableWithoutFeedback onPress={()=> this.props.selectLibrary(id)}>
                <View>
                    <CardSection>
                        <Text style={TextStyle}>{title}</Text>
                    </CardSection>
                    
                    {this.renderDescription()}
              
                </View>
            </TouchableWithoutFeedback>
        )
    }
}

const styles = StyleSheet.create({
    TextStyle: {
        fontSize: 18,
        marginLeft: 10
    },
    descriptionStyle: {
        marginLeft: 5,
        padding: 3
    }
})


const mapStateToProps = (state, ownProps) => {
    const expanded = state.selectedLibraryId === ownProps.library.id;
    return {expanded: expanded}
}
export default connect(mapStateToProps, actions)(ListItem);