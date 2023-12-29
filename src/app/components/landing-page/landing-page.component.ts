import { Component,OnInit,OnDestroy } from '@angular/core';
import { TypeTextService } from 'src/app/services/typeText/type-text.service';

@Component({
  selector: 'app-landing-page',
  templateUrl: './landing-page.component.html',
  styleUrls: ['./landing-page.component.css']
})
export class LandingPageComponent implements OnInit,OnDestroy{
  //!Array of text and their corresponding element ids
  textArray:{text:string,elementId:string,speed:number}[] = [
    // {
    //   text:"Sanjay Yadav",
    //   elementId:"name-text",
    //   speed:50
    // },
    // {
    //   text:"Welcome to My Portfolio",
    //   elementId:"welcome-text",
    //   speed:50
    // },
    {
      text:"Software Engineer.",
      elementId:"designation-text",
      speed:50
    },
    // {
    //   text:"Hello, I'm Sanjay Yadav, a passionate software engineer with a wealth of experience and expertise. I specialize in creating innovative solutions and collaborating on impactful projects.\nExplore my journey in the world of programming, discover my projects, and learn more about the technologies I love to work with.",
    //   elementId:"myinfo-text",
    //   speed:10
    // }
  ]


  constructor(private typingService:TypeTextService){    
  }

  ngOnInit(): void {
    this.textArray.map(ele=>{
      this.typingService.startTyping(ele.elementId,ele.text,ele.speed)
    })
  }

  ngOnDestroy(): void {
    this.typingService.stopTyping()
  }
}
