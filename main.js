let posts = [{ title: 'POST1' }, { title: 'POST2' }];

const createPost = async(post) => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            posts.push(post);
            resolve();
        }, 1000);
    });
}


const updateLastUserActivityTime = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            let lastActivityTime = new Date().getTime();
            resolve(lastActivityTime);
        }, 1000);
    });
}

const deletePost = async() => {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (posts.length > 0) {
                resolve(posts.pop());
            } else {
                reject("ERROR: ARRAY IS EMPTY");
            }
        }, 1000);
    });
}


const update = async () => {
    try{
        await updateLastUserActivityTime();
        await createPost({title: 'POST3'});
        await createPost({title: 'POST4'});
        await updateLastUserActivityTime();
    
        console.log(posts);
        console.log('updateLastUserActivityTime=> ',new Date().getTime())
        let deletedPost = await deletePost();
        console.log(deletedPost)        
        console.log(posts);
    } catch(e){
        console.log(e);
    }    
}

update();
