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
  private _fecha: Date;
   // tslint:disable-next-line: variable-name
   private _visibilidad: boolean;

  public restart(): QuedadaBuilder {
    this._miembros = new Array<string>();
    this._chat = new Array<string>();
    this._localizacion = new Map<string, number>();
    this._fecha = new Date(Date.now());
    this._visibilidad = false;
    return this;
  }
  public build(): Quedada {
    return new Quedada(
         Aleatoriador.generar(),
        this._creador ,
        this._miembros ,
        this._chat ,
        this._localizacion ,
        this._fecha,
        this._visibilidad
    );
  }
  public buildWithId(id: string): Quedada {
    return new Quedada(
         id,
        this._creador ,
        this._miembros ,
        this._chat ,
        this._localizacion ,
        this._fecha,
        this._visibilidad
    );
  }

  creador(creador: string): QuedadaBuilder {
    this._creador = creador;
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
  fecha(fecha: Date): QuedadaBuilder {
    this._fecha = fecha;
    return this;
  }
}
