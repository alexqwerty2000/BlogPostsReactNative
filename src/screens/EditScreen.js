import React, { useContext}  from 'react';
import { StyleSheet }  from 'react-native';
import { Context } from '../context/BlogContext';
import BlogPostComponet from '../component/BlogPostComponent';

const EditScreen = ({ navigation }) => {
    const { state, editBlogPost } = useContext(Context);
    const blogPost = state.find(blogPost => blogPost.id === navigation.getParam('id'))
   
    return <BlogPostComponet 
        initialValues ={{ title: blogPost.title, content: blogPost.content}}
        onSubmit = {(title, content) => {
            editBlogPost(blogPost.id, title, content, () => navigation.pop())
        }
        
    }/>
}

const styles = StyleSheet.create({})

export default EditScreen;