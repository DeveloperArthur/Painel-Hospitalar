import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PainelService {
  pacientesChamados: any[] = [];

  constructor() { }

  validaCredencial(credencial: any){
    if (credencial.usuario == "admin" && credencial.senha == "admin")
      return true;
    return false;
  }

  getPacientesChamados(){
    return this.pacientesChamados;
  }

  chamaPaciente(paciente: any){
    this.pacientesChamados.push(paciente);
  }

  deletaPaciente(indexLastPacienteChamado: number){
    this.pacientesChamados.splice(indexLastPacienteChamado);
  }
}
