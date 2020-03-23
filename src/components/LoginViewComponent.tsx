import React, { useState } from "react";
import LoginVo, { create as createLoginVo } from "../vo/LoginVo";
import { useDispatch } from "react-redux";
import { useHistory } from "react-router";
import { login } from "../action/Action";

const LoginViewComponent = () => {
  const dispatch = useDispatch();
  const his = useHistory();
  // id
  const [stateUserId, setUserId] = useState<string>("");
  // 비밀번호
  const [statePwd, setUserPwd] = useState<string>("");

  // id 셋팅
  const userIdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserId(e.currentTarget.value);
  };

  // 비밀번호 셋팅
  const userPwdChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setUserPwd(e.currentTarget.value);
  };

  // 로그인 버튼 클릭시
  const loginSubmit = () => {
    const requestVo: LoginVo = createLoginVo({
      userId: stateUserId,
      pwd: statePwd
    });

    console.log("최종 로그인하는 정보 확인 ---");
    console.log(requestVo);
    console.log("최종 로그인하는 정보 확인 ---");

    dispatch(login(requestVo));
    his.push("/");
  };

  return (
    <div className="container">
      <form>
        <div className="form-group">
          <label htmlFor="email">아이디 :</label>
          <input
            type="email"
            className="form-control"
            placeholder="Enter email"
            id="email"
            onChange={userIdChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="pwd">비밀번호 :</label>
          <input
            type="password"
            className="form-control"
            placeholder="Enter password"
            id="pwd"
            onChange={userPwdChange}
          />
        </div>
        <button type="button" className="btn btn-primary" onClick={loginSubmit}>
          로그인
        </button>
        <button type="button" className="btn btn-info ml-4">
          회원가입
        </button>
      </form>
    </div>
  );
};

export default LoginViewComponent;
