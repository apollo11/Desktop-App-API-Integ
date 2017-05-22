import { Component, OnInit, ElementRef } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

@Component({
  selector: '[language-selector]',
  templateUrl: './language.component.html',
  styleUrls: ['./language.component.css'],
  host: {
    '(document:click)': 'onClick($event)',
  },
})
export class LanguageComponent implements OnInit {

  showLangOptns: boolean = false;
  langCode = !localStorage.getItem('lang') ? 'en' : localStorage.getItem('lang');

  constructor(
    private translate: TranslateService,
    private el: ElementRef
  ) {
    translate.addLangs(["en", "zh-hans"]);
    translate.setDefaultLang(this.langCode);

    let browserLang = this.langCode;
    translate.use(browserLang.match(/en|zh-hans/) ? browserLang : 'zh-hans');

    translate.onLangChange.subscribe(() => {
      localStorage.setItem('lang', translate.currentLang);
    });
  }

  toggleLangOptns() {
    if (this.showLangOptns) {
      this.showLangOptns = false;
    } else {
      this.showLangOptns = true
    }
  }

  onClick(event) {
    if (!this.el.nativeElement.contains(event.target)) { // or some similar check
      this.showLangOptns = false;
    }
    // console.log('lang ' + this.showLangOptns);
  }

  ngOnInit() {
  }

}
