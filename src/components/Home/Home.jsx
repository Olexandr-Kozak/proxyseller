import User from "../User/User";
import { useEffect, useState } from "react";
const Home = () => {
    const [users, setUsers] = useState(null);
    const [sortOrder, setSortOrder] = useState("asc");
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredUsers, setFilteredUsers] = useState(null);
    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users')
            .then(response => response.json())
            .then(data => {
                setUsers(data);
                setFilteredUsers(data);
            });
    }, []);
    const handleSort = () => {
        if (sortOrder === "asc") {
            setFilteredUsers([...filteredUsers].sort((a, b) => a.username.localeCompare(b.username)));
            setSortOrder("desc");
        } else {
            setFilteredUsers([...filteredUsers].sort((a, b) => b.username.localeCompare(a.username)));
            setSortOrder("asc");
        }
    };
    const handleSearch = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchQuery(query);
        const filtered = users.filter(user => user.username.toLowerCase().includes(query));
        setFilteredUsers(filtered);
    };
    return (
        <div className="container">
            <div className="d-flex align-items-center justify-content-between">
                <div className="">
                    <span>Filter by: </span>
                    <button className="btn btn-primary me-3" onClick={handleSort}>
                        {sortOrder === "asc" ? "asc" : "desc"}
                    </button>
                </div>
                <h1 className="text-center my-3">Home page</h1>
                <div className="">
                    <input
                        type="search"
                        placeholder="Search by username"
                        value={searchQuery}
                        onChange={handleSearch}
                    />
                </div>
            </div>
            <div>
                <div className="row ">
                    {filteredUsers
                        ? filteredUsers.map(user => (
                            <div className="col-3 my-3" key={user.id}>
                                <User  userName={user.username} userId={user.id}/>
                            </div>
                        ))
                        : <p>Some problems with API</p>
                    }
                </div>
            </div>
        </div>
    )
}
export default Home;