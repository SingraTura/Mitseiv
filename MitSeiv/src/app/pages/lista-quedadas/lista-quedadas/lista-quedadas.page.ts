import { ManagerUsuarioService } from "./../../../services/managerUsuario/manager-usuario.service";
import { Component, OnInit } from "@angular/core";
import { Quedada } from "src/app/core/model/class/quedada";
import { ManagerQuedadaService } from "src/app/services/managerQuedada/manager-quedada.service";

@Component({
  selector: "app-lista-quedadas",
  templateUrl: "./lista-quedadas.page.html",
  styleUrls: ["./lista-quedadas.page.scss"]
})
export class ListaQuedadasPage {
  private quedadas = Array<Quedada>();

  constructor(
    public managerQuedada: ManagerQuedadaService,
    public managerUsuario: ManagerUsuarioService
  ) {
    this.managerQuedada
      .obtenerListaMisQuedadas(
        this.managerUsuario.capturarUsuario(
          this.managerUsuario.capturarIdUsuarioActivo()
        ).email
      )
      .then(resultado => {
        this.quedadas = resultado;
      });
  }
  fakePipe(value: any): string {
    let result = '';
    const date = new Date(1970, 0, 1);
    date.setSeconds(value.seconds); 
    const day = date.getDay();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();
    const hour = date.getHours();
    const minute = date.getMinutes();
    result = 'Dia: ' + day + '-' + month + '-' + year +' Hora: ' + hour + ':' + minute;
    return result;
  }
}
