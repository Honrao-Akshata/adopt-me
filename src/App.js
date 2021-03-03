import React from 'react';
import { render } from 'react-dom';
import SearchParams from './SearchParams';

const App = () => {
    //   return React.createElement("div", { id: "something" }, [
    //     React.createElement("h1", {}, "Adopt Me!"),
    //     React.createElement(Pet, { name: "Appa", animal: "Dog", breed: "shiba" }),
    //     React.createElement(Pet, { name: "Momo", animal: "Dog", breed: "beagle" }),
    //     React.createElement(Pet, { name: "Zampya", animal: "Dog", breed: "stray" }),
    //   ]);
    return (
        <div>
            <h1 id="something"> Adopt me !!</h1>
            <SearchParams />
        </div>
    )
};

render(<App />, document.getElementById("root"));
