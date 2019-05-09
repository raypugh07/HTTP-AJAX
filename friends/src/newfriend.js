import React from 'react';


class NewFriend extends React.Component{
    state={
        friend:{
            name: '',
            age:'',
            email:''


        }
    }


    changeHandler=ev=>{
        ev.persist();
        let value=ev.target.value;
        if (ev.target.name==='age') {
            value=parseInt(value,10);
        }

        this.setState(prevState=>({
            friend:{
                ...prevState.friend,
                [ev.target.name]: value
            }

        }))
    }

        handleSubmit=e=>{
            e.preventDefault();
            this.props.addFriend(this.state.friend);
        };

        render(){
            return(
                <div className='form'>
                    

                    <form className='form1'onSubmit={this.handleSubmit}>
                    <input 
                    type='text'
                    name='name'
                    onChange={this.changeHandler}
                    placeholder='name'
                    value={this.state.friend.name}/>

                    <input 
                    type='number'
                    name='age'
                    onChange={this.changeHandler}
                    placeholder='age'
                    value={this.state.friend.age}/>

                    <input 
                    type='text'
                    name='email'
                    onChange={this.changeHandler}
                    placeholder='email'
                    value={this.state.friend.email}/>

                    <button>Add New Friend</button>





                    
                    
                    
                    
                    </form>


                </div>
            )
        }


}

export default NewFriend;