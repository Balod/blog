import { FormComponent } from './form/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HttpClientFormComponent } from './httpClientForm/http-client-form/http-client-form.component';

const routes: Routes = [
    {path: '', component: BlogComponent},
    {path: 'form', component: FormComponent},
    {path: 'httpClientForm', component: HttpClientFormComponent}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
