import PostMessage from '../models/postMessage.js';

export const getPosts = async (req, res) => {
    try {
        const postMessage = await postMessage.find();
    } catch (error) {

    }
}

export const createPost = (req, res) => {
    res.send('POST IS CREATED!');
}

// https://youtu.be/ngc9gnGgUdA?t=1545