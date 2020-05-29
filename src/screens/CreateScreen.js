import React, { useContext } from 'react';
import { StyleSheet } from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostComponent from '../component/BlogPostComponent';
 
const CreateScreen = ({navigation}) => {
    const { addBlogPost } = useContext(Context);
    return <BlogPostComponent onSubmit = {(title, content) => 
        addBlogPost(title, content, () => navigation.navigate('Index'))
    }/>
}

const styles = StyleSheet.create({
    
})

export default CreateScreen;