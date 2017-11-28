import React from 'react';
import ReactDOM from 'react-dom';
import CelebrityJokes from './components/CelebrityJokes';
import FoodJokes from './components/FoodJokes';
import { Router, Route } from 'react-router';
import history from './history';

const Root = () => {
  return (
    <div className="container">
      <Router history={history}>
	  	<div>
        	<Route path="/" component={FoodJokes}/>
        	<Route path="/special" component={CelebrityJokes}/>
		</div>
      </Router>
    </div>
  )
}

ReactDOM.render(<Root />, document.getElementById('root'));
