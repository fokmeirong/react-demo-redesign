import React, { Component } from 'react';
import Header from './component/header';
import FilterBar from './component/filterBar';
import { Router  } from 'react-router-dom'
import Routers from './router'
import createBrowserHistory from 'history/createBrowserHistory';
const history = createBrowserHistory();

class App extends Component{
   render(){
      return(
        <div>
            <Header />
            <FilterBar />
            <Router history={history}>
              <Routers />
            </Router >
            
            {/* {this.props.children} */}
        </div>
      );
   }
}
export default App;