import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { VerQuedadaPage } from './ver-quedada.page';

describe('VerQuedadaPage', () => {
  let component: VerQuedadaPage;
  let fixture: ComponentFixture<VerQuedadaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ VerQuedadaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(VerQuedadaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
