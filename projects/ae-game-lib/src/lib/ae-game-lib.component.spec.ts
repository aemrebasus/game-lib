import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AeGameLibComponent } from './ae-game-lib.component';

describe('AeGameLibComponent', () => {
  let component: AeGameLibComponent;
  let fixture: ComponentFixture<AeGameLibComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AeGameLibComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AeGameLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
