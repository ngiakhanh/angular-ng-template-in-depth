import { Component, OnInit, Input, TemplateRef, ContentChild, ContentChildren, QueryList  } from '@angular/core';
import {MarkDirective} from '../mark.directive';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input()
  templateInput: TemplateRef<any>;
  @Input()
  templateInput1: TemplateRef<any>;
  @Input()
  templateInput2: TemplateRef<any>;

  @ContentChild(TemplateRef)
  contentChild: TemplateRef<any>;

  @ContentChildren(TemplateRef)
  contentChildren: QueryList<TemplateRef<any>>;

  contentChildrenArray: Array<TemplateRef<any>> = [];

  @ContentChildren(TemplateRef,  {descendants: true})
  contentChildrenDescendant: QueryList<TemplateRef<any>>;


  constructor() { }

  ngOnInit() {
  }

  ngAfterContentInit() {
    this.contentChildrenArray = this.contentChildren.toArray();
  }
}