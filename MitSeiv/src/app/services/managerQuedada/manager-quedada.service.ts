import { MiConsola } from "./../../core/model/util/miConsola";
import { QuedadaBuilder } from "./../../core/model/builder/quedadaBuilder";
import { AngularFireAuth } from "@angular/fire/auth";
import { Quedada } from "./../../core/model/class/quedada";
import {
  AngularFirestoreCollection,
  AngularFirestore
} from "@angular/fire/firestore";
import { Observable } from "rxjs";
import { map, take } from "rxjs/operators";
import { Injectable } from "@angular/core";

interface Quedadable {
  id: string;
  creador: string;
  descripcion: string;
  miembros: Array<string>;
  chat: Array<string>;
  localizacion: Map<string, number>;
  fechaCreacion: Date;
  fechaEjecucion: Date;
  visibilidad: boolean;
}
@Injectable({
  providedIn: "root"
})
export class ManagerQuedadaService {
  private quedadasBase: Observable<Quedadable[]>;
  private quedadasColeccion: AngularFirestoreCollection<Quedadable>;
  private quedadas: Quedada[];
  constructor(private afs: AngularFirestore) {
    this.quedadasColeccion = this.afs.collection<Quedadable>("quedadas");
    this.quedadasBase = this.quedadasColeccion.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.quedadasBase.subscribe(
      (res: any) => (this.quedadas = res),
      (err: any) => console.log("Error al suscribir")
    );
  }

  public crearQuedada(
    usuarioActual: string,
    visibilidad: boolean,
    descripcion: string,
    fechaEjecucion: Date
  ) {
    const constructor = new QuedadaBuilder();
    const miembros = new Array<string>();
    miembros.push(usuarioActual);
    const quedada = constructor
      .restart()
      .creador(usuarioActual)
      .descripcion(descripcion)
      .fechaEjecucion(fechaEjecucion)
      .miembros(miembros)
      .visibilidad(visibilidad)
      .build();
    this.quedadasColeccion.doc(quedada.id).set({
      creador: quedada.creador,
      miembros: quedada.miembros,
      chat: quedada.chat,
      descripcion: quedada.descripcion,
      // localizacion: quedada.localizacion,
      fechaCreacion: quedada.fechaCreacion,
      fechaEjecucion: quedada.fechaEjecucion,
      visibilidad: quedada.visibilidad
    });
    return quedada.id;
  }
  public aceptarQuedada(idQuedada: string, emailAceptado: string) {
    const miembrosActualizados = this.obtenerListaMiembros(idQuedada);
    miembrosActualizados.push(emailAceptado);
    this.quedadasColeccion.doc(idQuedada).set({
      miembros: miembrosActualizados
    });
  }
  public enviarMensajeAlChat(
    idQuedada: string,
    mensajero: string,
    mensaje: string
  ) {
    const chatActualizado = this.obtenerChat(idQuedada);
    const mensajeFinal = mensajero + ": " + mensaje;
    chatActualizado.push(mensajeFinal);
    this.quedadasColeccion.doc(idQuedada).set({
      chat: chatActualizado
    });
  }
  public obtenerListaMiembros(idQuedada: string): Array<string> {
    let resultado: Array<string>;
    this.quedadas.forEach(quedada => {
      if (quedada.id === idQuedada) {
        resultado = quedada.miembros;
      }
    });
    return resultado;
  }
  public obtenerListaMisQuedadas(
    usuarioActual: string
  ): Promise<Array<Quedada>> {
    return new Promise(resolve => {
      const resultado = Array<Quedada>();
      this.quedadas.forEach(quedada => {
        this.obtenerListaMiembros(quedada.id).forEach(miembro => {
          if (miembro === usuarioActual) {
            resultado.push(quedada);
          }
        });
      });
      resolve(resultado);
    });
  }
  public obtenerQuedada(idQuedada: string): Quedada {
    let resultado: Quedada;
    this.quedadas.forEach(quedada => {
      if (quedada.id === idQuedada) {
        resultado = quedada;
      }
    });
    return resultado;
  }
  public obtenerChat(idQuedada: string): Array<string> {
    let resultado: Array<string>;
    this.quedadas.forEach(quedada => {
      if (quedada.id === idQuedada) {
        resultado = quedada.chat;
      }
    });
    return resultado;
  }
  public obtenerListaQuedadasPublicas(): Promise<Array<Quedada>> {
    return new Promise(resolve => {
      const resultado = Array<Quedada>();
      this.quedadas.forEach(quedada => {
        if (quedada.visibilidad) {
          resultado.push(quedada);
        }
      });
      resolve(resultado);
    });
  }
}
