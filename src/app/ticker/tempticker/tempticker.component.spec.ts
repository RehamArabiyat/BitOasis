import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TemptickerComponent } from './tempticker.component';

describe('TemptickerComponent', () => {
  let component: TemptickerComponent;
  let fixture: ComponentFixture<TemptickerComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TemptickerComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TemptickerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
