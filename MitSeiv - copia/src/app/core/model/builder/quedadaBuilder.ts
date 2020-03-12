import { Aleatoriador } from '../util/aleatoriador';
import { Quedada } from '../class/quedada';

export class QuedadaBuilder {
  
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
  private _descripcion: string;

  public restart(): QuedadaBuilder {
    this._miembros = new Array<string>();
    this._chat = new Array<string>();
    this._localizacion = new Map<string, number>();
    this._fechaCreacion = new Date(Date.now());
    this._fechaEjecucion = new Date(Date.now());
    this._visibilidad = false;
    this._descripcion = '';
    return this;
  }
  public build(): Quedada {
    return new Quedada(
         Aleatoriador.generar(),
        this._creador ,
        this._miembros ,
        this._chat ,
        this._localizacion ,
        this._fechaCreacion ,
        this._fechaEjecucion ,
        this._visibilidad,
        this._descripcion
    );
  }
  public buildWithId(id: string): Quedada {
    return new Quedada(
         id,
        this._creador ,
        this._miembros ,
        this._chat ,
        this._localizacion ,
        this._fechaCreacion ,
        this._fechaEjecucion ,
        this._visibilidad,
        this._descripcion
    );
  }

  creador(creador: string): QuedadaBuilder {
    this._creador = creador;
    return this;
  }
  descripcion(descripcion: string): QuedadaBuilder {
    this._descripcion = descripcion;
    return this;
  }
  miembros(miembros: Array<string>): QuedadaBuilder {
    this._miembros = miembros;
    return this;
  }
  chat(chat: Array<string>): QuedadaBuilder {
    this._chat = chat;
    return this;
  }
  localizacion(localizacion: Map<string, number>): QuedadaBuilder {
    this._localizacion = localizacion;
    return this;
  }
  visibilidad(visibilidad: boolean): QuedadaBuilder {
    this._visibilidad = visibilidad;
    return this;
  }
  fechaCreacion(fechaCreacion: Date): QuedadaBuilder {
    this._fechaCreacion = fechaCreacion;
    return this;
  }
  fechaEjecucion(fechaEjecucion: Date): QuedadaBuilder {
    this._fechaEjecucion = fechaEjecucion;
    return this;
  }
}
