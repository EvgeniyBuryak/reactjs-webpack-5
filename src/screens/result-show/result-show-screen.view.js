import React from "react";
import { Link, useLocation } from "react-router-dom";

const ResultShowScreen = () => {
    const location = useLocation();
    const { from } = location.state;
    console.log(from);
    return (
        <>
            <main>
                <h2>Who are we?</h2>
                <p>
                    That feels like an existential question, don't you
                    think?
                </p>
            </main>
            <nav>
                <Link to="/">Home</Link>
            </nav>
        </>
    );
}

export { ResultShowScreen };