import { Injectable } from "@angular/core";
import { Usuario } from "../core/model/class/usuario";
import { LogicaUsuario } from "../core/control/logic/logicUsuario/logica-usuario";
import { UsuarioBuilder } from "../core/model/builder/userBuilder";
import { BaseDeDatos } from "../interfaceServicios/baseDeDatos";

@Injectable({
  providedIn: "root"
})
export class MockBaseService implements BaseDeDatos {
  private usuarioActivo: Usuario;
  private usuarios: Usuario[];
  private login: boolean;
  private logic: LogicaUsuario;
  private usuarioBuilder = new UsuarioBuilder();
  constructor() {
    this.usuarios = new Array<Usuario>();
    this.usuarios.push(
      this.usuarioBuilder
        .restart()
        .email("jose@gmail.com")
        .build()
    );
    const solicitudesAdrian = new Array<string>();
    solicitudesAdrian.push("jose@gmail.com");
    this.usuarios.push(
      this.usuarioBuilder
        .restart()
        .email("adrian@gmail.com")
        .solicitudesAmigos(solicitudesAdrian)
        .build()
    );
    const amigosFernando = new Array<string>();
    amigosFernando.push("jose@gmail.com");
    this.usuarios.push(
      this.usuarioBuilder
        .restart()
        .email("fernando@gmail.com")
        .listaAmigos(amigosFernando)
        .build()
    );
  }
  public iniciarSesion(email: string, contrasena: string): Promise<boolean> {
    return new Promise(response => {
      this.usuarios.forEach(usuario => {
        if (usuario.email.includes(email)) {
          this.usuarioActivo = usuario;
          this.login = true;
          response(true);
        }
      });
      if (!this.login) {
        response(false);
      }
    });
  }
  public registrar(email: string, contrasena: string): Promise<boolean> {
    return new Promise(response => {
      this.usuarios.push(
        this.usuarioBuilder
          .restart()
          .email(email)
          .build()
      );
      response(true);
    });
  }
  public cerrarSesion(): Promise<boolean> {
    return new Promise(response => {
      this.login = false;
      response(true);
    });
  }
  public isLogin(): boolean {
    return this.login;
  }
  public actualizarUsuario(nombre: string): Promise<boolean> {
    return new Promise(response => {
      this.usuarioActivo.nombre = nombre;

      response(true);
    });
  }
  public actualizarContrasena(contrasena: string): Promise<boolean | string> {
    return new Promise((response, reject) => {
      response(true);
    });
  }

  public aceptarSolicitudAmistad(email: string): Promise<void> {
    return this.capturarUsuarioPorCorreo(email).then(usuario => {
      this.logic.aceptarSolicitudAmistad(
        email,
        this.obtenerUsuarioActivo(),
        usuario
      );
      return this.actualizarSolicitudAmistad(usuario);
    });
  }
  rechazarSolicitudAmistad(email: string): Promise<void> {
    return this.capturarUsuarioPorCorreo(email).then(usuario => {
      return this.actualizarSolicitudAmistad(usuario);
    });
  }
  public eliminarAmigo(email: string) {
    this.capturarUsuarioPorCorreo(email).then(usuario => {
      const activo = this.usuarioActivo;
      const usuarios = [activo, usuario];
      const emails = [usuario.email, activo.email];

      for (let i = 0; i < usuarios.length; i++) {
        const listaAmigosActualizada = this.logic.eliminarDeLista(
          usuarios[i].listaAmigos,
          emails[i]
        );
        this.actualizarAmigos(
          usuarios[i].id,
          listaAmigosActualizada,
          usuarios[i].solicitudesAmigos
        );
      }
    });
  }
  public actualizarSolicitudAmistad(usuario) {
    const activo = this.usuarioActivo;
    const usuarios = [activo, usuario];
    const emails = [usuario.email, activo.email];

    for (let i = 0; i < usuarios.length; i++) {
      const listaSolicitudesActualizada = this.logic.eliminarDeLista(
        usuarios[i].solicitudesAmigos,
        emails[i]
      );
      this.actualizarAmigos(
        usuarios[i].id,
        usuarios[i].listaAmigos,
        listaSolicitudesActualizada
      );
    }
  }
  public capturarUsuarioPorCorreo(email: string): Promise<Usuario> {
    return this.logic.capturarUsuarioPorCorreo(email);
  }
  public obtenerUsuarioActivo(): Usuario {
    return this.usuarioActivo;
  }
  private actualizarAmigos(id, listaAmigosA, listaSolicitudes) {
    this.capturarUsuario(id).listaAmigos = listaAmigosA;
    this.capturarUsuario(id).solicitudesAmigos = listaSolicitudes;
  }
  private buscarUsuarioPorId(id: string) {}
  capturarIdUsuarioActivo(): string {
    return this.usuarioActivo.id;
  }
  capturarUsuario(uid: string): Usuario {
    let retorno: Usuario;
    this.usuarios.forEach(usuario => {
      if (usuario.id === uid) {
        retorno = usuario;
      }
    });
    return retorno;
  }
  public enviarSolicitudAmistad(email: string): Promise<void> {
    return this.capturarUsuarioPorCorreo(email).then(usuarioSolicitado => {
      usuarioSolicitado.solicitudesAmigos.push(this.usuarioActivo.email);
    });
  }
  comprobarListaAmigos(email: string): Promise<string> {
    return this.logic.comprobarListaAmigos(email, this.obtenerUsuarioActivo());
  }
}
