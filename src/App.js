import React, { Component } from 'react';
import Header from './component/header';
import FilterBar from './component/filterBar';

class App extends Component{
   render(){
      return(
        <div>
            <Header />
            <FilterBar />
        </div>
      );
   }
}
export default App;