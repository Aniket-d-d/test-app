import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdudComponent } from './adud.component';

describe('AdudComponent', () => {
  let component: AdudComponent;
  let fixture: ComponentFixture<AdudComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdudComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdudComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
