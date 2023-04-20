import { Post } from '../../blog/blog.component';
import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
    selector: 'app-post-form',
    templateUrl: './post-form.component.html',
})


export class PostFormComponent implements OnInit {

    @Output() onAdd = new EventEmitter<Post>();

    form: FormGroup;

    ngOnInit() {
        this.form = new FormGroup({
            titleInput: new FormControl('', Validators.required),
            textInput: new FormControl('', Validators.required)
        });
    }

    onSubmit() {
        if (this.form.valid) {
            const post = {
                title: this.form.controls['titleInput'].value,
                text: this.form.controls['textInput'].value
            }

            this.onAdd.emit(post);
            this.form.reset();
        }
    }
}
