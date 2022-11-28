import { Component, Inject, OnInit } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {

  id:any;
  name:any;
  email:any;

  constructor(private note:NoteService,public dialogRef:MatDialogRef<CollaboratorComponent>,@Inject(MAT_DIALOG_DATA) public data:any) { 
    this.name=localStorage.getItem('firstName');
    this.email=localStorage.getItem('email');
    this.id=data.id;
  }

  onNoClick(){
    this.dialogRef.close();
   }

  ngOnInit(): void {
  }

  closeDialog(){
    let data={
     email:this.email,
      noteId:this.id
    }
    this.note.addCollab(this.id,data).subscribe((response:any)=>{
      console.log(response);
      // this.UpdateEvent.emit(response)
    })
    this.dialogRef.close();
  }
}
