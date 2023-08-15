import {Link} from "react-router-dom";

const User = ({userName, userId}) => {
    return (
        <div className="userI border border-1 border-black">
            <div className="h5 mt-3 text-center">{userName}</div>
            <div className="d-flex my-3 align-items-center justify-content-around">
                <Link to={"/posts/" + userId}   className="btn btn-dark text-white">Posts</Link>
                <Link to={"/albums/" + userId} className="btn btn-dark text-white">Albums</Link>
            </div>
        </div>
    )
}
export default User