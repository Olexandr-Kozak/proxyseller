import {Route, Routes} from "react-router";
import NoMatch from "../NoMatch/NoMatch";
import Album from "../Album/Album";
import Albums from "../Albums/Albums";
import Posts from "../Posts/Posts";
import Layout from "../Layout/Layout";
import Home from "../Home/Home";
import Post from "../Post/Post";
import "./App.css"

const App = () => {
    return (
        <Routes>
            <Route path="/proxyseller/" element={<Layout/>}>
                <Route index element={<Home/>}/>
                <Route path="/proxyseller/posts/:userId" element={<Posts/>}/>
                <Route path="/proxyseller/post/:postId" element={<Post/>}/>
                <Route path="/proxyseller/albums/:userId" element={<Albums/>}/>
                <Route path="/proxyseller/album/:albumId" element={<Album/>}/>
                <Route path="*" element={<NoMatch/>}/>
            </Route>
        </Routes>
    )
}

export default App