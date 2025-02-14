import React from 'react';

import Posts from '../post/Posts';

const Home = () => (
    <>
        <div className="container">
            <Posts />
        </div>
        <footer className="page-footer font-small" style={{ background: "#030271" }}>
            <div className="container">
                <p className="text-center" style={{ color: "#fff", fontSize: "large", margin: "0", padding: "20px" }}>
                    Work in procress for Kanda Team
                </p>
            </div>
        </footer>
    </>
);

export default Home;