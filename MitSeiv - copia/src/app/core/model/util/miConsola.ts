export class MiConsola {
    static puedesEscribir = true;
    static puedesAlertar = true;

    static escribe(mensaje: string): void {
        if (this.puedesEscribir) {
            console.log(mensaje);
        }
    }
    static alerta(mensaje: string): void {
        if (this.puedesAlertar) {
            alert(mensaje);
        }
    }
}
