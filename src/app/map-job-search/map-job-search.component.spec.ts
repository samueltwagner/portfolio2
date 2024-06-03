import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapJobSearchComponent } from './map-job-search.component';

describe('MapJobSearchComponent', () => {
  let component: MapJobSearchComponent;
  let fixture: ComponentFixture<MapJobSearchComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MapJobSearchComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MapJobSearchComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
