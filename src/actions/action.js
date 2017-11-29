export const ACTION_TYPES = {
    ADD_POST: "ADD_POST",
    REMOVE_POST: "REMOVE_POST",
    LOAD_POST: "LOAD_POST",
    MARK_READ: "MARK_READ"
}

export const addPost = (data) => ({
    type: ACTION_TYPES.ADD_POST,
    post: data
});

export const removePost = (data) => ({
    type: ACTION_TYPES.REMOVE_POST,
    id: data
});

export const loadPost = (res) => ({
    type: ACTION_TYPES.LOAD_POST,
    posts: res
});

export const markReadPost = (index) => ({
    type: ACTION_TYPES.MARK_READ,
    index: index
})

export const markReadAPost = (posts, index) => {
    posts[index].new = false
    return posts;
}

//socket functions
export const addNewPostSocket = (socket, post) => {
    return () => {
        socket.emit('addPost', post);
    }
}

export const removePostSocket = (socket, id) => {
    return () => {
        socket.emit('removePost', id)
    }
}

export const loadPostSocket = (socket) => {
    return () => {
        socket.emit('loadPost')
    }
}