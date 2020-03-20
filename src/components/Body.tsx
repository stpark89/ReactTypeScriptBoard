import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoardListComponent from "./BoardListComponent";
import BoardWriteComponent from "./BoardWriteComponent";
import BoardDetailComponent from "./BoardDetailComponent";
import BoardModifyComponent from "./BoardModifyComponent";
import BoardMyComponent from "./BoardMyComponent";

const Body: FunctionComponent = () => {
  /**
   *
   */

  return (
    <Router>
      <Route path="/" exact={true} component={BoardListComponent} />
      <Route path="/boardWrite" exact={true} component={BoardWriteComponent} />
      <Route path="/boardDetail/:id" component={BoardDetailComponent} />
      <Route path="/boardModify/:id" component={BoardModifyComponent} />
      <Route path="/selectMyBoard/:writeUserId" component={BoardMyComponent} />
    </Router>
  );
};

export default Body;
