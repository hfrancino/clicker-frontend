import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClickerZoneComponent } from './clicker-zone.component';

describe('ClickerZoneComponent', () => {
  let component: ClickerZoneComponent;
  let fixture: ComponentFixture<ClickerZoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ClickerZoneComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ClickerZoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
