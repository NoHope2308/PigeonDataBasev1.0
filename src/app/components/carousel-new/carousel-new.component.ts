import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carousel-new',
  templateUrl: './carousel-new.component.html',
  styleUrls: ['./carousel-new.component.css'],
})

export class CarouselNewComponent implements OnInit {
  
  slideIndex:number = 0;
  
  constructor() {}

  ngOnInit(): void {
    this.showSlides();   
  }
 
  showSlides() {
        
    
    let slides = document.getElementsByClassName("mySlides") as HTMLCollectionOf<HTMLElement>;
    let i;
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
    }
    this.slideIndex++;
    if (this.slideIndex > slides.length) {this.slideIndex = 1}    
    slides[this.slideIndex-1].style.display = "block";  
    setTimeout(() => {
      this.showSlides();
    }, 5000);   
  }
}
