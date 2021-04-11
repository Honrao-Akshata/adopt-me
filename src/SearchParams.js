import React, { useState, useEffect, useContext } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropDown from './useDropdown';
import ThemeContext from './ThemeContext';

const SearchParams = () => {
    const [location, setLocation] = useState('Seatle,WA')
    const [animal, AnimalDropdown] = useDropDown("Animals", "dog", ANIMALS)
    const [breeds, setBreeds] = useState([])
    const [breed, BreedDropdown, setBreed] = useDropDown("Breeds", "", breeds)
    const [pets, setPets] = useState([]);
    const [theme, setTheme] = useContext(ThemeContext)

    async function requestPets() {
        const { animals } = await pet.animals({
            location,
            breed,
            type: animal
        })
        console.log(animals)
        setPets(animals || []);
    }

    ///Dont want to slow down the first render of the application


    useEffect(() => {
        setBreeds([]);
        setBreed("")
        pet.breeds(animal).then(({ breeds }) => {
            const breedStrings = breeds.map(({ name }) => name);
            setBreeds(breedStrings)
        }, console.error);
    }, [animal, setBreed, setBreeds])

    return (
        <div className="search-params">
            <form onSubmit={(e) => {
                e.preventDefault();
                requestPets();
            }

            }>

                <label htmlFor="location">
                    <input id="location" value={location} placeholder="Location" onChange={e => setLocation(e.target.value)} />
                </label>
                <AnimalDropdown />
                <BreedDropdown />
                <label htmlFor="theme" >
                    Theme
                    <select
                        value={theme}
                        onChange={e => setTheme(e.target.value)}
                        onBlur={e => setTheme(e.target.value)}
                    >
                        <option value="peru"> Peru</option>
                        <option value="darkblue"> Dark Blue</option>
                        <option value="mediumorchid"> MediumOrchid</option>
                        <option value="chartreuse"> Chartreuse</option>

                    </select>

                </label>
                <button style={{ backgroundColor: theme }}>
                    Submit
                </button>
            </form>
            <Results petslists={pets} />
        </div >
    )
}

export default SearchParams;