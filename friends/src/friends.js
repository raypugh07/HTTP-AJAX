import React,{Component} from 'react';
import axios from 'axios';
import './App.css';
import NewFriend from './newfriend';
import UpdateFriend from './updatefriend';
//import NewFriend from './newfriend';




class Friends extends Component{
    constructor(props){
        super(props);
        this.state={
            friends:[],
          activeFriend: ''
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

  deleteFriend=id=>{
    axios.delete(`http://localhost:5000/friends/${id}`)
    .then(res=>{
      this.setState({friends:res.data});
    })
    .catch(err=>console.log(err));
  }


  addFriend= friend=>{
    axios.post('http://localhost:5000/friends',friend)
    .then(res=>{
        this.setState({friends:res.data});
        this.props.history.push('/friends');
    })

    .catch(err=>console.log(err));

}

    updateFriend= updatedFriend=>{
        axios.put(`http://localhost:5000/friends/${updatedFriend.id}`, updatedFriend)
    
        .then(res=>{
            this.setState({friends:res.data});
            this.props.history.push('/');
        })
        .catch(err=>console.log(err));
    
    
    }

   setUpdateFriend=friend=>{
      this.setState({activeFriend:friend});
      this.props.history.push('/');
    }






  render(){
    return (

        <div>
<NewFriend addFriend={this.addFriend}/>
      <div className="friends">
        
      

      {this.state.friends.map(friends=>(
          <div className='friends-card' key={friends.id} >
          
          <p>{friends.name}</p>
          <p>{friends.age}</p>
          <p>{friends.email}</p>
          <button onClick={this.deleteFriend}>Delete</button>
          
          </div>

    
          
      ))}
         </div>

              <UpdateFriend updateFriend={this.updateFriend}
                              activeFriend={this.state.activeFriend}
              
              /> 

         </div>


    );
    }

}

export default Friends;