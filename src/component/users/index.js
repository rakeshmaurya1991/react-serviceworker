import React from 'react';
import { resolve } from 'path';
export default class Users extends React.Component{
    constructor() {
        super();
        this.state ={  };
    }
    
     async getAllusers(){
       // const usersdata = {name:'rakesh'};
     //  debugger;
        const curent = this;
        await fetch("https://reqres.in/api/users/2").
        then(response => {
          //  const resp = 
            response.json().then(resp => {
                console.log('response',resp);
                this.setState({usersdata : resp },function(){
                    console.log('current',this.state.usersdata);
                });
            });
        //   Promise.resolve(resp);
            
        }).catch(err =>  {
          this.setState({usersdata : null});
            console.log('errors',err);
        });
    } 

    setandgetUser(data) {
      // const userdata = this.state.usersdata && Promise.resolve(this.state.usersdata.data);
        console.log('dduserdata',this.state.usersdata);
     
    }

    render() {
        return (<div>
                <h3>Users List</h3>
               <ul>
                    <li>
                        NAame: { this.state.usersdata && this.state.usersdata.data.first_name }
                       
                    </li>
                   <li>email:{ this.state.usersdata && this.state.usersdata.data.email }</li> 
                     <li>
                     id:     { this.state.usersdata && this.state.usersdata.data.id }</li>   
                </ul>
               <input type="button" value="Load users" onClick={() => { this.getAllusers() }} />
             </div>);           
    }
}