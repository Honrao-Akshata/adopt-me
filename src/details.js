import React from 'react';
import pet from '@frontendmasters/pet';
import Caraousal from './caraousal'
import ErrorBoundary from './ErrorBoundary';

// const Details = (props) => {
//     return (
//         <pre>
//             <code>
//                 {JSON.stringify(props, null, 4)}
//             </code>
//         </pre>
//     )
// }

class Details extends React.Component {
    state = { loading: true }
    constructor(props) {
        super(props);
        this.state = { loading: true }
    }

    componentDidMount() {

        pet.animal(this.props.id).
            then(({ animal }) => {
                console.log(animal)
                this.setState({
                    name: animal.name,
                    animal: animal.type,
                    location: `${animal.contact.address.city},${animal.contact.address.state}`,
                    description: animal.description,
                    media: animal.photos,
                    breed: animal.breeds.primary,
                    loading: false

                })
            }).catch(err => console.log(err))
    }
    render() {
        if (this.state.loading) {
            return <h1> loading ....</h1>
        }

        const { name,
            animal,
            location,
            description,
            media,
            breed } = this.state;



        return (
            <div className="details">
                <Caraousal media={media} />
                <div>
                    <h1>{name}</h1>
                    <h2>{`${animal}- ${breed} - ${location}`}</h2>
                    <button> Adopt {name}</button>
                    <p>{description}</p>
                </div>
            </div >
        );
    }
}

export default function DefaultErrorBoundary(props) {
    return (<ErrorBoundary>
        <Details {...props} />
    </ErrorBoundary>)

};