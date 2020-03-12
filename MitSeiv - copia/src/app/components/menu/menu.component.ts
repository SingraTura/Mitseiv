import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { DataService } from 'src/app/services/data/data.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
})
export class MenuComponent implements OnInit {

  componentsP: Observable<any>;
  constructor( private dataService: DataService) { }

  ngOnInit() {
    this.componentsP = this.dataService.getMenuOpts();
  }

}

