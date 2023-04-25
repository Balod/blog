import { FormComponent } from './form/form/form.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HttpClientFormComponent } from './httpClientForm/http-client-form/http-client-form.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
import { AboutComponent } from './about/about.component';
import { AboutExtraComponent } from './about-extra/about-extra.component';
import { ErrorPageComponent } from './error-page/error-page.component';
import { AuthGuard } from './guard/auth.guard';
import { HomePageComponent } from './home-page/home-page.component';
import { PostResolver } from './shared/post.resolver';

const routes: Routes = [
    {path: '', component: HomePageComponent},
    {path: 'posts', component: PostsPageComponent},
    {path: 'posts/:id', component: PostPageComponent, resolve: {post: PostResolver}},
    {path: 'blog', component: BlogComponent},
    {path: 'form', component: FormComponent},
    {
        path: 'todos',
        component: HttpClientFormComponent,
        canActivate: [AuthGuard]
    },
    {path: 'about', component: AboutComponent, canActivateChild: [AuthGuard], children: [
        {path: 'extra', component: AboutExtraComponent}
    ]},
    {path: 'error', component: ErrorPageComponent},
    {path: '**', redirectTo: '/error'}
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule]
})
export class AppRoutingModule { }
