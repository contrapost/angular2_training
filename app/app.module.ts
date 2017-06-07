import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';
import {ReactiveFormsModule} from '@angular/forms';

import {AppComponent} from './app.component';
import {MediaItemComponent} from './media-item.component';
import {MediaItemListComponent} from './media-item-list.component';
import {FavoriteDirective} from './favorite.directive';
import {CategoryPipe} from './category-list.pipe';
import {MediaItemFormComponent} from './media-item-form.component';
import {MediaItemService} from './media-item.service'
import {lookupList, lookupListToken} from './providers';

@NgModule({
    imports: [
        BrowserModule,
        ReactiveFormsModule
    ],
    declarations: [
        AppComponent,
        MediaItemComponent,
        MediaItemListComponent,
        FavoriteDirective,
        CategoryPipe,
        MediaItemFormComponent
    ],
    providers: [
        MediaItemService,
        { provide: lookupListToken, useValue: lookupList}
    ],
    bootstrap: [
        AppComponent
    ]
})
export class AppModule {
}