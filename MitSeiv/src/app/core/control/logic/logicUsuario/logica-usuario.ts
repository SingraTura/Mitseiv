import { Usuario } from "src/app/core/model/class/usuario";

export class LogicaUsuario {
  private usuarios: Array<Usuario>;

  constructor(usuarios: Array<Usuario>) {
    this.usuarios = usuarios;
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
  public capturarUsuario(uid: string): Usuario {
    let userR: Usuario;
    for (const user of this.usuarios) {
      if (user.id === uid) {
        userR = user;
      }
    }
    return userR;
  }
  private filtrarAmigos(
    mensaje: string,
    lista: any,
    email: string,
    reject: (reason?: any) => void
  ) {
    let found: boolean;
    lista.forEach(amigo => {
      if (amigo.includes(email)) {
        found = true;
        reject(mensaje);
      }
    });

    return found;
  }
  public comprobarListaAmigos(email: string, usuarioActivo: Usuario): Promise<string> {
    return new Promise((response, reject) => {
      this.capturarUsuarioPorCorreo(email).then(user => {
        let found = false;
        let mensaje: string;
        const solicitudesAmigos = user.solicitudesAmigos;
        const solicitudesAmigosActivo = usuarioActivo.listaAmigos;
        const emailPersonal = usuarioActivo.email;

        mensaje = email + " ya es tu amigo.";
        found = this.filtrarAmigos(
          mensaje,
          solicitudesAmigosActivo,
          email,
          reject
        );
        mensaje = "Ya le has enviado una peticion a " + email;
        found = this.filtrarAmigos(
          mensaje,
          solicitudesAmigos,
          emailPersonal,
          reject
        );
        if (!found) {
          response("ok");
        }
      });
    });
  }

  public enviarSolicitudAmistad(email: string, usuarioActivo: Usuario): Promise<boolean> {
    return this.capturarUsuarioPorCorreo(email)
      .then(usuarioSolicitado => {
        usuarioSolicitado.solicitudesAmigos.push(usuarioActivo.email);
        
        return true;
      })
      .catch(() => {
        return false;
      });
  }
  public aniadirEmailSolicitado(email: string, usuarioActivo: Usuario): Promise<Usuario> {
    return this.capturarUsuarioPorCorreo(email).then(usuarioSolicitado => {
      usuarioSolicitado.solicitudesAmigos.push(usuarioActivo.email);
      return usuarioSolicitado;
    });
  }
  public eliminarDeLista(lista: string[], elementoAEliminar: string) {
    const listaActualizada = new Array<string>();
    lista.forEach(solicitud => {
      if (!solicitud.includes(elementoAEliminar)) {
        listaActualizada.push(solicitud);
      }
    });
    return listaActualizada;
  }
  public aceptarSolicitudAmistad(email: string, usuarioActivo: Usuario, usuario: Usuario) {
      usuarioActivo.listaAmigos.push(email);
      usuario.listaAmigos.push(usuarioActivo.email);
  }
}
