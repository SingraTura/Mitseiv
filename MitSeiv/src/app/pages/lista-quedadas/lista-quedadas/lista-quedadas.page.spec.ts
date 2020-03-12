import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListaQuedadasPage } from './lista-quedadas.page';

describe('ListaQuedadasPage', () => {
  let component: ListaQuedadasPage;
  let fixture: ComponentFixture<ListaQuedadasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListaQuedadasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListaQuedadasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
