import {BrowserModule}                                              from '@angular/platform-browser';
import {NgModule}                                                   from '@angular/core';
import {CommonModule}                                               from '@angular/common';
import {FormsModule}                                                from '@angular/forms';
import {HttpModule, Http}                                           from '@angular/http';
import {TranslateModule, TranslateLoader}                           from '@ngx-translate/core';
import {TranslateHttpLoader}                                        from '@ngx-translate/http-loader';
import {SignalRModule, SignalRConfiguration}                        from 'ng2-signalr';

import {AppRoutingModule}                                           from './app-routing';

import {AppComponent}                                               from './app.component';
import {RegistrationComponent}                                      from './registration/registration.component';
import {LoginComponent}                                             from './login/login.component';
import {ForgotPasswordComponent}                                    from './forgot-password/forgot-password.component';
import {ForgotPasswordResetComponent}                               from './forgot-password-reset/forgot-password-reset.component';
import {ProfileComponent}                                           from './profile/profile.component';
import {SecurityQuestionComponent}                                  from './security-question/security-question.component';
import {CountryComponent}                                           from './country/country.component';
import {StateProvinceComponent}                                     from './state-province/state-province.component';
import {OnlineDepositComponent}                                     from './online-deposit/online-deposit.component';
import {OnlineDepositBankComponent}                                 from './online-deposit-bank/online-deposit-bank.component';
import {QuickDepositComponent}                                      from './quick-deposit/quick-deposit.component';
import {QuickDepositMethodComponent}                                from './quick-deposit-method/quick-deposit-method.component';
import {QuickDepositPreferredBankComponent}                         from './quick-deposit-preferred-bank/quick-deposit-preferred-bank.component';
import {QuickDepositBankAccountComponent}                           from './quick-deposit-bank-account/quick-deposit-bank-account.component';
import {QuickDepositGenerateUdaIdComponent}                         from './quick-deposit-generate-uda-id/quick-deposit-generate-uda-id.component';
import {WechatComponent}                                            from './wechat/wechat.component';
import {WithdrawalComponent}                                        from './withdrawal/withdrawal.component';
import {WithdrawalTransactionComponent}                             from './withdrawal-transaction/withdrawal-transaction.component';
import {BankComponent}                                              from './bank/bank.component';
import {BankDetailComponent}                                        from './bank-detail/bank-detail.component';
import {BankAddComponent}                                           from './bank-add/bank-add.component';
import {DepositTransactionComponent}                                from './deposit-transaction/deposit-transaction.component';
import { EmailVerificationComponent }                               from './email-verification/email-verification.component';
import { MobileVerificationComponent }                              from './mobile-verification/mobile-verification.component';
import { MobileEmailVerificationComponent }                         from './mobile-email-verification/mobile-email-verification.component';
import {ChangePasswordComponent}                                    from './change-password/change-password.component';

import {GamesComponent}                                             from './games/games.component';
import {CasinoComponent}                                            from './casino/casino.component';
import {PromotionComponent}                                         from './promotion/promotion.component';
import {PromotionDetailComponent}                                   from './promotion-detail/promotion-detail.component';
import {BannerComponent}                                            from './banner/banner.component';
import {SportsComponent}                                            from './sports/sports.component';
import { HomeComponent }                                            from './home/home.component';
import { FeaturedGamesComponent }                                   from './featured-games/featured-games.component';

import {RegistrationService}                                        from './registration/registration.service';
import {LoginService}                                               from './login/login.service';
import {ForgotPasswordService}                                      from './forgot-password/forgot-password.service';
import {ForgotPasswordResetService}                                 from './forgot-password-reset/forgot-password-reset.service';
import {ProfileService}                                             from './profile/profile.service';
import {SecurityQuestionService}                                    from './security-question/security-question.service';
import {CountryService}                                             from './country/country.service';
import {StateProvinceService}                                       from './state-province/state-province.service';
import {OnlineDepositService}                                       from './online-deposit/online-deposit.service';
import {OnlineDepositBankService}                                   from './online-deposit-bank/online-deposit-bank.service';
import {QuickDepositService}                                        from './quick-deposit/quick-deposit.service';
import {QuickDepositMethodService}                                  from './quick-deposit-method/quick-deposit-method.service';
import {QuickDepositPreferredBankService}                           from './quick-deposit-preferred-bank/quick-deposit-preferred-bank.service';
import {QuickDepositBankAccountService}                             from './quick-deposit-bank-account/quick-deposit-bank-account.service';
import {QuickDepositGenerateUdaIdService}                           from './quick-deposit-generate-uda-id/quick-deposit-generate-uda-id.service';
import {WechatService}                                              from './wechat/wechat.service';
import {WithdrawalService}                                          from './withdrawal/withdrawal.service';
import {WithdrawalTransactionService}                               from './withdrawal-transaction/withdrawal-transaction.service';
import {BankDetailService}                                          from './bank-detail/bank-detail.service';
import {BankAddService}                                             from './bank-add/bank-add.service';
import {DepositTransactionService}                                  from './deposit-transaction/deposit-transaction.service';
import {HeaderService}                                              from './layout/header/header.service';
import {EmailVerificationService}                                   from './email-verification/email-verification.service';
import {MobileVerificationService}                                  from './mobile-verification/mobile-verification.service';
import {ChangePasswordService}                                      from './change-password/change-password.service';
import {TransactionHistoryService}                                  from './transaction-history/transaction-history.service';


import {GamesService}                                               from './games/games.service';
import {CasinoService}                                              from './casino/casino.service';
import {PromotionService}                                           from './promotion/promotion.service';
import {PromotionDetailService}                                     from './promotion-detail/promotion-detail.service';
import {BannerService}                                              from './banner/banner.service';
import {SportsService}                                              from './sports/sports.service';
import {FeaturedGamesService}                                       from './featured-games/featured-games.service';

import {requestOptionsProvider}                                     from './default-request-option.service';
import {AuthService}                                                from './auth/auth.service';
import {AuthGuard}                                                  from './auth/auth-guard.service';

// import {DefaultLayoutComponent}                                  from './layout/default.component';
import {HeaderComponent}                                            from './layout/header/header.component';
import {FooterComponent}                                            from './layout/footer/footer.component';

import {MenuComponent}                                              from './elements/menu/menu.component';
import {LanguageComponent}                                          from './elements/language/language.component';

import {ModalModule}                                                from './elements/modal/modal.module';
import {SuccessModalComponent}                                      from "./elements/modal/success-modal.component";

// Shared
import {SharedModule}                                               from './shared/shared.module';

// Vendors
import { MalihuScrollbarModule, MalihuScrollbarService } from 'ngx-malihu-scrollbar';
import { GameFilterPipe } from './shared/game-filter.pipe';
import { MyDatePickerModule } from 'mydatepicker';
import { NgIdleKeepaliveModule } from '@ng-idle/keepalive'; // this includes the core NgIdleModule but includes keepalive providers for easy wireup
import { MomentModule } from 'angular2-moment';
import { TransactionHistoryComponent } from './transaction-history/transaction-history.component'; // optional, provides moment-style pipes for date formatting

export function createTranslateLoader(http: Http) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

// v2.0.0
export function createConfig(): SignalRConfiguration {
    const c = new SignalRConfiguration();
    c.hubName = 'walletBalance';
   c.url = 'http://prod.beachheadsolutionsinc.com/';
   //  c.url = 'http://uat.beachheadsolutionsinc.com/';
    //c.jsonp = true;
    //c.qs = 'myBalance';
    //c.createHubProxy('walletBalance');
    //c.logging = true;
    //console.log(c);
    //c.qs = { SignalRTokenId: localStorage.getItem('SignalRTokenId') };

    return c;
}

@NgModule({
    declarations: [
        AppComponent,
        RegistrationComponent,
        LoginComponent,
        ForgotPasswordComponent,
        ForgotPasswordResetComponent,
        ProfileComponent,
        SecurityQuestionComponent,
        CountryComponent,
        StateProvinceComponent,
        OnlineDepositComponent,
        OnlineDepositBankComponent,
        QuickDepositComponent,
        QuickDepositMethodComponent,
        QuickDepositPreferredBankComponent,
        QuickDepositBankAccountComponent,
        QuickDepositGenerateUdaIdComponent,
        WechatComponent,
        WithdrawalComponent,
        WithdrawalTransactionComponent,
        BankComponent,
        BankDetailComponent,
        GamesComponent,
        CasinoComponent,
        PromotionComponent,
        BankAddComponent,
        PromotionDetailComponent,
        MenuComponent,
        BannerComponent,
        SportsComponent,
        HeaderComponent,
        FooterComponent,
        LanguageComponent,
        HomeComponent,
        FeaturedGamesComponent,
        SuccessModalComponent,
        DepositTransactionComponent,
        EmailVerificationComponent,
        MobileVerificationComponent,
        GameFilterPipe,
        MobileEmailVerificationComponent,
        ChangePasswordComponent,
        TransactionHistoryComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        HttpModule,
        TranslateModule.forRoot({
            loader: {
                provide: TranslateLoader,
                useFactory: (createTranslateLoader),
                deps: [Http]
            }
        }),
        SignalRModule.forRoot(createConfig),
        CommonModule,
        ModalModule,
        MalihuScrollbarModule.forRoot(),
        SharedModule,
        AppRoutingModule,
        MyDatePickerModule,
        MomentModule,
        NgIdleKeepaliveModule.forRoot()
    ],
    providers: [
        RegistrationService,
        LoginService,
        ForgotPasswordService,
        ForgotPasswordResetService,
        ProfileService,
        SecurityQuestionService,
        CountryService,
        StateProvinceService,
        OnlineDepositService,
        OnlineDepositBankService,
        QuickDepositService,
        QuickDepositMethodService,
        QuickDepositPreferredBankService,
        QuickDepositBankAccountService,
        QuickDepositGenerateUdaIdService,
        WechatService,
        WithdrawalService,
        WithdrawalTransactionService,
        BankDetailService,
        BankAddService,
        HeaderService,
        EmailVerificationService,
        MobileVerificationService,
        requestOptionsProvider,
        GamesService,
        CasinoService,
        PromotionService,
        PromotionDetailService,
        BannerService,
        SportsService,
        FeaturedGamesService,
        AuthGuard,
        AuthService,
        MalihuScrollbarService,
        DepositTransactionService,
        ChangePasswordService,
        TransactionHistoryService
    ],
    bootstrap: [AppComponent]
})
export class AppModule {
}
