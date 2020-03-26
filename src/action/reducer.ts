import BoardVo, { create as createBoardVo } from "../vo/BoardVo";
import {
  BOARD_ACTION,
  BOARD_ACTION_TYPE,
  LOGIN_ACTION,
  LOGIN_ACTION_TYPE
} from "./Action";
import LoginVo, { create as createLoginVo } from "../vo/LoginVo";
import { Switch } from "react-router";

export interface boardState {
  boardList: BoardVo[];
}

const initialBoardState: boardState = {
  boardList: [
    {
      id: 1,
      title: "공지사항 ( ADMIN ) ",
      info: "Admin 이 쓴 글입니다.",
      writeUserId: "ADMIN",
      writeDtm: new Date()
    }
  ]
};

// createReducer로 변경하게 되면 switch case 가 아닌
// [INCREASE]: state => ({ count: state.count + 1 }),  object map 형태로 변경 됨.

const BOARD_SWITCH = (
  state: boardState = initialBoardState,
  action: BOARD_ACTION
) => {
  switch (action.type) {
    case BOARD_ACTION_TYPE.SELECT_BOARD:
      console.log("SELECT_BOARD 호출");
      return state;
    case BOARD_ACTION_TYPE.WRITE_BOARD:
      console.log("WRITE_BOARD 호출");
      // return 되는 타입은 반드시 스테이트 와 동일한 타입이어야 한다. 즉 다음 스테이트를 만들어줬음.
      return { boardList: [...state.boardList, createBoardVo(action.payload)] };
    case BOARD_ACTION_TYPE.DETAIL_BOARD:
      console.log("DETAIL_BOARD 호출");
      return state;

    case BOARD_ACTION_TYPE.MODIFY_BOARD:
      console.log("MODIFY_BOARD 호출");
      return { boardList: action.payload };
    case BOARD_ACTION_TYPE.DELETE_MYBOARD:
      const tmpTotalArray: BoardVo[] = [...state.boardList];

      // 배열 2개가 있는데,  선택한 id 가 넘어오는 배열, 전체 담겨져있는 배열
      // 전체에서 선택한 배열 데이터를 빼야함.
      action.payload.map(v => {
        delete tmpTotalArray[v.id - 1];
      });
      return { boardList: tmpTotalArray };

    default:
      return state;
  }
};

export default BOARD_SWITCH;

export interface loginState {
  loginVo: LoginVo;
}

const initialLoginState: loginState = {
  loginVo: createLoginVo({ userId: "", pwd: "" })
};

export const LOGIN_SWITCH = (
  state: loginState = initialLoginState,
  action: LOGIN_ACTION
): loginState => {
  switch (action.type) {
    case LOGIN_ACTION_TYPE.LOGIN:
      return {
        loginVo: createLoginVo(action.payload)
      };
    default:
      return state;
  }
};
