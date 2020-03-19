import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { RootState } from "../modules";
import BoardVo, { create as createBoardVo } from "../vo/BoardVo";
import { writeBoard } from "../action/Action";
import { Link, useHistory } from "react-router-dom";

const BoardWriteComponent = () => {
  const dispatch = useDispatch();

  const his = useHistory();

  // 제목
  const [title, setTitle] = useState<string>("");

  // 내용
  const [info, setInfo] = useState<string>("");

  const boardList = useSelector((state: RootState) => state.board.boardList);

  const onChangeTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
    setTitle(e.currentTarget.value);
  };

  const onChangeInfo = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setInfo(e.currentTarget.value);
  };

  // 게시글 등록
  const insertData = () => {
    const boardVo: BoardVo = boardList[boardList.length - 1];
    const newId: number = boardVo.id + 1;

    const insertVo: BoardVo = createBoardVo({
      id: newId,
      title: title,
      info: info,
      writeUserId: "stpark89",
      writeDtm: new Date()
    });

    dispatch(writeBoard(insertVo));
    his.push("/");
  };

  return (
    <div className="container mt-4 mb-4">
      <h2>게시글 등록</h2>
      <form>
        <div className="form-group">
          <label>제목:</label>
          <input
            type="text"
            className="form-control"
            placeholder="Enter title"
            name="title"
            onChange={onChangeTitle}
          />
        </div>
        <div className="form-group">
          <label>내용 :</label>
          <textarea
            className="form-control"
            rows={10}
            onChange={onChangeInfo}
          ></textarea>
        </div>

        <Link to={"/"}>
          <button className="btn btn-info">목록</button>
        </Link>
        <button
          type="button"
          className="btn btn-primary ml-2"
          onClick={insertData}
        >
          등록
        </button>
      </form>
    </div>
  );
};

export default BoardWriteComponent;
