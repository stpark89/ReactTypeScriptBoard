export interface IBoardVo {
  id: number;
  title: string;
  info: string;
  writeUserId: string;
  writeDtm: Date;
}

export default class BoardVo implements IBoardVo {
  public id: number;
  public title: string;
  public info: string;
  public writeUserId: string;
  public writeDtm: Date;
}

export const create = ({ id, title, info, writeUserId, writeDtm }: BoardVo) => {
  const next = new BoardVo();
  next.id = id;
  next.title = title;
  next.info = info;
  next.writeUserId = writeUserId;
  next.writeDtm = writeDtm;
  return next;
};
