import {
  Component,
  OnInit,
  Input,
  SimpleChanges,
  OnChanges,
  DoCheck,
  AfterViewInit,
  AfterViewChecked,
  AfterContentChecked,
  AfterContentInit, OnDestroy
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],


})
export class ServerElementComponent implements
                    OnInit, OnChanges, DoCheck, AfterViewInit, AfterViewChecked,
                    AfterContentChecked, AfterContentInit, OnDestroy{
@Input('srvElement') element: {type: string, name: string, content: string };
  constructor() {
    console.log('constructor called');
  }
  ngOnChanges(changes: SimpleChanges) {

    console.log('ngOnchanges called');
    console.log(changes);
  }
  ngOnInit() {
    console.log('ngOnInit called');
  }
  ngDoCheck() {
    console.log('docheck called');
  }
  ngAfterContentInit(){
    console.log('after content initiated called');
  }
  ngAfterContentChecked(){
    console.log('after content checked called');
  }
  ngAfterViewInit() {
    console.log('after view init called');
  }
  ngAfterViewChecked() {
  console.log('after view checked called');
}
ngOnDestroy(){
    console.log('ng on Destroy called');
}


}
