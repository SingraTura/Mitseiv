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
  private _fechaCreacion: Date;
  // tslint:disable-next-line: variable-name
  private _fechaEjecucion: Date;
  // tslint:disable-next-line: variable-name
  private _visibilidad: boolean;
  // tslint:disable-next-line: variable-name
  private _descripcion: boolean;

  constructor(
    id,
    creador,
    miembros,
    chat,
    localizacion,
    fechaCreacion,
    fechaEjecucion,
    visibilidad,
    descripcion
  ) {
    this._id = id;
    this._creador = creador;
    this._miembros = miembros;
    this._chat = chat;
    this._localizacion = localizacion;
    this._fechaCreacion = fechaCreacion;
    this._fechaEjecucion = fechaEjecucion;
    this._visibilidad = visibilidad;
    this._descripcion = descripcion;
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
  public get fechaCreacion(): Date {
    return this._fechaCreacion;
  }
  public set fechaCreacion(value: Date) {
    this._fechaCreacion = value;
  }
  public get fechaEjecucion(): Date {
    return this._fechaEjecucion;
  }
  public set fechaEjecucion(value: Date) {
    this._fechaEjecucion = value;
  }
  public get visibilidad(): boolean {
    return this._visibilidad;
  }
  public set visibilidad(value: boolean) {
    this._visibilidad = value;
  }
  public get descripcion(): boolean {
    return this._descripcion;
  }
  public set descripcion(value: boolean) {
    this._descripcion = value;
  }
}
