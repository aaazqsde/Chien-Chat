import {Component} from '@angular/core';

@Component({
  selector: 'page-404',
  template: `

  <div class='center'>
        <img src="http://tv.gentside.com/cf/thumbnails/14544-w620.jpg"/>
        <h1>Hey, cette page n'existe pas !</h1>
        <a routerLink="/animaux" class="waves-effect waves-teal btn-flat">
          Retourner à l' accueil
        </a>
      </div>

  `
})
export class PageNotFoundComponent {}
