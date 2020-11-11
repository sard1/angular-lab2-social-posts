import { Component, OnInit } from '@angular/core';
import { Post } from '../interfaces/post';

@Component({
  selector: 'app-social-posts',
  templateUrl: './social-posts.component.html',
  styleUrls: ['./social-posts.component.css']
})
export class SocialPostsComponent implements OnInit {

  posts:Post[]=[
    {
      title: "idk",
      thought: "head empty, no thoughts"
    },
    {
      title: "idk 2",
      thought: "head emptier, less thoughts"
    },
    {
      title: "idk 3",
      thought: "head emptiest, not a single thought"
    },
  ]

  constructor() { }

  formShow =true;

  ngOnInit(): void {
  }

  onDelete=(index:number):void=>{
    this.posts.splice(index,1);
  };

  onSubmit= (posts:Post):void=>{
    this.posts.unshift(posts);
  }

}
