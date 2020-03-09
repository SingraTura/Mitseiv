import { Usuario } from 'src/app/core/model/class/usuario';
export class QuedadaPrivada {
  // tslint:disable-next-line: variable-name
  private _id: string;
  // tslint:disable-next-line: variable-name
  private _creador: Usuario;
  // tslint:disable-next-line: variable-name
  private _miembros: Array<Usuario>;
  // tslint:disable-next-line: variable-name
  private _chat: Array<string>;
  // tslint:disable-next-line: variable-name
  private _localizacion: Map<string, number>;
  // tslint:disable-next-line: variable-name
  private _fecha: Date;

  constructor(id, creador, miembros, chat, localizacion, fecha) {
    this._id = id;
    this._creador = creador;
    this._miembros = miembros;
    this._chat = chat;
    this._localizacion = localizacion;
    this._fecha = fecha;
  }
  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
  }
  public get creador(): Usuario {
    return this._creador;
  }
  public set creador(value: Usuario) {
    this._creador = value;
  }
  public get miembros(): Array<Usuario> {
    return this._miembros;
  }
  public set miembros(value: Array<Usuario>) {
    this._miembros = value;
  }
  public get chat(): Array<string> {
    return this._chat;
  }
  public set chat(value: Array<string>) {
    this._chat = value;
  }
  public get localizacion(): Map<string, number> {
    return this._localizacion;
  }
  public set localizacion(value: Map<string, number>) {
    this._localizacion = value;
  }
  public get fecha(): Date {
    return this._fecha;
  }
  public set fecha(value: Date) {
    this._fecha = value;
  }
}
