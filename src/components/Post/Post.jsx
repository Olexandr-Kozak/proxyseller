import {useEffect, useState} from "react";
import {useParams} from "react-router";

const Post = () => {
    const {postId} = useParams();
    const [post, setPost] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/posts?id=${postId}`)
            .then((response) => response.json())
            .then((data) => setPost(data));

    }, [postId]);
    if (!post){
        return(
            <>
                <p>Loading...</p>
            </>
        )
    }
    const {title, body} = post[0]
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-center my-3">{title}</h1>
            </div>

            <div>
                <div className="row border">
                    <p>{body}</p>
                </div>
            </div>

        </div>

    )
}

export default Post