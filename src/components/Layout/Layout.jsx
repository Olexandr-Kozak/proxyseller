import {Link, Outlet} from "react-router-dom";

const Layout = () => {
    return (
        <div className="min-vh-100 d-flex flex-column">
            <header className="w-100 bg-dark bg-gradient d-flex justify-content-between align-items-center px-5 py-2">
                <div>
                    <span className="h1 text-white fw-bold">KOZAK</span>
                </div>
                <nav className="d-flex align-items-center">
                    <ul className="d-flex list-unstyled mb-0">
                        <li className="btn btn-light"><Link className="text-dark text-decoration-none"
                                                            to="/proxyseller/">Home</Link></li>
                    </ul>
                </nav>

            </header>
            <main>
                <Outlet/>
            </main>
            <footer className="mt-auto w-100 bg-dark bg-gradient d-flex justify-content-between align-items-center px-5 py-2">
                <div>
                    <span className="h1 text-white fw-bold">KOZAK</span>
                </div>
                <div className="">
                    <span className={"text-white"}>
                        Made by Oleksandr Kozak
                    </span>
                </div>

            </footer>
        </div>
    )
}

export default Layout