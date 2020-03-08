import { Injectable } from '@angular/core';
import {
  AngularFirestoreCollection,
  AngularFirestore
} from '@angular/fire/firestore';
import { map, take } from 'rxjs/operators';
import { AngularFireAuth } from '@angular/fire/auth';
import { Observable } from 'rxjs';
import { Usuario } from 'src/app/core/model/class/usuario';
import { UsuarioBuilder } from 'src/app/core/model/builder/userBuilder';
import { BaseDeDatos } from 'src/app/interfaceServicios/baseDeDatos';

interface Usuariable {
  id?: any;
  nombre: string;
  contrasena: string;
  email: string;
  listaAmigos: Array<string>;
  solicitudesAmigos: Array<string>;
  localizacion: Map<string, number>;
}
@Injectable({
  providedIn: 'root'
})
export class ManagerUsuarioService implements BaseDeDatos {
  private usuarioActivo: Usuario;
  private usuariosBase: Observable<Usuariable[]>;
  private usuariosColeccion: AngularFirestoreCollection<Usuariable>;
  private usuarios: Usuario[];
  private login: boolean;

  constructor(
    private afs: AngularFirestore,
    private firebaseAuth: AngularFireAuth
  ) {
    this.login = false;
    this.usuariosColeccion = this.afs.collection<Usuariable>('usuarios');
    this.usuariosBase = this.usuariosColeccion.snapshotChanges().pipe(
      map(actions => {
        return actions.map(a => {
          const data = a.payload.doc.data();
          const id = a.payload.doc.id;
          return { id, ...data };
        });
      })
    );
    this.usuariosBase.subscribe(
      (res: any) => (this.usuarios = res),
      (err: any) =>
        console.log('It is a error unexpected from firebase suscribe')
    );
  }
  public registrar(email: string, contrasena: string): Promise<boolean> {
    return new Promise(response => {
      this.firebaseAuth.auth
        .createUserWithEmailAndPassword(email, contrasena)
        .then(() => {
          const usuarioBuilder = new UsuarioBuilder();
          const usuario = usuarioBuilder
            .restart()
            .email(email)
            .buildWithId(this.firebaseAuth.auth.currentUser.uid);
          this.usuariosColeccion
            .doc(usuario.id)
            .set({
              email: usuario.email
            })
            .then(() => {
              this.usuarioActivo = usuario;
              response(true);
            });
        })
        .catch(() => {
          response(false);
        });
    });
  }
  public iniciarSesion(email: string, contrasena: string): Promise<boolean> {
    return new Promise(response => {
      this.firebaseAuth.auth
        .signInWithEmailAndPassword(email, contrasena)
        .then(() => {
          this.usuarioActivo = this.capturarUsuario(
            this.capturarIdUsuarioActivo()
          );
          this.login = true;
          response(true);
        })
        .catch(() => {
          response(false);
        });
    });
  }
  public cerrarSesion(): Promise<boolean> {
    return new Promise(response => {
      this.firebaseAuth.auth
        .signOut()
        .then(() => {
          this.login = false;
          response(true);
        })
        .catch(() => {
          response(false);
        });
    });
  }
  public isLogin(): boolean {
    return this.login;
  }
  public capturarIdUsuarioActivo(): string {
    return this.firebaseAuth.auth.currentUser.uid;
  }
  public capturarUsuario(uid: string): Usuario {
    let userR: Usuario;
    for (const user of this.usuarios) {
      if (user.id === uid) {
        userR = user;
      }
    }
    return userR;
  }
  public capturarUsuarioPorCorreo(email: string): Promise<Usuario> {
    return new Promise((resolve, reject) => {
      let userR: Usuario;
      for (const user of this.usuarios) {
        if (user.email === email) {
          userR = user;
          return resolve(userR);
        }
      }
      reject();
    });
  }
  public delete() {
    // this.userColection.doc(id).delete();
  }
  public actualizarUsuario(nombre: string): Promise<boolean> {
    return new Promise(response => {
      this.usuariosColeccion
        .doc(this.usuarioActivo.id)
        .update({
          name: nombre
        })
        .then(() => {
          response(true);
        })
        .catch(() => {
          response(false);
        });
    });
  }
  public rechazarSolicitud(email: string): Promise<boolean> {
    return this.capturarUsuarioPorCorreo(email).then((usuario) => {
      return this.actualizarSolicitud(usuario);
    });
  }
  public aceptarSolicitud(email: string): Promise<boolean> {
    return this.capturarUsuarioPorCorreo(email).then((usuario) => {
      this.usuarioActivo.listaAmigos.push(email);
      usuario.listaAmigos.push(this.usuarioActivo.email);
      return this.actualizarSolicitud(usuario);
    });
  }
  // REFACTORIZADO DUDOSO
  public actualizarSolicitud(usuario): Promise<boolean> {
    return new Promise((resolve) => {
      let list;
      list = this.eliminarSolicitud(this.usuarioActivo.solicitudesAmigos, usuario.email);
      this.actualizarAmigos(this.usuarioActivo.id, this.usuarioActivo.listaAmigos, list);
      list = this.eliminarSolicitud(usuario.solicitudesAmigos, this.usuarioActivo.email);
      this.actualizarAmigos(usuario.id, usuario.listaAmigos, list);
      resolve(true);
    });
  }
  // REFACTORIZADO
  private actualizarAmigos(id, listaAmigosA, listaSolicitudes) {
    if(listaAmigosA === undefined) {
      listaAmigosA = new Array<string>();
    }
    this.usuariosColeccion.doc(id).update({
      listaAmigos: listaAmigosA,
      solicitudesAmigos: listaSolicitudes
    });
  }
  // REFACTORIZADO
  private eliminarSolicitud(solicitudesAmigos: string[], email: string) {
    const solicitudesAmigosActualizadas = new Array<string>();
    solicitudesAmigos.forEach(solicitud => {
      if (!solicitud.includes(email)) {
        solicitudesAmigosActualizadas.push(solicitud);
      }
    });
    return solicitudesAmigosActualizadas;
  }
  // REFACTORIZADO DUDOSO
  public enviarSolicitud(email: string): Promise<boolean> {
    return this.capturarUsuarioPorCorreo(email)
      .then(usuarioSolicitado => {
        if (usuarioSolicitado.solicitudesAmigos === undefined) {
          usuarioSolicitado.solicitudesAmigos = new Array<string>();
        }
        usuarioSolicitado.solicitudesAmigos.push(this.usuarioActivo.email);
        const solicitudesAmigosActualizadas =
          usuarioSolicitado.solicitudesAmigos;
        this.usuariosColeccion.doc(usuarioSolicitado.id).update({
          solicitudesAmigos: solicitudesAmigosActualizadas
        });
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  // REFACTORIZADO
  public actualizarContrasena(contrasena: string): Promise<boolean|string> {
    return new Promise((response, reject) => {
      this.firebaseAuth.auth.currentUser
        .updatePassword(contrasena)
        .then(() => {
          response(true);
        })
        .catch(() => {
          reject('Error al actualizar contraseña');
        });
    });
  }
  // REFACTORIZADO
  public comprobarListaAmigos(email: string): Promise<string> {
    return new Promise((response, reject) => {
      this.capturarUsuarioPorCorreo(email).then(user => {
        let found = false;
        let mensaje: string;
        const solicitudesAmigos = user.solicitudesAmigos;
        const solicitudesAmigosActivo =  this.usuarioActivo.listaAmigos;
        const emailPersonal = this.usuarioActivo.email;

        mensaje = email + ' ya es tu amigo.';
        found = this.filtrarAmigos( mensaje, solicitudesAmigosActivo, email, reject);
        mensaje = 'Ya le has enviado una peticion a ' + email;
        found = this.filtrarAmigos( mensaje, solicitudesAmigos, emailPersonal, reject);
        if (!found) {
          response('ok');
        }
      });
    });
  }
 // REFACTORIZADO
  private filtrarAmigos(
    mensaje: string,
    lista: any,
    email: string,
    reject: (reason?: any) => void
  ) {
    let found: boolean;
    if (lista !== undefined) {
      lista.forEach(amigo => {
        if (amigo.includes(email)) {
          found = true;
          reject(mensaje);
        }
      });
    }
    return found;
  }
}
