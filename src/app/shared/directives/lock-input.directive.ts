import { Directive, Input, Output, EventEmitter } from '@angular/core';
import { NgModel } from '@angular/forms';

@Directive({
  selector: '[LockInput]',
  providers: [NgModel],
  host: {
    '(keyup)' : 'onInputChange($event.target.value)',    
    //'(keydown)' : 'onInputChange($event.target.value)',        
    '(keydown.backspace)': 'onInputChange($event.target.value, true)'
  }
})
export class LockInputDirective {
 
 @Output() ngModelChange: EventEmitter<any> = new EventEmitter(false);

  constructor(private model:NgModel) { }

  onInputChange(event,backspace){

    if(backspace){
        this.ngModelChange.emit(""); 
        return;
    }  

    event = event.substring(0, event.length - 1);    
    this.ngModelChange.emit(event); 
    //this.model.valueAccessor.writeValue(event);
    return;    
  }

}
