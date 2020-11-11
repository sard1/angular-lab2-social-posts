import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import {Post} from '../interfaces/post';


@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.css']
})
export class PostFormComponent implements OnInit {
  @Output() submitted = new EventEmitter<Post>()
  constructor() { }

  ngOnInit(): void {
  }

  formShow=true;

  submitPost = (form: NgForm):void =>{
    let newPost:Post = {
      title: form.value.title,
      thought: form.value.thought,
    };
    console.log(newPost);
    this.submitted.emit(newPost);
    form.reset();
  }


  showForm=():void=>{
    setTimeout(() =>{ this.formShow = !this.formShow;}, 100);
  }

}
