import { Component, ElementRef, EventEmitter, Input, OnInit, Output, ViewChild} from '@angular/core';

@Component({
  selector: 'app-output-property',
  standalone: true,
  imports: [],
  templateUrl: './output-property.component.html',
  styleUrl: './output-property.component.css'
})
export class OutputPropertyComponent implements OnInit{

  @Input() value = 0

  @Output() changeValue = new EventEmitter()

  @ViewChild('valueField') valueFieldInput!: ElementRef

  increment() {
    console.log(this.valueFieldInput)
    this.valueFieldInput.nativeElement.value++
    this.changeValue.emit({newValue: this.value})
  }

  decrement() {
    this.valueFieldInput.nativeElement.value--
    this.changeValue.emit({newValue: this.value})
  }

  constructor() {
  }

  ngOnInit(): void {}
}
