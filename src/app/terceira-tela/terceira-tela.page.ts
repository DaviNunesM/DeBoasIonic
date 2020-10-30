import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-terceira-tela',
  templateUrl: './terceira-tela.page.html',
  styleUrls: ['./terceira-tela.page.scss'],
})
export class TerceiraTelaPage implements OnInit {

  constructor(private router: Router) {}
  _quarta_tela(){
    this.router.navigate(['/objetivos'])
  }

  ngOnInit() {
  }

}
