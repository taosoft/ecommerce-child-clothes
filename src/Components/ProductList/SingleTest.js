import { getProduct } from './../../api'
import { useState, useEffect } from 'react'

function SingleTestProduct(props) {
    const [person, setPerson] = useState({})

    useEffect(() => 
        {
            const { id } = props.match.params;
            getProduct(id)
                .then(res => setPerson(res.data))
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



// class SingleTest extends React.Component {
//     constructor(props) {
//         super(props)
//         this.state = {
//           name: "",
//           email: "",
//         }
//     }
  
//     componentDidMount() {
//       const { id } = this.props.match.params;
      
//       getProduct(id)
//         .then((res) => {
//           const { name, email } = res.data[0];
  
//           this.setState({
//             name: name,
//             email: email
//           });
//         })
//         .catch((err) => console.log(err))
//     }
  
//     render() {
//       return (
//         <ul>
//           <li> { this.state.name + ", " + this.state.email } </li>
//         </ul>
//       )
//     }
//   }
  
  export default SingleTestProduct;