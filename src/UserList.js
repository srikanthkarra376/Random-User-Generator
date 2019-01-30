import React from 'react'
const  UserList = (props)=>{
   return(
      <div className="container userlist">
      <ul className="collection">
       <li className="collection-item avatar container">
      <img src={props.user.picture.thumbnail} alt="profile" className="circle"/>
          <span className="title">  <span className="blue-text">
          {props.user.name.title} {props.user.name.first} {props.user.name.last} ({props.user.gender})
          </span>
          <p className="green-text"> Email:{props.user.email}</p>
          </span>
          <p className="purple-text"> Location: {props.user.location.city}, {props.user.location.state}</p>
      </li>
    </ul>
    </div>
    )}
export default UserList

