import React from 'react';
import Pet from './Pet'

const Results = ({ petslists }) => {
    console.log("in result")
    console.log(petslists)
    return (
        <div className="search">
            { petslists.length === 0 ? (
                <h1>
                    No pets found!
                </h1>
            ) : (
                    petslists.map(pet => {
                        return (
                            <Pet
                                animal={pet.type}
                                key={pet.id}
                                name={pet.name}
                                breed={pet.breeds.primary}
                                media={pet.photos}
                                location={`${pet.contact.address.city} ,${pet.contact.address.state}`}
                                id={pet.id}
                            />
                        )

                    })
                )}


        </div>

    )


}

export default Results;