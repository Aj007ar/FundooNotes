import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-get-all-notes',
  templateUrl: './get-all-notes.component.html',
  styleUrls: ['./get-all-notes.component.scss']
})
export class GetAllNotesComponent implements OnInit {

  NoteList = []
  gridlist: any
  isArchived = false
  isTrash = false
  constructor(private note: NoteService) { }

  ngOnInit(): void {
    this.getAllNote()
  }

  getAllNote() {
    this.note.getAllNote().subscribe((response: any) => {
      console.log(response);
      this.NoteList = response.data.data
      console.log(this.NoteList);
      this.NoteList = this.NoteList.filter((result: any) => {
        return result.isArchived == false && result.isDeleted == false;

      })
      this.NoteList = this.NoteList.reverse();
    })
  }
  updateEvent($event: any) {
    this.getAllNote();
  }

}
