import { Pipe } from '@angular/core';

@Pipe({
    name: 'categoryList',
    /*pure: true*/ /*Default*/
})
export class CategoryPipe {
    transform(mediaItems) {
        let categories = [];
        mediaItems.forEach(mediaItem => {
            if (categories.indexOf(mediaItem.category) <= -1) {
                categories.push(mediaItem.category);
            }
        });
        return categories.join(', ');
    }
}