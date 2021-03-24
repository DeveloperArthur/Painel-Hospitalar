import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router'
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { PainelService } from 'src/app/service/painel.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public credenciaisForm!: FormGroup;

  constructor(private router: Router, private fb: FormBuilder,
    private snackBar: MatSnackBar, private service: PainelService) { }

  ngOnInit(): void {
    this.credenciaisForm = this.fb.group({
      usuario: ['', [Validators.required]],
      senha: ['', [Validators.required]]
    });
  }

  fazLogin() {
    var credencialEhValida = this.validaCredencial();
    if (credencialEhValida)
      this.router.navigate(['/admin/acesso'], { skipLocationChange: true })
    else this.mostraMensagemDeErro();
  }

  validaCredencial() {
    return this.service.validaCredencial(this.credenciaisForm.value);
  }

  mostraMensagemDeErro() {
    this.snackBar.open("Credenciais inválidas", 'X', {
      duration: 3000,
      horizontalPosition: "right",
      verticalPosition: "top",
      panelClass: ['msg-error']
    });
  }

}
