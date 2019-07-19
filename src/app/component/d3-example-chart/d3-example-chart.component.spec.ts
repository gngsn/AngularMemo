import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { D3ExampleChartComponent } from './d3-example-chart.component';

describe('D3ExampleChartComponent', () => {
  let component: D3ExampleChartComponent;
  let fixture: ComponentFixture<D3ExampleChartComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ D3ExampleChartComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(D3ExampleChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
