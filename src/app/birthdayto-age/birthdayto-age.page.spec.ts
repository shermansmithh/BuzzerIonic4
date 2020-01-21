import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { BirthdaytoAgePage } from './birthdayto-age.page';

describe('BirthdaytoAgePage', () => {
  let component: BirthdaytoAgePage;
  let fixture: ComponentFixture<BirthdaytoAgePage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BirthdaytoAgePage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(BirthdaytoAgePage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
