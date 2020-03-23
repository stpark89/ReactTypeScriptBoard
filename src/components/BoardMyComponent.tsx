import React, { useState } from "react";
import { useParams } from "react-router";
import { RootState } from "../modules";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import BoardVo from "../vo/BoardVo";
import { deleteMyBoard } from "../action/Action";

interface paramInter {
  writeUserId: string;
}

const BoardMyComponent = () => {
  const dispatch = useDispatch();
  const [deleteArray, setDeleteArray] = useState<BoardVo[]>([]);

  const routerParam = useParams<paramInter>();
  /**
  const myBoardList = useSelector(
    (state: RootState) => state.board.boardList
  ).filter(v => v.writeUserId === routerParam.writeUserId);

  // 체크박스 클릭시, 스테이트에 담아놓고 삭제 버튼 누르면 전달
  const checkDeleteBox = (e: React.ChangeEvent<HTMLInputElement>) => {
    const chekedId: number = Number.parseInt(e.currentTarget.value);
    const filterArray: BoardVo[] = myBoardList.filter(v => v.id === chekedId);
    setDeleteArray([...deleteArray, filterArray[0]]);
  };
   */
  const deleteMySubmit = () => {
    console.log("삭제버튼 눌렀을때 ---");
    console.log(deleteArray);

    dispatch(deleteMyBoard(deleteArray));
  };

  return (
    <div className="container">
      <h4 className="mt-4 mb-4">내가 쓴 글 보기 </h4>

      <table className="table table-bordered">
        <thead>
          <tr>
            <th />
            <th>No</th>
            <th>제목</th>
            <th>내용</th>
            <th>작성자</th>
            <th>작성일</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td colSpan={6}>굿</td>
          </tr>
          ) : (
          <tr>
            <td colSpan={6}>등록된 글이 없습니다.</td>
          </tr>
          )}
        </tbody>
      </table>

      <button className="btn btn-danger" onClick={deleteMySubmit}>
        삭제
      </button>
      <Link to={"/"}>
        <button className="btn btn-info ml-4">목록</button>
      </Link>
    </div>
  );
};

export default BoardMyComponent;

/**
 *  {myBoardList.length > 0 ? (
            myBoardList.map(v => (
              <tr key={v.id}>
                <td>
                  <input
                    type="checkbox"
                    className="form-control"
                    defaultValue={v.id}
                    onChange={checkDeleteBox}
                  ></input>
                </td>
                <td>{v.id}</td>
                <td>{v.title}</td>
                <td>{v.info}</td>
                <td>{v.writeUserId}</td>
                <td>{v.writeDtm.toString()}</td>
              </tr>
            ))
 */
