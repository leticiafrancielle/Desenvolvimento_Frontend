import { Component } from '@angular/core';
import Analista from 'src/app/models/analista';
import Gestor from 'src/app/models/gestor';

@Component({
  selector: 'app-funcionarios',
  templateUrl: './funcionarios.component.html',
  styleUrls: ['./funcionarios.component.css']
})
export class FuncionariosComponent {

  public analistas: Analista[] = new Array<Analista>();
  public gestor: Gestor = new Gestor("Marcia", 17643, "Gestora de TI", [])


  constructor(){
    this.analistas.push(new Analista("Júlia", 638458, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Ana", 875458, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Marcelo", 934580, "Analista de cloud", this.gestor.nome));
    this.analistas.push(new Analista("José", 631265, "Analista de negócios", this.gestor.nome));
    this.analistas.push(new Analista("Eduarda", 628658, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Angelo", 552438, "Analista de sistemas", this.gestor.nome));
    this.analistas.push(new Analista("Marcio", 652638, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Eduardo", 524358, "Analista de cyber-security", this.gestor.nome));
    this.analistas.push(new Analista("Letícia", 637625, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Francielle", 658762, "Analista de negócios", this.gestor.nome));
    this.analistas.push(new Analista("Luiza", 138192, "Analista de cloud", this.gestor.nome));
    this.analistas.push(new Analista("Eric", 258058, "Analista de dados", this.gestor.nome));
    this.analistas.push(new Analista("Joelma", 608358, "Analista de infraestrutura", this.gestor.nome));
    this.analistas.push(new Analista("Fabio", 890388, "Analista de cyber-security", this.gestor.nome));
    this.analistas.push(new Analista("Josenir", 123563, "Analista de dados", this.gestor.nome));

    this.gestor.nomeSubordinados = this.analistas.map(analista => analista.nome);
  }

}
