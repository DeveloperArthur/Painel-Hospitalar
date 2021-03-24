import { Component, OnInit } from '@angular/core';
import { PainelService } from 'src/app/service/painel.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Router } from '@angular/router';

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.css']
})
export class AdminComponent implements OnInit {
  pacientesChamados: any[] = [];
  public pacienteForm!: FormGroup;

  constructor(private service: PainelService, private fb: FormBuilder,
    private snackBar: MatSnackBar, private router: Router) { }

  ngOnInit(): void {
    this.pacientesChamados = this.service.getPacientesChamados();
    this.pacienteForm = this.fb.group({
      senha: ['', [Validators.required]],
      sala: ['', [Validators.required]]
    });
  }

  chamaPaciente() {
    try {
      this.service.chamaPaciente(this.pacienteForm.value);
      this.mostraMensagemDeSucesso();
    }
    catch (error) {
      this.mostraMensagemDeErro();
    }
  }

  mostraMensagemDeSucesso() {
    this.snackBar.open("Paciente chamado com sucesso", 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-success']
    });
  }

  mostraMensagemDeErro() {
    this.snackBar.open("Ocorreu um erro ao tentar chamar este paciente", 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-error']
    });
  }

  navegaParaPainel(){
    this.router.navigate(["/"]);
  }

}
