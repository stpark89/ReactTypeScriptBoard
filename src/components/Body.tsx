import React, { FunctionComponent } from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import BoardListComponent from "./BoardListComponent";
import BoardWriteComponent from "./BoardWriteComponent";
import BoardDetailComponent from "./BoardDetailComponent";
import BoardModifyComponent from "./BoardModifyComponent";
import BoardMyComponent from "./BoardMyComponent";
import LoginViewComponent from "./LoginViewComponent";

const Body: FunctionComponent = () => {
  /**
   *  /             - 게시글조회
   *  loginView     - 로그인
   *  boardWrite    - 글쓰기
   *  boardDetail   - 게시글 상세
   *  boardModify   - 게시글 수정
   *  selectMyBoard - 내가 쓴글
   */

  return (
    <Router>
      <Route path="/" exact={true} component={BoardListComponent} />
      <Route path="/loginView" exact={true} component={LoginViewComponent} />
      <Route path="/boardWrite" exact={true} component={BoardWriteComponent} />
      <Route path="/boardDetail/:id" component={BoardDetailComponent} />
      <Route path="/boardModify/:id" component={BoardModifyComponent} />
      <Route path="/selectMyBoard/:writeUserId" component={BoardMyComponent} />
    </Router>
  );
};

export default Body;
