import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'password'
})
export class PasswordPipe implements PipeTransform {

  transform(value: string, activar:boolean=false): string {
    /*if(activar){//true
      let final:string='';
      for(var index of value){
      final=final+'*';
      }
      return final;
    }else{
      return value;
    }*/
    return (activar)?'*'.repeat(value.length):value;
  }

}
