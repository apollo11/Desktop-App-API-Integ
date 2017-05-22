import { Component, OnInit, ElementRef, Renderer } from '@angular/core';

import { Router } from '@angular/router';
import { AuthService } from '../../auth/auth.service';
import { TranslateService } from '@ngx-translate/core';

@Component({
    moduleId: module.id,
    selector: 'app-menu',
    templateUrl: './menu.component.html',
    styleUrls: ['./menu.component.css'],
    host: {
        '(document:click)': 'onClick($event)',
    },
})

export class MenuComponent implements OnInit {

    showNavOptns: boolean = false;
    lang: string = this.translate.currentLang;
    constructor(
        private authService: AuthService,
        private translate: TranslateService,
        private el: ElementRef,
        private renderer: Renderer) {
    }

    navSubLink() {
        this.showNavOptns = true;
        // console.log('menu Sub ' + this.showNavOptns);
    }

    navLink() {
        if (this.showNavOptns) {
            this.showNavOptns = false;
        }
        // console.log('menu sub link ' + this.showNavOptns);
    }

    onClick(event) {
        if (!this.el.nativeElement.contains(event.target)) { // or some similar check
            this.showNavOptns = false;
            $('.c-nav').find('.is-active').removeClass('is-active');
        }
        // console.log('menu doc ' + this.showNavOptns);
    }

    ngOnInit() {

    }

}
