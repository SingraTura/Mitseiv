import { Aleatoriador } from './../util/aleatoriador';
import { QuedadaPrivada } from './../class/quedadaPrivada';
import { Usuario } from '../class/usuario';

export class QuedadaPrivadaBuilder {
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

  public restart(): QuedadaPrivadaBuilder {
    this._miembros = new Array<Usuario>();
    this._chat = new Array<string>();
    this._localizacion = new Map<string, number>();
    this._fecha = new Date(Date.now());
    return this;
  }
  public build(): QuedadaPrivada {
    return new QuedadaPrivada(
         Aleatoriador.generar(),
        this._creador ,
        this._miembros ,
        this._chat ,
        this._localizacion ,
        this._fecha
    );
  }
  public buildWithId(id: string): QuedadaPrivada {
    return new QuedadaPrivada(
         id,
        this._creador ,
        this._miembros ,
        this._chat ,
        this._localizacion ,
        this._fecha
    );
  }

  listaAmigos(creador: Usuario): QuedadaPrivadaBuilder {
    this._creador = creador;
    return this;
  }
  miembros(miembros: Array<Usuario>): QuedadaPrivadaBuilder {
    this._miembros = miembros;
    return this;
  }
  chat(chat: Array<string>): QuedadaPrivadaBuilder {
    this._chat = chat;
    return this;
  }
  localizacion(localizacion: Map<string, number>): QuedadaPrivadaBuilder {
    this._localizacion = localizacion;
    return this;
  }
  fecha(fecha: Date): QuedadaPrivadaBuilder {
    this._fecha = fecha;
    return this;
  }
}
