import {RouterModule, Routes}                     from '@angular/router';
import {AuthGuard}                                from '../auth/auth-guard.service';

import {HomeComponent}                            from '../home/home.component';
import {ProfileComponent}                         from '../profile/profile.component';
import {SecurityQuestionComponent}                from '../security-question/security-question.component';
import {CountryComponent}                         from '../country/country.component';
import {StateProvinceComponent}                   from '../state-province/state-province.component';
import {OnlineDepositComponent}                   from '../online-deposit/online-deposit.component';
import {OnlineDepositBankComponent}               from '../online-deposit-bank/online-deposit-bank.component';
import {QuickDepositComponent}                    from '../quick-deposit/quick-deposit.component';
import {QuickDepositMethodComponent}              from '../quick-deposit-method/quick-deposit-method.component';
import {QuickDepositPreferredBankComponent}       from '../quick-deposit-preferred-bank/quick-deposit-preferred-bank.component';
import {QuickDepositBankAccountComponent}         from '../quick-deposit-bank-account/quick-deposit-bank-account.component';
import {QuickDepositGenerateUdaIdComponent}       from '../quick-deposit-generate-uda-id/quick-deposit-generate-uda-id.component';
import {WechatComponent}                          from '../wechat/wechat.component';
import {WithdrawalComponent}                      from '../withdrawal/withdrawal.component';
import {WithdrawalTransactionComponent}           from '../withdrawal-transaction/withdrawal-transaction.component';
import {BankComponent}                            from '../bank/bank.component';
import {BankDetailComponent}                      from '../bank-detail/bank-detail.component';
import {BankAddComponent}                         from '../bank-add/bank-add.component';

import {GamesComponent}                           from '../games/games.component';
import {CasinoComponent}                          from '../casino/casino.component';
import {PromotionComponent}                       from '../promotion/promotion.component';
import {PromotionDetailComponent}                 from '../promotion-detail/promotion-detail.component';
import {BannerComponent}                          from '../banner/banner.component';
import {SportsComponent}                          from '../sports/sports.component';

export const SECURE_ROUTES: Routes = [
    {path: '', redirectTo: 'home', pathMatch: 'full'},
    {path: 'home', component: HomeComponent},
    {path: 'profile', component: ProfileComponent},
    {path: 'security-question', component: SecurityQuestionComponent},
    {path: 'country', component: CountryComponent},
    {path: 'state-province', component: StateProvinceComponent},
    {path: 'online-deposit', component: OnlineDepositComponent},
    {path: 'online-deposit-bank', component: OnlineDepositBankComponent},
    {path: 'quick-deposit', component: QuickDepositComponent},
    {path: 'quick-deposit-method', component: QuickDepositMethodComponent},
    {path: 'quick-deposit-preferred-bank', component: QuickDepositPreferredBankComponent},
    {path: 'quick-deposit-bank-account', component: QuickDepositBankAccountComponent},
    {path: 'quick-deposit-generate-uda-id', component: QuickDepositGenerateUdaIdComponent},
    {path: 'wechat', component: WechatComponent},
    {path: 'withdrawal', component: WithdrawalComponent},
    {path: 'withdrawal-transaction', component: WithdrawalTransactionComponent},
    {path: 'bank', component: BankComponent},
    {path: 'bank/:id', component: BankDetailComponent},
    {path: 'bankAdd', component: BankAddComponent},
    {path: 'games/:category', component: GamesComponent},
    {path: 'games/:platform/:category', component: GamesComponent},
    {path: 'casino', component: CasinoComponent},
    {path: 'promotion', component: PromotionComponent},
    {path: 'promotion/:category', component: PromotionComponent},
    {path: 'details/:category/:id', component: PromotionDetailComponent},
    {path: 'banner', component: BannerComponent},
    {path: 'sports/:lang', component: SportsComponent}  
];
