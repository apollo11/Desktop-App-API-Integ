import {Component, OnInit}                  from '@angular/core';

import 'rxjs/add/operator/toPromise';

import {SecurityQuestion}                   from './security-question';
import {SecurityQuestionService}            from './security-question.service';

import { Modal }               from "../elements/modal/modal.module";

@Component({
    moduleId: module.id,
    selector: 'app-security-question',
    templateUrl: './security-question.component.html',
    styleUrls: ['./security-question.component.css'],
    providers: [SecurityQuestionService]
})

@Modal()

export class SecurityQuestionComponent implements OnInit {
    
    securityQuestions: SecurityQuestion[];
    errorMessage: string;

    constructor(private securityQuestionService: SecurityQuestionService) {
    }

    /**
     * Get Security Questions
     */
    getSecurityQuestion() {
        this.securityQuestionService.getSecurityQuestion()
            .subscribe(
                securityQuestions => this.securityQuestions = securityQuestions,
                error => this.errorMessage = <any>error);
    }

    // TODO: Remove this when we're done
    get diagnostic() {
        return JSON.stringify(this.securityQuestions);
    }

    ngOnInit() {
        this.getSecurityQuestion();
    }

}