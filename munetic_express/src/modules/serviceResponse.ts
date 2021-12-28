export class ServiceResponse {
  public resData: {
    msg: string;
    data: object;
  };

  constructor(
    public readonly status: number,
    data: string | object | [string, object],
  ) {
    if (typeof data === 'string') {
      this.resData = { msg: data, data: {} };
    } else if (typeof data === 'object') {
      this.resData = { msg: 'request success', data };
    } else {
      this.resData = { msg: data[0], data: data[1] };
    }
  }
}