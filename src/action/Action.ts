import { createAction } from "typesafe-actions";

import BoardVo from "../vo/BoardVo";

// Action Type
export enum BOARD_ACTION_TYPE {
  SELECT_BOARD = "board/SELECT_BOARD",
  WRITE_BOARD = "board/WRITE_BOARD",
  DETAIL_BOARD = "board/DETAIL_BOARD",
  MODIFY_BOARD = "board/MODIFY_BOARD"
}

interface selectBoardAction {
  type: BOARD_ACTION_TYPE.SELECT_BOARD;
  payload: BoardVo[];
}

interface writeBoardAction {
  type: BOARD_ACTION_TYPE.WRITE_BOARD;
  payload: BoardVo;
}

interface selectDetailBoardAction {
  type: BOARD_ACTION_TYPE.DETAIL_BOARD;
  payload: BoardVo;
}

interface modifyBoardAction {
  type: BOARD_ACTION_TYPE.MODIFY_BOARD;
  payload: BoardVo[];
}

export type BOARD_ACTION =
  | selectBoardAction
  | writeBoardAction
  | selectDetailBoardAction
  | modifyBoardAction;

// 조회
export const selectBoard = () =>
  createAction(BOARD_ACTION_TYPE.SELECT_BOARD)<BoardVo[]>();

// 등록
export const writeBoard = createAction(BOARD_ACTION_TYPE.WRITE_BOARD)<
  BoardVo
>();
// 상세
export const detailBoard = (detail: BoardVo) =>
  createAction(BOARD_ACTION_TYPE.DETAIL_BOARD)<BoardVo>();

// 수정
export const modifyBoard = createAction(BOARD_ACTION_TYPE.MODIFY_BOARD)<
  BoardVo[]
>();
