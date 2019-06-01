import React from 'react';
import { View, Text, StyleSheet, Image, Linking } from 'react-native';
import Card from './card';
import CardSection from './CardSection';
import Button from './Button';

const AlbumDetails = ({ album }) => {

    const { headerContentStyle, thumbnailStyle, thumbNailContainerStyle, hederTextStyle, albumImageStyle } = styles;
    const { title, artist, thumbnail_image, image, url } = album;

    return (
        <Card>
            <CardSection>
                <View style={thumbNailContainerStyle}>
                    <Image style={thumbnailStyle} source={{ uri: thumbnail_image }} />
                </View>
                <View style={headerContentStyle}>
                    <Text style={hederTextStyle}>{title}</Text>
                    <Text>{artist}</Text>
                </View>
            </CardSection>

            <CardSection>
                <Image style={albumImageStyle} source={{ uri: image }} />
            </CardSection>

            <CardSection>
                <Button onPress={() => Linking.openURL(url)}>
                    Buy Now
                </Button>
            </CardSection>
        </Card>
    );
};

const styles = StyleSheet.create({
    thumbnailStyle: {
        height: 50,
        width: 50,
    },
    hederTextStyle: {
        fontSize: 18
    },
    headerContentStyle: {
        flexDirection: 'column',
        justifyContent: 'space-around'
    },
    thumbNailContainerStyle: {
        justifyContent: 'center',
        alignItems: 'center',
        marginLeft: 10,
        marginRight: 10
    },
    albumImageStyle: {
        height: 300,
        flex: 1,
        width: null
    }
});

export default AlbumDetails;
