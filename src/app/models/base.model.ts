export class BaseModel {
  constructor(params: any) {
    Object.keys(params).forEach(key => {
      this[key] = key;
    });
  }
}
