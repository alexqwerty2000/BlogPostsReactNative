import React, { useContext, useEffect } from 'react';
import { Text, View, StyleSheet, FlatList, TouchableOpacity } from 'react-native';
import { Context } from '../context/BlogContext';
import { Octicons } from '@expo/vector-icons';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const IndexScreen = ({navigation}) => {
    const {state, deleteBlogPost , getBlogPosts} = useContext(Context)
    
    useEffect (() => {
        getBlogPosts()

        const listener = navigation.addListener('didFocus',() => {
            getBlogPosts();
        })

        return () => {
            listener.remove();
        }
    }, [])
    return (
        <View>
            
            <FlatList 
                data = {state}
                keyExtractor = {(blogPost => blogPost.title)}
                renderItem = {
                    ({item}) => {
                        return (
                            <TouchableOpacity onPress = {() => navigation.navigate('Show', { id: item.id})}>
                                <View style = {styles.row}>

                                    <Text style = {styles.title}>{item.title} - {item.id}</Text>
                                    <TouchableOpacity onPress = {() => deleteBlogPost(item.id)}>
                                        <Octicons name="trashcan" style ={styles.icon}/> 
                                    </TouchableOpacity>
                                </View>
                            </TouchableOpacity>
                        )
                    }
                }
            />
        </View>
    )
}

IndexScreen.navigationOptions = ({ navigation }) =>{
    return {
        headerRight: () =>  <TouchableOpacity 
                                onPress = {() => navigation.navigate('Create')}
                            >
                                <MaterialCommunityIcons 
                                    name="plus" 
                                    size={35} 
                                    color="black" />
                           </TouchableOpacity>
    }
}

const styles = StyleSheet.create({
    row:{
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingHorizontal: 20,
        paddingVertical: 20,
        borderTopWidth: 1,
        borderColor: 'red'
    },
    title:{
        fontSize: 18
    },
    icon: {
        fontSize: 24
    }
})

export default IndexScreen;