import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { NoteService } from '../../services/noteService/note.service';

@Component({
  selector: 'app-create-note',
  templateUrl: './create-note.component.html',
  styleUrls: ['./create-note.component.scss']
})
export class CreateNoteComponent implements OnInit {

  title: any;
  description: any;
  isShow = false;
  message:any;
  // @Input() noteCard:any;
  @Output() IconEvent = new EventEmitter<string>();
  @Output() CreateEvent = new EventEmitter<string>();
  constructor(private note: NoteService,private snackbar:MatSnackBar) { }

  ngOnInit(): void {
  }

  Show() {
    this.isShow = true;
  }
  Close() {
    this.isShow = false;
    if ((this.title != null && this.title != "") || (this.description != null && this.description != "")) {
      console.log(this.title, this.description)
      let payload = {
        "title": this.title,
        "description": this.description
      }
      this.note.addNote(payload).subscribe((res: any) => {
        console.log(res);
        this.CreateEvent.emit(res)
      })
    }
  }

  recievedEventFromIcon($event:any){
    console.log("event from icon to disply",$event);
    this.message=$event;
    console.log("message",this.message);
    this.IconEvent.emit(this.message)
  }
  openSnackbar(message: any, action: any) {
    this.snackbar.open(message, action)
  }
}
