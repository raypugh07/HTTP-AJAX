import React from 'react';




class UpdateFriend extends React.Component{
    state={
        friend: this.props.activeFriend
    }


    changeHandler=ev=>{
        ev.persist();
        let value=ev.target.value;
        if (ev.target.name==='age'){
            value=parseInt(value,10);
        
        }

        this.setState(prevState=>({
            friend:{
                ...prevState.friend,
                [ev.target.name]:value
            }
        }))


    }

        handleSubmit=e=>{
            e.preventDefault();
            this.props.updateFriend(this.state.friend);
        }


        render(){
            return(
                <div>

                    <form onSubmit={this.handleSubmit}>
                    <input
                    type='text'
                    name='name'
                    onChange={this.changeHandler}
                    placeholder='name'
                    value={this.state.friend.name} />

<input
                    type='number'
                    name='age'
                    onChange={this.changeHandler}
                    placeholder='age'
                    value={this.state.friend.age} />

<input
                    type='text'
                    name='email'
                    onChange={this.changeHandler}
                    placeholder='email'
                    value={this.state.friend.email} />



                <button>Update Friend</button>
                    </form>




                </div>
            )
        }


}

export default UpdateFriend;