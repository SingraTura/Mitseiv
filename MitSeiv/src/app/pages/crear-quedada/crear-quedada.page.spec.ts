import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { CrearQuedadaPage } from './crear-quedada.page';

describe('CrearQuedadaPage', () => {
  let component: CrearQuedadaPage;
  let fixture: ComponentFixture<CrearQuedadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CrearQuedadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(CrearQuedadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
