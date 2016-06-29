import React, { Component } from 'react';
import {
    AppRegistry,
    StyleSheet,
    Text,
    Image,
    View,
    TouchableHighlight,
    PropTypes,
} from 'react-native';

var DeviceInfo = require('Dimensions').get('window'),
    tweenState = require('react-tween-state');

var TabView = React.createClass({

    mixins: [tweenState.Mixin],

    propTypes: {
        duration: React.PropTypes.number,
        onTransitionStart: React.PropTypes.func,
        onPress: React.PropTypes.func,
        renderTitle: React.PropTypes.func,
        titles: React.PropTypes.array,
        indexNumber: React.PropTypes.number,
        barColor: React.PropTypes.string,
        barPosition: React.PropTypes.string,
        underlayColor: React.PropTypes.string,
        stretch: React.PropTypes.bool,
        selectedTitleStyle: React.PropTypes.object,
        titleStyle: React.PropTypes.object,
    },

    getDefaultProps() {
        return {
            onTransitionStart: ()=>{},
            onPress: ()=>{},
            renderTitle: null,
            indexNumber: 0,
            barColor: '#000',
            barPosition:'top',
            underlayColor: '#111',
            stretch: true,
        };
    },

    getInitialState() {
        return {
            leftBar: DeviceInfo.width,
            rightBar: DeviceInfo.width,
        };
    },

    componentDidMount() {
        setTimeout(() => this.moveTo(this.props.indexNumber), 0);
    },

    componentWillReceiveProps(nextProps) {
        this.moveTo(nextProps.indexNumber);
    },

    measureHandler(x, y, width) {
        this.tweenState('leftBar', {
            endValue: x
        });

        this.tweenState('rightBar', {
            endValue: DeviceInfo.width - x - width,
        });

        setTimeout(this.props.onTransitionStart, 0);
    },

    moveTo(index) {
        this.refs[index].measure(this.measureHandler);
    },

    _renderTitle(title, i) {
        return (
            <View style={styles.title}>
                <Text style={[this.props.titleStyle, i === this.props.indexNumber && this.props.selectedTitleStyle]}>{title}</Text>
            </View>
        );
    },

    renderTitle(title, i) {
        return (
            <View key={i} ref={i} style={{ flex: 1 }}>
                <TouchableHighlight underlayColor={this.props.underlayColor} onPress={() => this.props.onPress(i)}>
                    {this.props.renderTitle ? this.props.renderTitle(title, i) : this._renderTitle(title, i)}
                </TouchableHighlight>
            </View>
        );
    },

    render() {
        var items = [],
            titlesOfTabView = this.props.titles;

        for (var i = 0; i < titlesOfTabView.length; i++) {
            items.push(this.renderTitle(titlesOfTabView[i], i));
        }
        var barContainer = (
          <View style={styles.barContainer}>
              <View ref="bottombar" style={[styles.bar, {
                  left: this.getTweeningValue('leftBar'),
                  right: this.getTweeningValue('rightBar'),
                  backgroundColor: this.props.barColor
              }]} />
          </View>
        );
        return (
            <View {...this.props} style={this.props.style}>
                {this.props.barPosition == 'bottom' && barContainer}
                <View style={styles.titleContainer}>
                    {items}
                </View>
                {this.props.barPosition == 'top' && barContainer}
            </View>
        );
    }
});

var styles = StyleSheet.create({
    titleContainer: {
        flexDirection: 'row',
    },
    title: {
        backgroundColor: '#fff',
        alignItems: 'center',
        paddingHorizontal: 2,
        paddingVertical: 10,
        borderWidth: 1,
        borderColor: 'transparent',
        borderBottomColor: '#eeeeee'
    },
    barContainer: {
        height: 4,
    },
    bar: {
        backgroundColor: 'blue',
        position: 'absolute',
        height: 4,
    }
});

module.exports = TabView;
