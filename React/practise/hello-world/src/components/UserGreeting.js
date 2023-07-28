import React, { Component } from 'react'

class UserGreeting extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isLoggedIn: true
      }
    }
    
  render() {

    return this.state.isLoggedIn && <div>Welcome Anoohhya</div>

    // return (
    //     this.state.isLoggedIn ? (
    //         <div>Welcome anoohhya</div> 
    //     ) : (
    //         <div>Welcome Guest</div>
    //     ) 
    // )

    // let message
    // if (this.state.isLoggedIn) {
    //     message = <div>Welcome anoohhya</div>
    // } else {
    //     message = <div>Welcome Guest</div>
    // }
    // return <div>{message}</div>


    // if (this.state.isLoggedIn) {
    //     return (
    //         <div>
    //             Welcome Anoohhya
    //         </div>
    //     )
    // }
    // else {
    //     return (
    //         <div>
    //             Welcome Guest
    //         </div>
    //     )
    // }
    // return (
    //   <div>
    //     <div>Welcome Anoohhya</div>
    //     <div>Welcok Guest</div>
    //   </div>
    // )
  }
}

export default UserGreeting
