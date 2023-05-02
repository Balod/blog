import { FormComponent } from './form/form/form.component';
import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './blog/blog.component';
import { HttpClientFormComponent } from './httpClientForm/http-client-form/http-client-form.component';
import { PostPageComponent } from './post-page/post-page.component';
import { PostsPageComponent } from './posts-page/posts-page.component';
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
    {path: 'error', component: ErrorPageComponent},
    {
        path: 'about',
        loadChildren: () => import('./about/about.module').then(m => m.AboutModule)
    },
    {path: '**', redirectTo: '/error'}
];

@NgModule({
    imports: [
        RouterModule.forRoot(routes, {
            preloadingStrategy: PreloadAllModules
        })
    ],
    exports: [RouterModule]
})
export class AppRoutingModule { }
