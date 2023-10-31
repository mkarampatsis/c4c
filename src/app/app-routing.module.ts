import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'home',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent)
  },
  {
    path: 'home/pricing',
    loadComponent: () => import('./pages/home/pricing/pricing.component').then(m => m.PricingComponent)
  },
  {
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'user/account',
    loadComponent: () => import('./pages/user/account/account.component').then(m => m.AccountComponent)
  },
  {
    path: 'user/login',
    loadComponent: () => import('./pages/user/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'user/forgot',
    loadComponent: () => import('./pages/user/forgot/forgot.component').then(m => m.ForgotComponent)
  },
  {
    path: 'user/register',
    loadComponent: () => import('./pages/user/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'user/welcome',
    loadComponent: () => import('./pages/user/welcome/welcome.component').then(m => m.WelcomeComponent)
  },
  {
    path: 'user/user-evaluation',
    loadComponent: () => import('./pages/user/user-evaluation/user-evaluation.component').then(m => m.UserEvaluationComponent)
  },
  {
    path: 'footer/legal-notices',
    loadComponent: () => import('./pages/footer/legal-notices/legal-notices.component').then(m => m.LegalNoticesComponent)
  },
  {
    path: 'footer/privacy-notice',
    loadComponent: () => import('./pages/footer/privacy-notice/privacy-notice.component').then(m => m.PrivacyNoticeComponent)
  },
  {
    path: 'footer/gdpr',
    loadComponent: () => import('./pages/footer/gdpr/gdpr.component').then(m => m.GdprComponent)
  },
  {
    path: 'footer/cookies-policy',
    loadComponent: () => import('./pages/footer/cookies-policy/cookies-policy.component').then(m => m.CookiesPolicyComponent)
  },
  {
    path: 'admin/dashboard',
    loadComponent: () => import('./pages/admin/dashboard/dashboard.component').then(m => m.DashboardComponent)
  },
  {
    path: 'admin/reports',
    loadComponent: () => import('./pages/admin/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'learner/learning-path',
    loadComponent: () => import('./pages/learner/learning-path/learning-path.component').then(m => m.LearningPathComponent)
  },
  {
    path: 'learner/reports',
    loadComponent: () => import('./pages/learner/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'learner/evaluate',
    loadComponent: () => import('./pages/learner/evaluate/evaluate.component').then(m => m.EvaluateComponent)
  },
  {
    path: 'learner/evaluation',
    loadComponent: () => import('./pages/learner/evaluation-form/evaluation-form.component').then(m => m.EvaluationFormComponent)
  },
  {
    path: 'instructor/authoring',
    loadComponent: () => import('./pages/instructor/authoring/authoring.component').then(m => m.AuthoringComponent)
  },
  {
    path: 'instructor/register',
    loadComponent: () => import('./pages/instructor/register/register.component').then(m => m.RegisterComponent)
  },
  {
    path: 'instructor/reports-evaluations',
    loadComponent: () => import('./pages/instructor/reports-evaluations/reports-evaluations.component').then(m => m.ReportsEvaluationsComponent)
  },
  {
    path: 'instructor/evaluate-eo',
    loadComponent: () => import('./pages/instructor/reports-evaluations/evaluate-eo/evaluate-eo.component').then(m => m.EvaluateEoComponent)
  },
  {
    path: 'instructor/reports-eo',
    loadComponent: () => import('./pages/instructor/reports-evaluations/reports-eo/reports-eo.component').then(m => m.ReportsEoComponent)
  },
  {
    path: 'learn-js-python-page',
    loadComponent: () => import('./pages/learn-js-python-page/learn-js-python-page.component').then(m => m.LearnJsPythonPageComponent)
  },
  {
    path: 'authoring-page',
    loadComponent: () => import('./pages/authoring-page/authoring-page.component').then(m => m.AuthoringPageComponent)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
