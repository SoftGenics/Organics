import React from "react";
import { Switch, Route } from "react-router-dom";
import HeadlinesOne from "../pages/Headlines/Headlines0ne/HeadlinesOne";

import LayoutCover from "../pages/layoutCover";
import MessageOfTheDay from "../pages/MessageOfTheDay/MessageOfTheDay";
import AddBycencern from "../pages/Add_by_cencern/add_by_cencern";
import ViewConcernProduct from "../pages/ViewConcernProduct/ViewConcernProduct"



const RouteHandle = () => {
  return (
  <div>
    
    <Switch>
      
       <LayoutCover>
            <Route exact strict path="/message-upload-for-first-headlines" component={HeadlinesOne} />
           <Route exact strict path="/AddBycencern" component={AddBycencern}/>
            <Route exact strict path="/MessageOfTheDay" component={MessageOfTheDay} />
            <Route exact strict path="/ViewConcernProduct" component={ViewConcernProduct}/>
      </LayoutCover>
     </Switch>
     </div> );
};

export default RouteHandle;
