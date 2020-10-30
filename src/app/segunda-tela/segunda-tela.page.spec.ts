import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { SegundaTelaPage } from './segunda-tela.page';

describe('SegundaTelaPage', () => {
  let component: SegundaTelaPage;
  let fixture: ComponentFixture<SegundaTelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SegundaTelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(SegundaTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
