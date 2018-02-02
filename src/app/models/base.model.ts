export class BaseModel {
  public id: string;

  constructor(params: any) {
    Object.keys(params).forEach(key => {
      this[key] = params[key];
    });
  }
}
