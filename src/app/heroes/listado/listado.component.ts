import { Component} from '@angular/core';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent  {

  heroes : string[] = ['spiderman','Iromman','Hulk','Thor','Capitan America'];
  heroeBorrado :string = '';


  borraHeroe():void{
    this.heroeBorrado =  this.heroes.shift() ||'';

  }
}
