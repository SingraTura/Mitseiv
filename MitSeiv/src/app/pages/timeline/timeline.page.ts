import { ManagerQuedadaService } from "src/app/services/managerQuedada/manager-quedada.service";
import { Component, OnInit } from "@angular/core";
import { Quedada } from "src/app/core/model/class/quedada";
import { MenuController } from '@ionic/angular';

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.page.html",
  styleUrls: ["./timeline.page.scss"]
})
export class TimelinePage {
  private quedadas = Array<Quedada>();

  constructor(public managerQuedada: ManagerQuedadaService, public menuCtrl: MenuController) {
     this.managerQuedada.obtenerListaQuedadasPublicas().then((resultado) => {
      this.quedadas = resultado;
     });
  }
  ionViewWillEnter() {
    this.menuCtrl.enable(true);
  }
}
