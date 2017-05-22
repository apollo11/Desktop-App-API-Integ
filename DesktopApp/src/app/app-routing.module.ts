import {NgModule}                                 from '@angular/core';
import {RouterModule, Routes}                     from '@angular/router';
import {AuthGuard}                                from './auth/auth-guard.service'

import {RegistrationComponent}                    from './registration/registration.component';
import {LoginComponent}                           from './login/login.component';
import {ForgotPasswordComponent}                  from './forgot-password/forgot-password.component';
import {ForgotPasswordResetComponent}             from './forgot-password-reset/forgot-password-reset.component';
import {ProfileComponent}                         from './profile/profile.component';
import {SecurityQuestionComponent}                from './security-question/security-question.component';
import {CountryComponent}                         from './country/country.component';
import {StateProvinceComponent}                   from './state-province/state-province.component';
import {OnlineDepositComponent}                   from './online-deposit/online-deposit.component';
import {OnlineDepositBankComponent}               from './online-deposit-bank/online-deposit-bank.component';
import {QuickDepositComponent}                    from './quick-deposit/quick-deposit.component';
import {QuickDepositMethodComponent}              from './quick-deposit-method/quick-deposit-method.component';
import {QuickDepositPreferredBankComponent}       from './quick-deposit-preferred-bank/quick-deposit-preferred-bank.component';
import {QuickDepositBankAccountComponent}         from './quick-deposit-bank-account/quick-deposit-bank-account.component';
import {QuickDepositGenerateUdaIdComponent}       from './quick-deposit-generate-uda-id/quick-deposit-generate-uda-id.component';
import {WechatComponent}                          from './wechat/wechat.component';
import {WithdrawalComponent}                      from './withdrawal/withdrawal.component';
import {WithdrawalTransactionComponent}           from './withdrawal-transaction/withdrawal-transaction.component';
import {BankComponent}                            from './bank/bank.component';
import {BankDetailComponent}                      from './bank-detail/bank-detail.component';
import {BankAddComponent}                         from './bank-add/bank-add.component';
import {DepositTransactionComponent}              from './deposit-transaction/deposit-transaction.component';

import {GamesComponent}                           from './games/games.component';
import {CasinoComponent}                          from './casino/casino.component';
import {PromotionComponent}                       from './promotion/promotion.component';
import {PromotionDetailComponent}                 from './promotion-detail/promotion-detail.component';
import {BannerComponent}                          from './banner/banner.component';
import {SportsComponent}                          from './sports/sports.component';
import {HomeComponent}                             from './home/home.component';

const routes: Routes = [
    {path: 'login', component: LoginComponent},
    {path: 'home', component: HomeComponent, canActivate: [AuthGuard]},
    {path: 'registration', component: RegistrationComponent},
    {path: 'forgotPassword', component: ForgotPasswordComponent},
    {path: 'resetPassword', component: ForgotPasswordResetComponent},
    {path: 'profile', component: ProfileComponent, canActivate: [AuthGuard]},
    {path: 'security-question', component: SecurityQuestionComponent, canActivate: [AuthGuard]},
    {path: 'country', component: CountryComponent, canActivate: [AuthGuard]},
    {path: 'state-province', component: StateProvinceComponent, canActivate: [AuthGuard]},
    {path: 'online-deposit', component: OnlineDepositComponent, canActivate: [AuthGuard]},
    {path: 'online-deposit-bank', component: OnlineDepositBankComponent, canActivate: [AuthGuard]},
    {path: 'quick-deposit', component: QuickDepositComponent, canActivate: [AuthGuard]},
    {path: 'quick-deposit-method', component: QuickDepositMethodComponent, canActivate: [AuthGuard]},
    {path: 'quick-deposit-preferred-bank', component: QuickDepositPreferredBankComponent, canActivate: [AuthGuard]},
    {path: 'quick-deposit-bank-account', component: QuickDepositBankAccountComponent, canActivate: [AuthGuard]},
    {path: 'quick-deposit-generate-uda-id', component: QuickDepositGenerateUdaIdComponent, canActivate: [AuthGuard]},
    {path: 'wechat', component: WechatComponent, canActivate: [AuthGuard]},
    {path: 'withdrawal', component: WithdrawalComponent, canActivate: [AuthGuard]},
    {path: 'withdrawal-transaction', component: WithdrawalTransactionComponent, canActivate: [AuthGuard]},
    {path: 'bank', component: BankComponent, canActivate: [AuthGuard]},
    {path: 'bank/:id', component: BankDetailComponent, canActivate: [AuthGuard]},
    {path: 'bankAdd', component: BankAddComponent, canActivate: [AuthGuard]},
    {path: 'games/:category', component: GamesComponent, canActivate: [AuthGuard]},
    {path: 'games/:platform/:category', component: GamesComponent, canActivate: [AuthGuard]},
    {path: 'casino', component: CasinoComponent, canActivate: [AuthGuard]},
    {path: 'promotion', component: PromotionComponent, canActivate: [AuthGuard]},
    {path: 'promotion/:category', component: PromotionComponent, canActivate: [AuthGuard]},
    {path: 'details/:category/:id', component: PromotionDetailComponent, canActivate: [AuthGuard]},
    {path: 'banner', component: BannerComponent, canActivate: [AuthGuard]},
    {path: 'sports', component: SportsComponent, canActivate: [AuthGuard]},
    {path: 'deposit-history', component: DepositTransactionComponent, canActivate: [AuthGuard]},
    {path: '', redirectTo: '/home', pathMatch: 'full'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule]
})

export class AppRoutingModule {
}
