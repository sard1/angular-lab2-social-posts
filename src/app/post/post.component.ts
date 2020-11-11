import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-post',
  templateUrl: './post.component.html',
  styleUrls: ['./post.component.css']
})
export class PostComponent implements OnInit {
  @Input() postRef: Post;
  @Output() deleted = new EventEmitter<void>()

  constructor() { }

  ngOnInit(): void {
  }

  //emitter
  deletePost = ():void =>{
    this.deleted.emit()
  }

}
