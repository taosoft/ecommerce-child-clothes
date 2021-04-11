import { useState, useEffect } from 'react';
import { getProducts } from '../../api'
import Product from './Product';

function TestProducts(props) {
    const [persons, setPersons] = useState([])
    
    useEffect(() => 
        { 
            getProducts()
                .then(res => setPersons(res.data))
                .catch((err) => console.log(err))
        }, [persons])

    return (
        persons.map( person =>
            <Product 
                key={person.id}
                price={"price"}
                description={person.email}
                title={person.name}
            />)
    )
}

export default TestProducts;
