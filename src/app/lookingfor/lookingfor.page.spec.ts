import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { LookingforPage } from './lookingfor.page';

describe('LookingforPage', () => {
  let component: LookingforPage;
  let fixture: ComponentFixture<LookingforPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LookingforPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(LookingforPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
