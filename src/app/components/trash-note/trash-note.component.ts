import { Component, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-trash-note',
  templateUrl: './trash-note.component.html',
  styleUrls: ['./trash-note.component.scss']
})
export class TrashNoteComponent implements OnInit {

  NoteList=[]
  constructor(private note:NoteService) { }

  ngOnInit(): void {
    this.getTrashNote()
  }

  getTrashNote(){
    this.note.getTrashNote().subscribe((response:any)=>{
      console.log(response);
      this.NoteList=response.data.data
      console.log(this.NoteList);
      this.NoteList=this.NoteList.filter((result:any)=>{
        return result.isArchived==false
      })
    })
  }

}
