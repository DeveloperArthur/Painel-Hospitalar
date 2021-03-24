import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PainelService } from 'src/app/service/painel.service';

@Component({
  selector: 'app-painel',
  templateUrl: './painel.component.html',
  styleUrls: ['./painel.component.css']
})
export class PainelComponent implements OnInit {
  sala!: string;
  senhaAtual!: string;
  pacientesChamados: any[] = [];

  constructor(private service: PainelService, private router: Router) { }

  ngOnInit(): void {
    this.pacientesChamados = this.service.getPacientesChamados();
    this.organizaDadosNaTela();
  }

  organizaDadosNaTela() {
    var indexLastPacienteChamado = this.getIndexLastPacienteChamado();
    var pacienteAtual = this.getUltimoPacienteChamado(indexLastPacienteChamado);
    this.senhaAtual = pacienteAtual.senha;
    this.sala = pacienteAtual.sala;
    //this.deletaUltimoPacienteChamadoDaListagem(indexLastPacienteChamado);
    this.pacientesChamados = this.getListaOrdenada();
  }

  getIndexLastPacienteChamado(){
    return this.pacientesChamados.length - 1;
  }

  getUltimoPacienteChamado(indexLastPacienteChamado: number){
    return this.pacientesChamados[indexLastPacienteChamado];
  }

  deletaUltimoPacienteChamadoDaListagem(indexLastPacienteChamado: number){
    this.pacientesChamados.splice(indexLastPacienteChamado);
  }

  getListaOrdenada(){
    return this.pacientesChamados.reverse();
  }
}
