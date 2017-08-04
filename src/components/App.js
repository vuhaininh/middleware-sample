import React,{Component} from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import '../styles/main.scss';
import UserList from './user_list';
export default class App extends Component{
  render(){
    return(
      <div>
        <UserList />
      </div>

    );
  };
}
