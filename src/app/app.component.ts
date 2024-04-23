import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'calculator';
  callvalue:number=0;
  funcT:any='nofunction';
  callnumber:string='novalue'
  firstnumber:number=0;
  secondnumber:number=0;
  onclickvalue(val:string,type:any){
    if(type=='number'){
      this.onNumberClick(val);
    }
    else if(type=='function'){
      this.onFunctionClick(val);
    }
  }
  onNumberClick(val:string)
  {
    if(this.callnumber!='novalue'){
      this.callnumber=this.callnumber+val;
    }
    else{
      this.callnumber=val;
    }
    this.callvalue=parseFloat(this.callnumber);

  }
  onFunctionClick(val:string){
    if(val=='AC')
    {
      this.clearvalue();
    }
    if(val=='DE')
    {
      this.deletevalue();
    }

    if(this.funcT=='nofunction')
    {
      this.firstnumber=this.callvalue;
      this.callvalue=0;
      this.callnumber='novalue';
      this.funcT=val;
    }
    else if(this.funcT!='nofunction')
    {
      this.secondnumber=this.callvalue;
      //lets do the calculation
      this.valuecalculate(val);
    }
  }
  valuecalculate(val:string){
    if(this.funcT=='+')
    {
      const total=this.firstnumber+this.secondnumber;
      this.totalassignvalue(total,val);
      if(val=='='){
        this.onequalpress();
      }
    } 
  

    if(this.funcT=='-')
    {
      const total=this.firstnumber-this.secondnumber;
      this.totalassignvalue(total,val);
      if(val=='='){
        this.onequalpress();
      }
    } 

    if(this.funcT=='*')
    {
      const total=this.firstnumber*this.secondnumber;
      this.totalassignvalue(total,val);
      if(val=='='){
        this.onequalpress();
      }
    } 

    if(this.funcT=='/')
    {
      const total=this.firstnumber/this.secondnumber;
      this.totalassignvalue(total,val);
      if(val=='='){
        this.onequalpress();
      }
    } 
    if(this.funcT=='%')
    {
      const total=this.firstnumber%this.secondnumber;
      this.totalassignvalue(total,val);
      if(val=='='){
        this.onequalpress();
      }
    } 
  }
  totalassignvalue(total:number,val:string){
    this.callvalue=total;
    this.firstnumber=total;
    this.secondnumber=0;
    this.callnumber='novalue'
    this.funcT=val;

  }
  onequalpress(){
    this.firstnumber=0;
    this.secondnumber=0;
    this.funcT='nofunction';
    this.callnumber='novalue';
  }
  clearvalue(){
    this.firstnumber=0;
    this.secondnumber=0;
    this.callvalue=0;
    this.funcT='nofunction';
    this.callnumber='novalue';
  }
  deletevalue(){
    this.firstnumber=0;
    this.secondnumber=0;
    this.callvalue=0;
    this.funcT='nofunction';
    this.callnumber='novalue';
  }

  }

