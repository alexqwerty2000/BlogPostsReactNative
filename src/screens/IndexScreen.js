import React, { useContext } from 'react';
import { Text, View, StyleSheet, FlatList, Button } from 'react-native';
import BlogContext from '../context/BlogContext'

const IndexScreen = () => {
    const {data, addBlogPosts} = useContext(BlogContext)
    return (
        <View>
            <Text>Index Screen</Text>
            <Button title='Add post' onPress={ addBlogPosts }/>
            <FlatList 
                data = {data}
                keyExtractor = {(blogPost => blogPost.item)}
                renderItem = {
                    ({item}) => {
                        return <Text>{item.title}</Text>
                    }
                }
            />
        </View>
    )
}

const styles = StyleSheet.create({})

export default IndexScreen;