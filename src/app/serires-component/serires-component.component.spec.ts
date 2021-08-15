import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeriresComponentComponent } from './serires-component.component';

describe('SeriresComponentComponent', () => {
  let component: SeriresComponentComponent;
  let fixture: ComponentFixture<SeriresComponentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeriresComponentComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeriresComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
