import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import HomePage from "./pages/HomePage";
import MyPujaBookings from "./pages/MyPujaBookings";
import PoojaList from "./pages/PoojaList";
import PoojaDetailPage from "./pages/PoojaDetailPage";
import PackageCardPage from "./components/PackageCardPage";

const App = () => {
  return (
    <div>
      <Router>
        <Switch>
          <Route path="/" exact component={HomePage} />
          <Route path="/my-puja-bookings" component={MyPujaBookings} />
          <Route path="/pooja-list" component={PoojaList} />
          <Route path="/pooja-detail/:id" component={PoojaDetailPage} />
          {/* <Route path="/package-card-page" element={<PackageCardPage />} /> */}
          {/* <Route path="/packages" element={<PackageCardPage />} /> */}
        </Switch>
      </Router>
    </div>
  );
};

export default App;
