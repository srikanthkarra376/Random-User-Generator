import React, { Component } from 'react';
import UserList from './UserList'

class App extends Component {
  constructor() {
    super()
    this.state = {
      users:[],
      value :"",
      isLodaing : false
  }
}
handleonchange =(e) => {
   this.setState({
    value : e.target.value
})

}
 getRandomUsers=(e) => {
   e.preventDefault();
   this.setState({isLodaing : true})
    fetch(`https://randomuser.me/api/?results=${this.state.value}`)
    .then(res=>res.json())
    .then(data=>{
      this.setState({
        isLodaing : false,
        users:data.results
      })
      
     })
  }
  clearRandomUsers = () => {
    this.setState({
      users : [],
      value:""
    })
  }

  render(){
    const UserComponent = this.state.users.map(user=>
      <UserList
       key={user.login.uuid}
       user={user}
      />)

   return (
      <div className="App container">
      <h4 className=" container cyan-text">React Random User  Generator App</h4>
          <div className="container center"><span className="new badge green" data-badge-caption="users"> {this.state.users.length}</span> </div>
          <div className="container center">
            <div className="row container">
                <form className="col s10" onSubmit={this.getRandomUsers}>
                  <div className="row">
                    <div className="input-field col s6">
                    <input type="number" value={this.state.value} onChange={this.handleonchange} placeholder="Enter a number here...." />
                    </div>
                    <div className="input-field col s3">
                    <button className="btn">submit</button>
                  </div>
                  </div>
                </form>
                { this.state.users.length>0 ? <button className="btn waves-effect waves-light red lighten-2" onClick={this.clearRandomUsers}>Delete all</button>:<div className="container  red-text">No users left ! please input a number to see users</div>}
               </div>
            </div>
            {this.state.isLodaing ? <div className="center green-text">Loading...</div> : null}
            <div className="container">
             { UserComponent}  
            </div>
        </div> 
    );
  }
}

export default App;
