import React from 'react';
import axios from 'axios';

class SingleTest extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
          name: "",
          email: "",
        }
    }
  
    getPost(id) {
      return axios({
        method: 'get',
        url: 'https://jsonplaceholder.typicode.com/users',
        params: { id },
      })
    }
  
    componentDidMount() {
      const { id } = this.props.match.params;
      
      this.getPost(id)
        .then((res) => {
          const { name, email } = res.data[0];
  
          this.setState({
            name: name,
            email: email
          });
        })
        .catch((err) => console.log(err))
    }
  
    render() {
      return (
        <ul>
          <li> { this.state.name + ", " + this.state.email } </li>
        </ul>
      )
    }
  }
  
  export default SingleTest;