import { Component }    from "@angular/core";
import {Router}         from '@angular/router';
import { Modal }        from "./modal.module";

@Component({
    moduleId: module.id,
    selector: "modal",
    templateUrl: './success-modal.component.html',
})

@Modal()

export class SuccessModalComponent {
    constructor(private router: Router) {}


    // MODAL
    modalId: string = 'modalSuccess';
    ok: Function;
    destroy: Function;
    closeModal: Function;

    successType;

    onOk(): void{
        //this.closeModal();
        //this.destroy();
        location.replace('/home');
        //this.router.navigate(['/home']);
    }

    onOkChwd(): void{
        this.closeModal();
        this.destroy();
        this.router.navigate(['/login']);
    }


}