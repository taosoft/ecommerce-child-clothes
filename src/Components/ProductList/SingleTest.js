import { getProduct } from './../../api'
import { useState, useEffect } from 'react'

function SingleTestProduct(props) {
    const [person, setPerson] = useState({})

    useEffect(() => 
        {
            const { id } = props.match.params;
            getProduct(id)
                .then(res => setPerson(res.data[0]))
                .catch((err) => console.log(err))
        },[props.match.params])

    return (
        <ol>
          <li> 
            { person.name + ", " + person.username + ", " + person.email } 
          </li>
        </ol>
      )
}

export default SingleTestProduct;
