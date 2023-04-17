import { Component, OnInit } from '@angular/core';
import { Todo, TodosService } from 'src/app/services/todos.service';

@Component({
    selector: 'app-http-client-form',
    templateUrl: './http-client-form.component.html'
})

export class HttpClientFormComponent implements OnInit{

    todos: Todo[] = [];

    todoTitle = '';

    loading = false;

    error = false;

    errorMessage = '';

    constructor( private todosService: TodosService ) {

    }
    ngOnInit(): void {
        this.fetchTodos();
    }

    addTodo() {
        if(!this.todoTitle.trim()) {
            return
        }

        this.todosService.addTodo({
            title: this.todoTitle,
            completed: false
        })
        .subscribe(response => {
            this.todos.push(response)
        });

        this.todoTitle = '';
    }

    fetchTodos() {
        this.loading = true;

        this.todosService.fetchTodos()
        .subscribe(response => {
            this.todos = response;
            this.loading = false;
        });
    }

    removeTodo(id?: number) {
        this.todosService.removeTodo(id)
        .subscribe(() => {
            this.todos = this.todos.filter(t => t.id !== id);
        })
    }

    completeTodo(id: any) {
        this.todosService.completeTodo(id)
        .subscribe({
            next: todo => {
                const item = this.todos.find(t => t.id === todo.id);
                if(item) {
                    item.completed = true;
                }
            },
            error: error => {
                this.error = true;
                this.errorMessage = error.message;

                setTimeout(() => {
                    this.error = false;
                }, 5000);
            }
        })
    }
}
