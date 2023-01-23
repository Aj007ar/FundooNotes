import { Token } from '@angular/compiler';
import { Component, EventEmitter, Inject, Input, OnInit, Output } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { DataService } from 'src/app/services/DataServices/data.service';
import { NoteService } from 'src/app/services/noteService/note.service';

@Component({
  selector: 'app-collaborator',
  templateUrl: './collaborator.component.html',
  styleUrls: ['./collaborator.component.scss']
})
export class CollaboratorComponent implements OnInit {
  collabEmail: any = '';
  noteId: any;
  fname: any;
  lname: any;
  email: any;
  collabList: any = [];
  collabData: any;
  collabs: any = [];
  collabResponse: any;
  collabName: any;

  @Output() changeCollabEvent = new EventEmitter<any>();

  id: any;
  token: any;
  constructor(private note: NoteService,private snackbar:MatSnackBar, private dataService: DataService, public dialogRef: MatDialogRef<CollaboratorComponent>, @Inject(MAT_DIALOG_DATA) public data: any) {
    this.fname = localStorage.getItem('fname');
    this.lname = localStorage.getItem('lname');
    this.email = localStorage.getItem('email');
    this.token = localStorage.getItem('token')
    this.id = data.id;
    this.collabs = data.collaborators;
  }

  onNoClick() {

    this.dialogRef.close();
  }

  ngOnInit(): void {

  }

  addCollab() {
    let data = {
      firstName: this.collabData.firstName,
      lastName: this.collabData.lastName,
      email: this.collabData.email,
      userId: this.collabData.userId
    }
    console.log(data);
    this.note.addCollab(this.data.id, data).subscribe((response: any) => {
      console.log(response);
      this.collabs.push(data)
      this.snackbar.open('Note Collaborator Added successfully', '', {
        duration: 3000,
        verticalPosition: 'bottom'
      })
    })
  }

  collab(event: any) {
    console.log(event.target.value);

    let data = {
      searchWord: (event.target.value)
    }
    this.note.getCollab(data).subscribe((response: any) => {
      console.log(response);
      this.collabList = response.data.details
    })
  }

  selectCollab(data: any) {
    this.collabData = data
    this.collabEmail = data.email
  }
  save(collabList: any) {
    this.addCollab()
    this.dialogRef.close(collabList);
  }
  cancel(collabList: any) {
    
    this.dialogRef.close(collabList);
  }

  removeCollab(collabid: any) {
    this.note.removeCollab(this.data.id, collabid).subscribe((res: any) => {
      console.log(res);
      this.collabs.pop(this.data)
      // this.snackbar.open('Note Collaborator removed successfully', '', {
      //   duration: 3000,
      //   verticalPosition: 'bottom'
      // })
    })
  }
}
