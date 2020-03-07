export class Localizacion {
  // tslint:disable-next-line: variable-name
  private _latitud: number;
  // tslint:disable-next-line: variable-name
  private _longitud: number;

  constructor(latitude: number, longitude: number) {
    this._latitud = latitude;
    this._longitud = longitude;
  }

  public get latitud(): number {
    return this._latitud;
  }
  public get longitud(): number {
    return this._longitud;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public set latitud(value: number) {
    this._latitud = value;
  }
  // tslint:disable-next-line: adjacent-overload-signatures
  public set longitud(value: number) {
    this._longitud = value;
  }
}
