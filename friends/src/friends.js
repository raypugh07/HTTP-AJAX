import React,{Component} from 'react';
import axios from 'axios';
import './App.css';




class Friends extends Component{
    constructor(props){
        super(props);
        this.state={
            friends:[]
        }
    }



    
  componentDidMount(){
    axios.get('http://localhost:5000/friends')
    .then(res=>{
      console.log(res);
      this.setState({friends:res.data});
     
    })
    .catch(err=>{
      console.log(err);
      //this.setState({error:err.response.message})
    })

  }

  render(){
    return (
      <div className="friends">

      {this.state.friends.map(friends=>(
          <div className='friends-card' key={friends.id}>
          
          <p>{friends.name}</p>
          <p>{friends.age}</p>
          <p>{friends.email}</p>
          
          </div>
          
      ))}

     
      
      
        
      </div>
    );
    }

}

export default Friends;