import React from "react";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { useParams } from "react-router";
import BoardVo, { create as createBoardVo } from "../vo/BoardVo";
import { boardState } from "../action/reducer";
import { Link } from "react-router-dom";

interface paramInter {
  id: string;
}

const BoardDetailComponent = () => {
  // 전체 리스트
  const boardState = useSelector<RootState, BoardVo[]>(
    (state: RootState) => state.BOARD_SWITCH.boardList
  );

  // 넘어온 파라미터를 받음.
  const routeParams = useParams<paramInter>();

  // 넘어온 파라미터 값을 기준으로 조회
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

  return (
    <div className="container">
      <h4 className="mt-4 mb-4">게시글 상세보기</h4>

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
              <th>내용</th>
              <td colSpan={3}>{detailVo.info}</td>
            </tr>
          </tbody>
        </table>
        <Link to={"/"}>
          <button className="btn btn-info">목록</button>
        </Link>
        {detailVo ? (
          <Link to={`/boardModify/${detailVo.id}`}>
            <button className="btn btn-danger ml-4">수정</button>
          </Link>
        ) : (
          ""
        )}
      </div>
    </div>
  );
};

export default BoardDetailComponent;
