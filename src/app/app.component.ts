import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

export interface Post {
    title: string
    text: string
    id?: number
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
    encapsulation: ViewEncapsulation.None,
})
export class AppComponent implements OnInit {
    title = 'Blog';
    today: number = Date.now();
    posts: Post[] = [
        {
            title: '1 title',
            text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus fugiat iste, corporis itaque cum rerum at ad totam explicabo maxime mollitia ut, reprehenderit dolores, odio voluptatum rem molestiae. Eos, et.',
            id: 1
        },
        {
            title: '2 title',
            text: 'Рандомный текст',
            id: 2
        }
    ]

    form!: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            titleInput: new FormControl('', Validators.required),
            textInput: new FormControl('', Validators.required)
        });

        console.log(this.form.valid);
    }

    onSubmit() {
        if(this.form.valid) {
            this.posts.push({
                title: this.form.controls['titleInput'].value,
                text: this.form.controls['textInput'].value,
                id: this.posts.length + 1
            });
        }
    }
}
