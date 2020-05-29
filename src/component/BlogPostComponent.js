import React, { useState } from 'react';
import { View, Text, TextInput, StyleSheet, Button } from 'react-native';

const BlogPostComponet = ({ onSubmit, initialValues }) => {

    const [title, setTitle] = useState(initialValues.title);
    const [content, setContent] = useState(initialValues.content)

    return (
        <View>
            <Text style ={styles.label}>Enter Title:</Text>
            <TextInput 
                style ={styles.input} 
                value={title} 
                onChangeText ={(newTitle) => setTitle(newTitle)}
            />
            <Text style ={styles.label}>Enter Context:</Text>
            <TextInput 
                style ={styles.input} 
                value={content} 
                onChangeText = {(newContext)=> setContent(newContext)} 
            />
            <Button 
                title='Save Blog Post'
                onPress = {() => onSubmit(title, content)}/>
        </View>
    )
}

BlogPostComponet.defaultProps = {
    initialValues: {
        title: '',
        content: ''
    }
}

const styles = StyleSheet.create({
    input: {
        borderWidth: 1,
        borderColor:'black',
        fontSize: 18,
        margin:5,
        padding:5
    },
    label: {
        fontSize:20,
        marginBottom:5,
        marginLeft:5
    }
})

export default BlogPostComponet;