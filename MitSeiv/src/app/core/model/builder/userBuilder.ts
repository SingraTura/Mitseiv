import { Usuario } from '../class/usuario';

export class UsuarioBuilder {
  // tslint:disable-next-line: variable-name
  private _id: any;
  // tslint:disable-next-line: variable-name
  private _nombre: string;
  // tslint:disable-next-line: variable-name
  private _email: string;
  // tslint:disable-next-line: variable-name
  private _listaAmigos: Array<string>;
  // tslint:disable-next-line: variable-name
  private _solicitudesAmigos: Array<string>;
  // tslint:disable-next-line: variable-name
  private _localizacion: Map<string, number>;

  constructor() {
    // uid: string, name: string, password: string, email: string, tittle: string, adress: string
  }
  public restart(): UsuarioBuilder {
    this._nombre = '';
    this._email = '';
    this._listaAmigos = new Array<string>();
    this._localizacion = new Map<string, number>();
    return this;
  }
  public build(): Usuario {
    return new Usuario(
      this.generateUID(),
      this._nombre,
      this._email,
      this._listaAmigos,
      this._solicitudesAmigos,
      this._localizacion
    );
  }
  public buildWithId(id: string): Usuario {
    return new Usuario(
      id,
      this._nombre,
      this._email,
      this._listaAmigos,
      this._solicitudesAmigos,
      this._localizacion
    );
  }
  name(name: string): UsuarioBuilder {
    this._nombre = name;
    return this;
  }
  email(email: string): UsuarioBuilder {
    this._email = email;
    return this;
  }
  listaAmigos(listaAmigos: Array<string>): UsuarioBuilder {
    this._listaAmigos = listaAmigos;
    return this;
  }
  solicitudesAmigos(solicitudesAmigos: Array<string>): UsuarioBuilder {
    this._solicitudesAmigos = solicitudesAmigos;
    return this;
  }
  localizacion(localizacion: Map<string, number>): UsuarioBuilder {
    this._localizacion = localizacion;
    return this;
  }
  /* Esto es únicamente para los mock los id los genera la base de datos */
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
