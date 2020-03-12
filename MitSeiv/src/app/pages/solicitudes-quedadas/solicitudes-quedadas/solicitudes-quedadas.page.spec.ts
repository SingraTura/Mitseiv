import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SolicitudesQuedadasPage } from './solicitudes-quedadas.page';

describe('SolicitudesQuedadasPage', () => {
  let component: SolicitudesQuedadasPage;
  let fixture: ComponentFixture<SolicitudesQuedadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SolicitudesQuedadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SolicitudesQuedadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
