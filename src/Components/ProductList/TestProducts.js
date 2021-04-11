import { useState, useEffect } from 'react';
import { getProducts } from '../../api'

function TestProducts(props) {
    const [persons, setPersons] = useState([])
    
    useEffect(() => 
        { 
            getProducts()
                .then(res => setPersons( res.data ))
                .catch((err) => console.log(err))
        }, [])

    return (
        <ol>
            {
                persons.map(person => <li>{person.name + ", " + person.email}</li>)
            }
        </ol>
    )
}

export default TestProducts;
