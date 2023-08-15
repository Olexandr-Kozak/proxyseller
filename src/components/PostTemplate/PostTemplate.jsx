import React, {useEffect, useState} from "react";
import {Link} from "react-router-dom";

const PostTemplate = (props) => {

    const [url, setUrl] = useState('');
    const [title, setTitle] = useState('');

    useEffect(() => {
        if (props.post) {
            const {title} = props.post;
            setUrl(`/post/${props.post.id}`);
            setTitle(title);
        } else if (props.album) {
            const {title} = props.album;
            setUrl(`/album/${props.album.id}`);
            setTitle(title);
        }
    }, [props]);


    if (!props) {
        return (
            <>
                <p>Loading</p>
            </>
        )
    }
    return (
        <>
            <div className="userI border border-1 border-black">
                <div className="h5 mt-3 text-center">{title}</div>
                <div className="d-flex my-3 align-items-center justify-content-around">
                    <Link to={url} className="btn btn-dark text-white">More</Link>
                </div>
            </div>
        </>
    );
};
export default PostTemplate;
