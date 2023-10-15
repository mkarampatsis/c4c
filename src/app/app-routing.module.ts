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
    path: 'about',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent)
  },
  {
    path: 'account',
    loadComponent: () => import('./pages/user/account/account.component').then(m => m.AccountComponent)
  },
  {
    path: 'login',
    loadComponent: () => import('./pages/login/login.component').then(m => m.LoginComponent)
  },
  {
    path: 'forgot',
    loadComponent: () => import('./pages/forgot/forgot.component').then(m => m.ForgotComponent)
  },
  {
    path: 'register',
    loadComponent: () => import('./pages/user/register/register.component').then(m => m.RegisterComponent)
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
    path: 'trainee/trainning',
    loadComponent: () => import('./pages/trainee/trainning/trainning.component').then(m => m.TrainningComponent)
  },
  {
    path: 'trainee/reports',
    loadComponent: () => import('./pages/trainee/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'trainee/evaluate',
    loadComponent: () => import('./pages/trainee/evaluate/evaluate.component').then(m => m.EvaluateComponent)
  },
  {
    path: 'trainee/evaluation',
    loadComponent: () => import('./pages/trainee/evaluation-form/evaluation-form.component').then(m => m.EvaluationFormComponent)
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
    path: 'instructor/reports',
    loadComponent: () => import('./pages/instructor/reports/reports.component').then(m => m.ReportsComponent)
  },
  {
    path: 'instructor/evaluate-eo',
    loadComponent: () => import('./pages/instructor/evaluate-eo/evaluate-eo.component').then(m => m.EvaluateEoComponent)
  },
  {
    path: 'instructor/reports-eo',
    loadComponent: () => import('./pages/instructor/reports-eo/reports-eo.component').then(m => m.ReportsEoComponent)
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
