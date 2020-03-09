export class Quedada {
  // tslint:disable-next-line: variable-name
  private _id: string;
  // tslint:disable-next-line: variable-name
  private _creador: string;
  // tslint:disable-next-line: variable-name
  private _miembros: Array<string>;
  // tslint:disable-next-line: variable-name
  private _chat: Array<string>;
  // tslint:disable-next-line: variable-name
  private _localizacion: Map<string, number>;
  // tslint:disable-next-line: variable-name
  private _fecha: Date;
  // tslint:disable-next-line: variable-name
  private _visibilidad: boolean;

  constructor(id, creador, miembros, chat, localizacion, fecha, visibilidad) {
    this._id = id;
    this._creador = creador;
    this._miembros = miembros;
    this._chat = chat;
    this._localizacion = localizacion;
    this._fecha = fecha;
    this._visibilidad = visibilidad;
  }
  public get id(): any {
    return this._id;
  }
  public set id(value: any) {
    this._id = value;
  }
  public get creador(): string {
    return this._creador;
  }
  public set creador(value: string) {
    this._creador = value;
  }
  public get miembros(): Array<string> {
    return this._miembros;
  }
  public set miembros(value: Array<string>) {
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
  public get visibilidad(): boolean {
    return this._visibilidad;
  }
  public set visibilidad(value: boolean) {
    this._visibilidad = value;
  }
}
