import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-item',
  templateUrl: './item.component.html',
  styleUrls: ['./item.component.scss']
})
export class ItemComponent implements OnInit {

  lista0 = [
    {
      title: "Take a walk with my cat",
      isDone: false,

    },
    {
      title: "Learn to code",
      isDone: false
    },


  ]

  lista1 = [
    {
      title: "Have my nails done",
      isDone: false
    },
    {
      title: "Workout",
      isDone: false
    },

  ]

  lista2 = [
    {
      title: "Arrange touristic flight to space",
      isDone: true
    },
    {
      title: "Travel to the moon",
      isDone: true
    },


  ]
  name:string = "";

  clickAdd(){
  this.lista1.unshift({"title":this.name, isDone: false})
}

Cambiar0(index:any){
  const addthings = this.lista0.splice(index,1);
  this.lista2.push({"title":addthings[0].title, isDone:true})
}
Cambiar1(index:any){
  const addthings = this.lista1.splice(index,1);
  this.lista2.push({"title":addthings[0].title, isDone:true})
}
Cambiar2(index:any){
  const addthings = this.lista2.splice(index,1);
  this.lista1.push({"title":addthings[0].title, isDone:false})
}
CambiarFavAdd(index:any){
  const addthings = this.lista1.splice(index,1);
  this.lista0.unshift({"title":addthings[0].title, isDone:false})
}
CambiarFavRemove(index:any){
  const addthings = this.lista0.splice(index,1);
  this.lista1.unshift({"title":addthings[0].title, isDone:false})
}



  constructor() { }

  ngOnInit(): void {
  }

}
