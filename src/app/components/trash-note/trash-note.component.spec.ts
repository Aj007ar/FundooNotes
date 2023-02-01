import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { AppRoutingModule } from 'src/app/app-routing.module';

import { TrashNoteComponent } from './trash-note.component';

describe('TrashNoteComponent', () => {
  let component: TrashNoteComponent;
  let fixture: ComponentFixture<TrashNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TrashNoteComponent ],
      imports: [HttpClientModule, MatSnackBarModule, AppRoutingModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TrashNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
