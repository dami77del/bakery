import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'

const ProductsItem = () => {
    return (
        <TouchableOpacity style={styles.itemContainer} onPress={()=> console.log('')}>
            <View style={styles.imageContainer}>
                <Image style={styles.image}
                    source={{
                        uri: "https://reactnative.dev/img/tiny_logo.png",
                    }} />
            </View>
            <View>
                <Text>Name</Text>
                <Text>Description</Text>
                <Text> Precio</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ProductsItem

const styles = StyleSheet.create({
    itemContainer: {
        flex: 1,
        borderRadius: 10,
        shadowColor: "black",
        shadowOpacity: 0.5,
        shadowOffset: { width: 0, height: 2 },
        shadowRadius: 10,
        elevation: 5,
    },
    imageContainer: {
        height: "60%",
    },
    textContainer: {
        height: "40%",
    },
    image: {
        height: "100%",
        width: "100%",
    },
})