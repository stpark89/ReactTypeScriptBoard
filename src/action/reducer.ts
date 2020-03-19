import BoardVo, { create as createBoardVo } from "../vo/BoardVo";
import { BOARD_ACTION, BOARD_ACTION_TYPE } from "./Action";

export interface boardState {
  boardList: BoardVo[];
}

const initialBoardState: boardState = {
  boardList: [
    {
      id: 1,
      title: "제목입니다.",
      info: "내용이 들어와요",
      writeUserId: "stpark89",
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
      console.log(state.boardList);
      console.log(action.payload);
      console.log("데이터확인 END ");
      return { boardList: action.payload };

    default:
      return state;
  }
};

export default BOARD_SWITCH;
