import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';
import { MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-update-note',
  templateUrl: './update-note.component.html',
  styleUrls: ['./update-note.component.scss']
})
export class UpdateNoteComponent implements OnInit {
  title:any;
  description:any;
  id:any;
  @Output() UpdateEvent = new EventEmitter<string>();
  constructor(private note:NoteService,public dialogRef:MatDialogRef<UpdateNoteComponent>,
   @Inject(MAT_DIALOG_DATA) public data:any) {
      this.title=data.title;
      this.description=data.description;
      this.id=data.id;
  
     }
     onNoClick(){
      this.dialogRef.close();
     }

  ngOnInit(): void {

  }

  closeDialog(){
    let data={
      title:this.title,
      description:this.description,
      noteId:this.id
    }
    this.note.updateService(data).subscribe((response:any)=>{
      // console.log("update response",response);
      this.UpdateEvent.emit(response)
    })
    this.dialogRef.close();
  }
}

