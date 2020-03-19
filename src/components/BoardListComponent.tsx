import React, { useState, useEffect } from "react";
import BoardVo, { create as createBoardList } from "../vo/BoardVo";
import { useSelector } from "react-redux";
import { RootState } from "../modules";
import { useHistory } from "react-router";

//{boardList.map(v => <td>{v.id}</td><td>{v.title}</td><td>{v.info}</td><td>{v.writeUserId}</td><td>{v.writeDtm}</td>)}

/**
{todoItemList.map(v => (
    <TodoItem
      todoItem={v}
      key={v.id}
      detailInfo={detailInfo}
      complete={complete}
    />
  ))}

   */
const BoardListComponent = () => {
  const boardList = useSelector((state: RootState) => state.board.boardList);
  const router = useHistory();

  const locationButton = () => {
    // eslint-disable-next-line no-restricted-globals
    router.push("/boardWrite");
  };

  // 게시글 상세보기
  const detailBoardView = (vo: BoardVo) => {
    router.push(`/boardDetail/${vo.id}`);
  };

  return (
    <div className="row mt-4">
      <div className="col-sm-12">
        <h1 className="text-center mb-4">Todo 게시판</h1>
        <hr />
        <table className="table table-bordered">
          <thead>
            <tr>
              <th>No</th>
              <th>제목</th>
              <th>내용</th>
              <th>작성자</th>
              <th>작성일</th>
            </tr>
          </thead>
          <tbody>
            {boardList.length > 0 ? (
              boardList.map(v => (
                <tr onClick={() => detailBoardView(v)} key={v.id}>
                  <td>{v.id}</td>
                  <td>{v.title}</td>
                  <td>{v.info}</td>
                  <td>{v.writeUserId}</td>
                  <td>{v.writeDtm?.toString()}</td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan={5}>없음</td>
              </tr>
            )}
          </tbody>
        </table>
        <button
          type="button"
          className="btn btn-primary"
          onClick={locationButton}
        >
          등록
        </button>
      </div>
    </div>
  );
};

export default BoardListComponent;
