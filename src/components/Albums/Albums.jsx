import {useParams} from "react-router";
import {useEffect, useState} from "react";
import PostTemplate from "../PostTemplate/PostTemplate";

const Albums = () => {
    const {userId} = useParams();
    const [albums, setAlbums] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?userId=${userId}`)
            .then((response) => response.json())
            .then((data) => setAlbums(data));

    }, [userId]);
    if (!albums) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-center my-3">Albums</h1>
            </div>

            <div>
                <div className="row ">
                    {albums
                        ? albums.map(album => (
                            <div className="col-3 my-3" key={album.id}>
                                <PostTemplate album={album}/>
                            </div>
                        ))
                        : <p>Some problems with API</p>
                    }
                </div>
            </div>

        </div>
    )
}

export default Albums