import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormArray, FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';

import { UserService } from 'src/app/services/user/user.service';
import { UserEvaluation } from 'projects/interfaces/src/lib/user-evaluation';

@Component({
  selector: 'app-user-evaluation',
  standalone: true,
  imports: [CommonModule, ReactiveFormsModule],
  templateUrl: './user-evaluation.component.html',
  styleUrls: ['./user-evaluation.component.scss']
})
export class UserEvaluationComponent {

  frmLanguage: FormGroup | any;
  frmEvaluation: FormGroup | any;

  exercises: Array<UserEvaluation> | undefined;
  
  xx = "1";

  constructor(
    private userservice: UserService
  ) { }

  ngOnInit(): void {
    this.frmLanguage = new FormGroup({
      'language': new FormControl('')
    });

    this.frmEvaluation = new FormGroup({
      'exercise1': new FormArray([]),
      'exercise2': new FormArray([]),
      'exercise3': new FormControl(''),
      'exercise4': new FormControl(''),
      'exercise5': new FormControl(''),
      'exercise6': new FormControl(''),
      'exercise7': new FormControl(''),
      'exercise8': new FormControl(''),
      'exercise9': new FormControl(''),
      'exercise10': new FormControl(''),
    })
  }

  showQuestions(){
    let language = this.frmLanguage.value.language
   
    this.userservice.getUserEvaluation(language)
    .subscribe({
      next: (data) => {
        console.log(">>", data);
        this.exercises = data       
      },
      error: error => {
        console.log(error);
      }
    }) 
  }

  onCheckboxChange(e: any, exercise: string) {
    console.log(">>",exercise);
    const checkArray: FormArray = this.frmEvaluation.get(exercise) as FormArray;
    if (e.target.checked) {
      checkArray.push(new FormControl(e.target.value));
      console.log(this.frmEvaluation.value);
    } else {
      let i: number = 0;
      checkArray.controls.forEach((item: any) => {
        if (item.value == e.target.value) {
          checkArray.removeAt(i);
          return;
        }
        i++;
      });
      console.log(this.frmEvaluation.value);
    }
  }

  saveAnswers(){
    console.log(this.frmEvaluation.value);
  }
}
