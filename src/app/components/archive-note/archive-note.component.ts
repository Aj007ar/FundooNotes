import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-archive-note',
  templateUrl: './archive-note.component.html',
  styleUrls: ['./archive-note.component.scss']
})
export class ArchiveNoteComponent implements OnInit {

  noteList=[]
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getArchiveNote()
  }

  getArchiveNote(){
    this.note.getArchiveNote().subscribe((response:any)=>{
      console.log(response);
      this.noteList=response.data.data
      console.log(this.noteList);
    })
  }
}
