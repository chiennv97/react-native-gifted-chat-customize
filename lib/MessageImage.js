import PropTypes from 'prop-types';
import React, { Component } from 'react';
import { Image, StyleSheet, View, ViewPropTypes, } from 'react-native';
// TODO: support web
// @ts-ignore
// import Lightbox from 'react-native-lightbox';
// import FastImage from 'react-native-fast-image';
import DetailViewableImage from '../../../src/modules/view/DetailViewableImage'
const styles = StyleSheet.create({
    container: {},
    image: {
        width: 150,
        height: 100,
        borderTopLeftRadius: 13,
        borderTopRightRadius: 13,
        resizeMode: 'cover',
    },
    imageActive: {
        flex: 1,
        resizeMode: 'contain',
    },
});
export default class MessageImage extends Component {
    render() {
        const { containerStyle, lightboxProps, imageProps, imageStyle, currentMessage, borderBottom, borderTop} = this.props;
        if (!!currentMessage) {
            return (<View style={[styles.container, containerStyle]}>
                {/* <Lightbox activeProps={{
                    style: styles.imageActive,
                }} {...lightboxProps}>
                    <FastImage {...imageProps} style={[styles.image, imageStyle]} resizeMode={FastImage.resizeMode.cover} source={{ uri: currentMessage.image }} />
                </Lightbox> */}
                <DetailViewableImage
                    style={[styles.image, imageStyle, borderBottom, borderTop]}
                    source={{ uri: currentMessage.image }}
                    resizeMode="cover" />
            </View>);
        }
        return null;
    }
}
MessageImage.defaultProps = {
    currentMessage: {
        image: null,
    },
    containerStyle: {},
    imageStyle: {},
    imageProps: {},
    lightboxProps: {},
};
MessageImage.propTypes = {
    currentMessage: PropTypes.object,
    containerStyle: ViewPropTypes.style,
    imageStyle: PropTypes.object,
    imageProps: PropTypes.object,
    lightboxProps: PropTypes.object,
};
//# sourceMappingURL=MessageImage.js.map