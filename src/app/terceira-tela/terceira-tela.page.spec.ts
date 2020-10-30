import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { TerceiraTelaPage } from './terceira-tela.page';

describe('TerceiraTelaPage', () => {
  let component: TerceiraTelaPage;
  let fixture: ComponentFixture<TerceiraTelaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TerceiraTelaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(TerceiraTelaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
