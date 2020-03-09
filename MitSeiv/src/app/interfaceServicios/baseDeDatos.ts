import { Usuario } from '../core/model/class/usuario';

export abstract class BaseDeDatos {
    abstract registrar(email: string, contrasena: string): Promise<boolean>;
    abstract iniciarSesion(email: string, contrasena: string): Promise<boolean>;
    abstract cerrarSesion(): Promise<boolean>;
    abstract isLogin(): boolean;
    abstract capturarIdUsuarioActivo(): string;
    abstract capturarUsuario(uid: string): Usuario;
    abstract actualizarUsuario(nombre: string, direccion: string): Promise<boolean>;
    abstract actualizarContrasena(contrasena: string): Promise<boolean|string>;
    abstract enviarSolicitudAmistad(email: string): Promise<boolean> ;
    abstract capturarUsuarioPorCorreo(email: string): Promise<Usuario>;
    abstract comprobarListaAmigos(email: string): Promise<string> ;
    abstract aceptarSolicitudAmistad(email: string): Promise<boolean>;
    abstract rechazarSolicitudAmistad(email: string): Promise<boolean>;
    abstract eliminarAmigo(email: string);
}
