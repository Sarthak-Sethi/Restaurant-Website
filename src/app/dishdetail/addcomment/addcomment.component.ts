import { Component, Input, OnInit } from '@angular/core';
import { FormBuilder, FormGroup,Validators } from '@angular/forms';
import { DISHES } from 'src/app/data/dishes';
import { Dish } from 'src/app/model/dish';

@Component({
  selector: 'app-addcomment',
  templateUrl: './addcomment.component.html',
  styleUrls: ['./addcomment.component.css']
})
export class AddcommentComponent implements OnInit {
  
@Input()
dishforid : Dish = new Dish;

  rating = 0;
  ratingArr: boolean[] = []; 



addCommentForm : FormGroup = this.formbuilder.group({
  name:  ['', [Validators.required, Validators.maxLength(40)]],
})
  constructor(private formbuilder : FormBuilder ) {
      this.ratingArr = Array(5).fill(false);
     }

  ngOnInit(): void {
    this.addCommentForm = this.formbuilder.group({
      author : ['',[Validators.required,Validators.minLength(2),Validators.maxLength(25)]],
      comment : ['',[Validators.required,Validators.minLength(5),Validators.maxLength(10)]],
      rating : [0,Validators.required,]
    });
console.log();

  }
  onSubmit(){
    var new_comment = {
      rating: this.rating,
      comment: this.addCommentForm.value.comment,
      author: this.addCommentForm.value.author,
      date: '2012-10-16T17:57:28.556094Z'
    }
    DISHES[parseInt(this.dishforid.id)].comments.push(new_comment);
  }

  returnStar(i: number) {
    if (this.rating >= i + 1) {
      return 'star';
    } else {
      return 'no star';
    }
  }
  updateDishSelected(){
  
    
  }

  onClick(i: number) {
    this.updateDishSelected();
    this.rating = i + 1;
    this.addCommentForm.setValue({
      author : this.addCommentForm.value.author,
      comment :this.addCommentForm.value.comment,
      rating : this.rating
        });
    // this.snackBar.open(this.response[i], '', {
    //   duration: this.snackBarDuration,
    //   panelClass: ['snack-bar']
    // });

  }

}
