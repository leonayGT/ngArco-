import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sorteio',
  templateUrl: './sorteio.component.html',
  styleUrls: ['./sorteio.component.css']
})
export class SorteioComponent implements OnInit {


  itemsPerSlide = 6;
  singleSlideOffset = true;
 
  slides = [
    {image: '../assets/csgo.png'},
    {image: '../assets/newWorld.jpg'},
    {image: '../assets/Minecraft.png'},
    {image: '../assets/wow-mobile.jpeg'},
    {image: '../assets/Call.jpg'},
    {image: 'assets/habbo-hotel.png'},
    {image: '../assets/Second.jpg'},
    {image: 'assets/league.jpg'},
    {image: 'assets/mineiro.jpg'},
    {image: 'assets/principe.jpg'}
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
