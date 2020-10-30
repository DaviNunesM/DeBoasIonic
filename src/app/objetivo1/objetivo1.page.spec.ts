import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { Objetivo1Page } from './objetivo1.page';

describe('Objetivo1Page', () => {
  let component: Objetivo1Page;
  let fixture: ComponentFixture<Objetivo1Page>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Objetivo1Page ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(Objetivo1Page);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
