import React from 'react';
import { BrowserRouter as Router, Route ,Switch} from 'react-router-dom';
import HomePage from './pages/HomePage';
import MyPujaBookings from './pages/MyPujaBookings';
import PoojaList from './pages/PoojaList';
import PoojaDetailPage from './pages/PoojaDetailPage';


const App = () => {
  return (
    <div>

    <Router>
    <Switch>
  
      
        <Route path="/" exact component={HomePage} />
        <Route path="/my-puja-bookings" component={MyPujaBookings} />
        <Route path="/pooja-list" component={PoojaList} />
        <Route path="/pooja-detail/:id" component={PoojaDetailPage} />
     
    </Switch>
    </Router>
    </div>
  );
};

export default App;
