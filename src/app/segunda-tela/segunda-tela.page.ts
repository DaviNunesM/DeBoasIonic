import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';


@Component({
  selector: 'app-segunda-tela',
  templateUrl: './segunda-tela.page.html',
  styleUrls: ['./segunda-tela.page.scss'],
})
export class SegundaTelaPage implements OnInit {

  constructor(private router: Router) {}
  _terceira_tela(){
    this.router.navigate(['/terceira-tela'])
  }

  ngOnInit() {
  }

}
