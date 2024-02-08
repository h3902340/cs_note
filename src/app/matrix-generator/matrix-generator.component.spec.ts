import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MatrixGeneratorComponent } from './matrix-generator.component';

describe('MatrixGeneratorComponent', () => {
  let component: MatrixGeneratorComponent;
  let fixture: ComponentFixture<MatrixGeneratorComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [MatrixGeneratorComponent]
    });
    fixture = TestBed.createComponent(MatrixGeneratorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
