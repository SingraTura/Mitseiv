import { ManagerQuedadaService } from 'src/app/services/managerQuedada/manager-quedada.service';
import { Component, OnInit } from '@angular/core';
import { Quedada } from 'src/app/core/model/class/quedada';

@Component({
  selector: 'app-timeline',
  templateUrl: './timeline.page.html',
  styleUrls: ['./timeline.page.scss'],
})
export class TimelinePage implements OnInit {
  private quedadas: Array<Quedada>;
  constructor(public managerQuedada: ManagerQuedadaService) {
   }

  ngOnInit() {
  }
  listaQuedadas(){
    if(this.quedadas === undefined) {
     // this.quedadas = this.managerQuedada.obtenerListaQuedadasPublicas();
    }

    return this.quedadas;
  }

}
