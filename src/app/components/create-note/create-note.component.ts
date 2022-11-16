import { Component, OnInit } from '@angular/core';
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

  constructor(private note: NoteService) { }

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
      })
    }
  }
}
