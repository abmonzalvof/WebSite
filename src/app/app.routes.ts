import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { AboutMeComponent } from './about-me/about-me.component';
import { CoursesComponent } from './courses/courses.component';
import { ExperienceComponent } from './experience/experience.component';
import { ContactComponent } from './contact/contact.component';

export const routes: Routes = [
    {
        path: 'home',
        component: HomeComponent
    },
    {
        path: 'about',
        component: AboutMeComponent
    },
    {
        path: 'cert',
        component: CoursesComponent
    },
    {
        path: 'exp',
        component: ExperienceComponent
    },
    {
        path: 'contact',
        component: ContactComponent
    },
    {
        path: '**',
        pathMatch: 'full',
        redirectTo: 'home'
    }
];
