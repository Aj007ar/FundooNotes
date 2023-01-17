import { AUTO_STYLE } from '@angular/animations';
import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/DataServices/data.service';
import { NoteService } from 'src/app/services/noteService/note.service';
import { UpdateNoteComponent } from '../update-note/update-note.component';

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})
export class DisplayNoteComponent implements OnInit {

  @Input() recieveNoteList: any;
  @Output() eventForDisplay = new EventEmitter<string>();
  // @Output() UpdateEvent = new EventEmitter<string>();
  title: any;
  description: any;
  message: any;
  Search = '';
  gridlist: any;
  collabs: any = []
  CollabList = []
  constructor(public dialog: MatDialog, private dataServices: DataService, private snackbar: MatSnackBar, private note: NoteService) { }
  ngOnInit(): void {
    this.dataServices.store.subscribe(a => this.gridlist = a)
    this.dataServices.currentMessage.subscribe((res: any) => {
      console.log(res)
      this.Search = res;

    })

    console.log(this.recieveNoteList);
    // this.getAllCollab()

  }
  openDialog(note: any) {
    const dialogRef = this.dialog.open(UpdateNoteComponent, {

      data: note,

    });
    dialogRef.afterClosed().subscribe(reponse => {
      this.title;
      this.description;
      console.log('The dialog was closed', reponse);
      this.eventForDisplay.emit(reponse)
      this.snackbar.open('Note updated successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  recievedEventFromIcon($event: any) {
    console.log("event from icon to disply", $event);
    this.message = $event;
    console.log("message", this.message);
    this.eventForDisplay.emit(this.message)
  }

  getCollab(data: any) {
    this.collabs = data
  }

  // getAllCollab() {
  //   this.note.getAllNote().subscribe((response: any) => {
  //     console.log(response);
  //     this.CollabList = response.data.data.collaborators
  //     console.log(this.CollabList);
  //   })
  // }
}
