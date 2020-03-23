import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import { boardState } from "../action/reducer";
import { useParams, useHistory } from "react-router";
import BoardVo, { create as createBoardVo } from "../vo/BoardVo";
import { Link } from "react-router-dom";
import { modifyBoard } from "../action/Action";

interface paramInter {
  id: string;
}
const BoardModifyComponent = () => {
  const dispatch = useDispatch();
  const his = useHistory();

  // 전체 리스트
  const boardState = useSelector<RootState, BoardVo[]>(
    (state: RootState) => state.BOARD_SWITCH.boardList
  );

  // 넘어온 파라미터를 받음.
  const routeParams = useParams<paramInter>();
  const detailVo =
    boardState.find(
      e => e.id === Number.parseInt(routeParams.id, 10) // 두번째 인자는 10진법
    ) ||
    createBoardVo({
      id: 0,
      title: "없음",
      info: "없음",
      writeUserId: "없음",
      writeDtm: new Date()
    });

  // 내용 state 값
  const [boardInfo, setBoardInfo] = useState<string>(detailVo.info);
  const [boardTitle, setBoardTitle] = useState<string>(detailVo.title);

  // 제목 수정
  const changeBoardTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setBoardTitle(e.currentTarget.value);
  };

  // 내용 수정
  const changeBoardInfo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setBoardInfo(e.currentTarget.value);
  };

  const modifySave = () => {
    const modifyBoardVo = createBoardVo({
      id: detailVo.id,
      title: boardTitle,
      info: boardInfo,
      writeUserId: detailVo.writeUserId,
      writeDtm: new Date()
    });

    const index = boardState.findIndex(e => e.id === detailVo.id);
    const modifyBoardList: BoardVo[] = boardState;
    modifyBoardList[index] = modifyBoardVo;
    dispatch(modifyBoard(modifyBoardList));
    his.push("/");
  };

  return (
    <div className="container">
      <h4 className="mt-4 mb-4">게시글 수정</h4>

      <div className="well">
        <table className="table table-striped">
          <thead />
          <tbody>
            <tr>
              <th>글번호</th>
              <td colSpan={3}>{detailVo.id}</td>
            </tr>
            <tr>
              <th>작성자</th>
              <td>{detailVo.writeUserId}</td>
              <th>작성일</th>
              <td>{detailVo.writeDtm.toString()}</td>
            </tr>
            <tr>
              <th>제목</th>
              <td colSpan={3}>
                <input
                  type="text"
                  className="form-control"
                  defaultValue={detailVo.title}
                  onChange={changeBoardTitle}
                />
              </td>
            </tr>
            <tr>
              <th>내용</th>
              <td colSpan={3}>
                <textarea
                  className="form-control"
                  rows={10}
                  onChange={changeBoardInfo}
                  defaultValue={detailVo.info} // 이게 필요함.
                ></textarea>
              </td>
            </tr>
          </tbody>
        </table>
        <Link to={"/"}>
          <button className="btn btn-info">목록</button>
        </Link>
        {detailVo ? (
          <button className="btn btn-danger ml-2" onClick={modifySave}>
            저장
          </button>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BoardModifyComponent;
