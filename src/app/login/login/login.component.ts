import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { UsuarioModel } from '../../models/usuario.model';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {


  usuario: UsuarioModel = new UsuarioModel();

  constructor(private router: Router) { }

  ngOnInit(): void {
  }

  login( form: NgForm) {

    if(form.invalid) { return;}

    console.log('Formulario enviado');
    this.router.navigateByUrl('/players');
  }




}
