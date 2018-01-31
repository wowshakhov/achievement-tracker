export class BaseModel {
  public id: string;

  constructor(id: string, params: any) {
    this.id = id;

    Object.keys(params).forEach(key => {
      this[key] = params[key];
    });
  }
}
