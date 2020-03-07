import { Localizacion } from './localizacion';
export class Usuario {
  // tslint:disable-next-line:variable-name
  private _id: string;
  // tslint:disable-next-line:variable-name
  private _nombre: string;
  // tslint:disable-next-line:variable-name
  private _contrasena: string;
  // tslint:disable-next-line:variable-name
  private _email: string;
  // tslint:disable-next-line:variable-name
  private _location: Localizacion;

  constructor(
    id: string,
    nombre: string,
    contrasena: string,
    email: string,
    location: Localizacion
  ) {
    this._id = id;
    this._nombre = nombre;
    this._contrasena = contrasena;
    this._email = email;
    this._location = location;
  }

  public get id(): string {
    return this._id;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public get contrasena(): string {
    return this._contrasena;
  }

  public get email(): string {
    return this._email;
  }

  public get location(): Localizacion {
    return this._location;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public set id(value: string) {
    this._id = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public set nombre(value: string) {
    this._nombre = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public set contrasena(value: string) {
    this.contrasena = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public set email(value: string) {
    this._email = value;
  }
  // tslint:disable-next-line:adjacent-overload-signatures
  public set location(value: Localizacion) {
    this._location = value;
  }
}
