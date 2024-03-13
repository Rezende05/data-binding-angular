import { Component, OnInit } from '@angular/core';
import { AlertModule } from 'ngx-bootstrap/alert';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [AlertModule],
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

  getValue(){
    return 1
  }

  clickButton(){
    alert('botão clicado!')
  }

  onKeyup(event: KeyboardEvent){
    this.currentValue = (<HTMLInputElement>event.target).value
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
