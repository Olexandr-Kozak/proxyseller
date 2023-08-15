import {useEffect, useState} from "react";
import {useParams} from "react-router";
import PostTemplate from "../PostTemplate/PostTemplate";

const Posts = () => {
    const {userId} = useParams();
    const [posts, setPosts] = useState(null);
    console.log(userId)

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setPosts(data));

    }, [userId]);

    console.log(posts)
    if (!posts){
        return(
            <>
                <p>Loading...</p>
            </>
        )
    }
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-center my-3">Posts</h1>
            </div>

            <div>
                <div className="row ">
                    {posts
                        ? posts.map(post => (
                            <div className="col-3 my-3" key={post.id}>
                                <PostTemplate  post={post} />
                            </div>
                        ))
                        : <p>Some problems with API</p>
                    }
                </div>
            </div>

        </div>
    )
}

export default Posts