import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { AlertModule } from 'ngx-bootstrap/alert';
import { InputPropertyComponent } from '../input-property/input-property.component';
import { OutputPropertyComponent } from '../output-property/output-property.component';
import { NgIf } from '@angular/common';

@Component({
  selector: 'app-data-binding',
  standalone: true,
  imports: [AlertModule, FormsModule, InputPropertyComponent, OutputPropertyComponent, NgIf],
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
  className = 'Angular'
  initialValue = 15
  delete= false

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

  onChangeValue(event: any){
    console.log(event.newValue)
  }

  deleteCycle() {
    this.delete = true
  }
  constructor() {

  }
  ngOnInit(): void {
      
  }
}
