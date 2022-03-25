import { Component, OnInit } from '@angular/core';
import { Form, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-user-rp',
  templateUrl: './user-rp.component.html',
  styleUrls: ['./user-rp.component.css']
})
export class UserRpComponent implements OnInit {

  constructor(private fb: FormBuilder) { }

  myForm: FormGroup;

  ngOnInit(): void {
    this.myForm = this.fb.group({
      'userName': new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ]),
      'email' : new FormControl('', [
        Validators.required,
        Validators.minLength(10),
        Validators.maxLength(20)
      ])
    })

    const userData = {
      'userName' : 'handsome',
      'email' : 'handsomeboyye@yahoo'
    }
    this.myForm.setValue(userData);
    this.myForm.statusChanges.subscribe(x => console.log(x))

  }


}
