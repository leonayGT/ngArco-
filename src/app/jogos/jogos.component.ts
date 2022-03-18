import { Component, Input, TemplateRef} from '@angular/core';
import { BsModalService, BsModalRef} from 'ngx-bootstrap/modal';

 

@Component({
  selector: 'app-jogos',
  templateUrl: './jogos.component.html',
  styleUrls: ['./jogos.component.css']
})
export class JogosComponent {
  constructor(private modalService: BsModalService) {

  }

  public jogo:any


    games: Array<any> = [
    {url:'../assets/csgo.png', title:'CSGO', description:'FPS,Multiplayer, Competitivo Adrenalina', id:'661', preco:9.90, data:"12/02/2012"},
    {url:'../assets/newWorld.jpg', title:'New World', description:'RPG,Multiplayer, Competitivo', id:'662', preco:91.90, data:"15/03/2015"},
    {url:'../assets/Minecraft.png', title:'Minecraft', description:'RPG,Multiplayer, Competitivo', id:'663', preco:5.90,  data:"16/02/2020"},
    {url:'../assets/Second.jpg', title:'Second Life', description:'Arcade,Multiplayer, Competitivo', id:'664', preco:8.90, data:"17/05/2012"},
    {url:'../assets/Call.jpg', title:'Call Od Dutty Black Ops', description:'FPS,Multiplayer, Competitivo', id:'665', preco:12.90, data:"16/05/2018"},
    {url:'../assets/wow-mobile.jpeg', title:'World War Carft', description:'RPG,Multiplayer, Competitivo', id:'665', preco:9.90, data:"17/18/2010"}
]
  
  modalRef?: BsModalRef;
  
 



 infoCard(){

 }
 
 
  openModal(t:TemplateRef<any>,g:any) {

    g ? this.jogo = g : ""
  
    
    
    this.modalRef = this.modalService.show(t);
  
  }

 
 
  ngOnInit(): void {
  }
}

