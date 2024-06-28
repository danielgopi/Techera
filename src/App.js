import {Switch, Route, Redirect} from 'react-router-dom'

import CourseDetails from './components/CourseDetails'
import Home from './components/Home'
import NotFound from './components/NotFound'
import './App.css'

// Replace your code here
const App = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route exact path="/courses/:id" component={CourseDetails} />
    <Route component={NotFound} />
    <Redirect to="/not-found" />
  </Switch>
)

export default App
