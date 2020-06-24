import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Home from './components/shared/Home';
import About from './components/shared/About';
import NoMatch from './components/shared/NoMatch';
import Navbar from './components/shared/Navbar';
import Posts from './components/post/Posts';
import PostShow from './components/post/PostShow';
const App = () => (
  <>
    <Navbar />
    <Switch>
      <Route exact path='/' component={Home} />
      <Route exact path='/about' component={About} />
      <Route exact path='/posts' component={Posts} />
      <Route expact path='/posts/:id' component={PostShow} />
      <Route component={NoMatch} />
    </Switch>
    {/* <Footer /> */}
  </>
)
export default App;