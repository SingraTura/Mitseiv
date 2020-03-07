import { Localizacion } from './../class/localizacion';
import { Usuario } from '../class/usuario';

export class UsuarioBuilder {
  // tslint:disable-next-line:variable-name
  private _uid: string;
  // tslint:disable-next-line:variable-name
  private _nombre: string;
  // tslint:disable-next-line:variable-name
  private _contrasena: string;
  // tslint:disable-next-line:variable-name
  private _email: string;
  // tslint:disable-next-line:variable-name
  private _localizacion: Localizacion;
  constructor() {
    // uid: string, name: string, password: string, email: string, tittle: string, adress: string
  }
  public restart(): UsuarioBuilder {
    this._nombre = '';
    this._contrasena = '';
    this._email = '';
    this._localizacion = new Localizacion(0, 0);
    return this;
  }
  public build(): Usuario {
    return new Usuario(
      this.generateUID(),
      this._nombre,
      this._contrasena,
      this._email,
      this._localizacion
    );
  }
  public buildWithId(id: string): Usuario {
    return new Usuario(
      id,
      this._nombre,
      this._contrasena,
      this._email,
      this._localizacion
    );
  }
  name(name: string): UsuarioBuilder {
    this._nombre = name;
    return this;
  }
  password(password: string): UsuarioBuilder {
    this._contrasena = password;
    return this;
  }
  email(email: string): UsuarioBuilder {
    this._email = email;
    return this;
  }
  address(localizacion: Localizacion): UsuarioBuilder {
    this._localizacion = localizacion;
    return this;
  }
  private generateUID(): string {
    let d = new Date().getTime();
    // tslint:disable-next-line:only-arrow-functions
    const uid = 'xxxxxxxxxxxx4xxxyxxxxxxxxxxxxxxx'.replace(/[xy]/g, function(
      c
    ) {
      // tslint:disable-next-line:no-bitwise
      const r = (d + Math.random() * 16) % 16 | 0;
      d = Math.floor(d / 16);
      // tslint:disable-next-line:no-bitwise & triple-equal
      return (c === 'x' ? r : (r & 0x3) | 0x8).toString(16);
    });
    return uid;
  }
}
