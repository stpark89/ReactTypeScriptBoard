import { combineReducers } from "redux";
import BOARD_SWITCH, { LOGIN_SWITCH } from "../action/reducer";

// RootReducer 생성

// 내가 만들었던  action swich 하는 Function
const rootReducer = combineReducers({ BOARD_SWITCH, LOGIN_SWITCH });

export default rootReducer;

/**
 * 루트 리듀서를 만들 때에는 일반 JavaScript 환경에서 할 때랑 방법이 동일한데,
 * 주의하셔야 되는 부분은 RootState 라는 타입을 만들어서 내보내주어야 한다는 것 입니다.
 * 이 타입은 추후 우리가 컨테이너 컴포넌트를 만들게 될 때 스토어에서 관리하고 있는 상태를 조회하기 위해서
 * useSelector를 사용 할 때 필요로 합니다.
 */
export type RootState = ReturnType<typeof rootReducer>;
