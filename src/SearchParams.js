import React, { useState, useEffect } from 'react';
import pet, { ANIMALS } from '@frontendmasters/pet';
import Results from './Results';
import useDropDown from './useDropdown';

const SearchParams = () => {
    const [location, setLocation] = useState('Seatle,WA')
    const [animal, AnimalDropdown] = useDropDown("Animals", "dog", ANIMALS)
    const [breeds, setBreeds] = useState([])
    const [breed, BreedDropdown, setBreed] = useDropDown("Breeds", "", breeds)
    const [pets, setPets] = useState([]);

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
                <button>
                    Submit
                </button>
            </form>
            <Results petslists={pets} />
        </div >
    )
}

export default SearchParams;