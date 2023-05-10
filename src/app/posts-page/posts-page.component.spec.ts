import { EMPTY, of } from 'rxjs';
import { PostService } from './../services/posts.service';
import { PostsPageComponent } from './posts-page.component';

describe('PostsPageComponent', () => {
    let component: PostsPageComponent;
    let service: PostService;

    beforeEach(() => {
        const spy = jasmine.createSpyObj('HttpClient', { post: of({}), get: of({}) })
        service = new PostService(spy);
        component = new PostsPageComponent(service);
    });

    it('should call fetch when ngOnInit', () => {
        const spy = spyOn(service, 'fetchPosts').and.callFake(() => {
            return EMPTY;
        });

        component.ngOnInit();

        expect(spy).toHaveBeenCalled();
    });

    it('should upbate posts length after ngOnInit', () => {
        const posts = [1,2,3,4];

        spyOn(service, 'fetchPosts').and.returnValue(of(posts));

        component.ngOnInit();

        expect(component.posts.length).toBe(posts.length);
    });

    it('should add post in posts', () => {
        const post = {title: 'test'}
        const spy = spyOn(service, 'create').and.returnValue(of(post));

        component.add(post.title);

        expect(spy).toHaveBeenCalled();
        expect(component.posts2.length).toBe(2);
    });

    it('should remove post if user confirms', () => {
       const spy = spyOn(service, 'remove').and.returnValue(EMPTY);
       const id = '1';

       spyOn(window, 'confirm').and.returnValue(true);

       component.del(id);

       expect(spy).toHaveBeenCalledWith(id);
    });

    it('should not remove post if user dont confirm', () => {
        const spy = spyOn(service, 'remove').and.returnValue(EMPTY);

        spyOn(window, 'confirm').and.returnValue(false);

        component.del('1');

        expect(spy).not.toHaveBeenCalled();
     });
});
