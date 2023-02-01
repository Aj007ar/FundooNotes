import { HttpClientModule } from '@angular/common/http';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule} from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { MatTooltipModule } from '@angular/material/tooltip';
import { AppRoutingModule } from 'src/app/app-routing.module';
import { FilterPipe } from 'src/app/Pipe/filter.pipe';

import { DisplayNoteComponent } from './display-note.component';

describe('DisplayNoteComponent', () => {
  let component: DisplayNoteComponent;
  let fixture: ComponentFixture<DisplayNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DisplayNoteComponent,FilterPipe ],
      imports: [ReactiveFormsModule, HttpClientModule, MatSnackBarModule, AppRoutingModule,MatDialogModule,MatTooltipModule]
    })
    .compileComponents();

    fixture = TestBed.createComponent(DisplayNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
