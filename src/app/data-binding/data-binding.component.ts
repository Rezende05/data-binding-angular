import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [AlertModule, FormsModule],
  templateUrl: './data-binding.component.html',
  styleUrl: './data-binding.component.css'
})
export class DataBindingComponent implements OnInit {

  url = 'http://loiane.com'
  angularClass = true
  urlImage = 'https://picsum.photos/seed/picsum/200/300'
  currentValue = ''
  saveValue = ''
  isMouseOver = false
  name = 'ABC'

  getValue(){
    return 1
  }

  clickButton(){
    alert('botão clicado!')
  }

  onKeyup(event: KeyboardEvent){
    this.currentValue = (<HTMLInputElement>event.target).value
  }

  onKeyup2(event: KeyboardEvent){
    this.name = (<HTMLInputElement>event.target).value
  }

  saveField(value: string){
    this.saveValue = value;
  }

  onMouseOverOut() {
    this.isMouseOver = !this.isMouseOver
  }

  getLikeClass(){
    return true
  }

  constructor() {

  }
  ngOnInit(): void {
      
  }
}
