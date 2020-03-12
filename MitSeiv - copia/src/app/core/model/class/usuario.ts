export class Usuario {
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
  // tslint:disable-next-line: variable-name
  private _solicitudesQuedadas: Array<string>;
  // tslint:disable-next-line: variable-name
  private _quedadas: Array<string>;

  constructor(
    id: any,
    nombre: string,
    email: string,
    listaAmigos: Array<string>,
    solicitudesAmigos: Array<string>,
    localizacion: Map<string, number>,
    solicitudesQuedadas: Array<string>,
    quedadas: Array<string>
  ) {
    this._id = id;
    this._nombre = nombre;
    this._email = email;
    this._listaAmigos = listaAmigos;
    this._solicitudesAmigos = solicitudesAmigos;
    this._localizacion = localizacion;
    this._solicitudesQuedadas = solicitudesQuedadas;
    this._quedadas = quedadas;
  }
  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
  }
  public get nombre(): string {
    return this._nombre;
  }
  public set nombre(value: string) {
    this._nombre = value;
  }
  public get email(): string {
    return this._email;
  }
  public set email(value: string) {
    this._email = value;
  }
  public get listaAmigos(): Array<string> {
    return this._listaAmigos;
  }
  public set listaAmigos(value: Array<string>) {
    this._listaAmigos = value;
  }
  public get solicitudesAmigos(): Array<string> {
    return this._solicitudesAmigos;
  }
  public set solicitudesAmigos(value: Array<string>) {
    this._solicitudesAmigos = value;
  }
  public get localizacion(): Map<string, number> {
    return this._localizacion;
  }
  public set localizacion(value: Map<string, number>) {
    this._localizacion = value;
  }
  public get solicitudesQuedadas(): Array<string> {
    return this._solicitudesQuedadas;
  }
  public set solicitudesQuedadas(value: Array<string>) {
    this._solicitudesQuedadas = value;
  }
  public get quedadas(): Array<string> {
    return this._quedadas;
  }
  public set quedadas(value: Array<string>) {
    this._quedadas = value;
  }
}
