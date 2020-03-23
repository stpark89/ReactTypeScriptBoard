export interface ILoginVo {
  userId: string;
  pwd: string;
}

export default class LoginVo implements ILoginVo {
  public userId: string;
  public pwd: string;
}

export const create = ({ userId, pwd }: LoginVo) => {
  const next = new LoginVo();
  next.userId = userId;
  next.pwd = pwd;
  return next;
};
