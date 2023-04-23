import { FormComponent } from './form/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HttpClientFormComponent } from './httpClientForm/http-client-form/http-client-form.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';

const routes: Routes = [
    {path: 'posts', component: PostsPageComponent},
    {path: 'posts/:id', component: PostPageComponent},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormComponent},
    {path: 'todos', component: HttpClientFormComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
