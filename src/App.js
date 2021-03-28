import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';
import { Link, Router } from '@reach/router'
import Details from './details';

const App = () => {
    //   return React.createElement("div", { id: "something" }, [
    //     React.createElement("h1", {}, "Adopt Me!"),
    //     React.createElement(Pet, { name: "Appa", animal: "Dog", breed: "shiba" }),
    //     React.createElement(Pet, { name: "Momo", animal: "Dog", breed: "beagle" }),
    //     React.createElement(Pet, { name: "Zampya", animal: "Dog", breed: "stray" }),
    //   ]);
    return (
        <div>
            <header>
                <Link to="/">
                    Adopt me !!
                
                </Link>
            </header>

            <Router>
                <SearchParams path="/" />
                <Details path="/details/:id" />
            </Router>

        </div>
    )
};

render(<App />, document.getElementById("root"));
