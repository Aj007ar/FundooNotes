import { Component, Input, OnInit } from '@angular/core';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-icons',
  templateUrl: './icons.component.html',
  styleUrls: ['./icons.component.scss']
})
export class IconsComponent implements OnInit {

  
  @Input() noteCard:any;

  constructor(private note:NoteService) { }

  ngOnInit(): void {
  }

  trash(){
    let payload={
      noteIdList:[this.noteCard.id],
      isDeleted:true,
    }
    console.log(payload);
    this.note.trashNote(payload).subscribe((res:any)=>{
      console.log(res);
    })
  }

}
