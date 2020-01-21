import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MatchedPage } from './matched.page';

describe('MatchedPage', () => {
  let component: MatchedPage;
  let fixture: ComponentFixture<MatchedPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MatchedPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MatchedPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
