import {useParams} from "react-router";
import {useEffect, useState} from "react";

const Album = () => {
    const {albumId} = useParams();
    const [album, setAlbum] = useState(null);

    useEffect(() => {
        fetch(`https://jsonplaceholder.typicode.com/albums?id=${albumId}`)
            .then((response) => response.json())
            .then((data) => setAlbum(data));

    }, [albumId]);
    if (!album) {
        return (
            <>
                <p>Loading...</p>
            </>
        )
    }
    const {title} = album[0]
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <h1 className="text-center my-3">This album contain this title: </h1>
            </div>

            <div>
                <div className="row border">
                    <p>{title}</p>
                </div>
            </div>

        </div>

    )

}

export default Album