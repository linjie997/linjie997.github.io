import { NavigationLink } from '../models';

export const NavigationLinks: NavigationLink[] = [
  {
    path: 'home',
    icon: 'home',
    name: 'home',
    loadChildren: () => import('./../modules/home/home.module').then(m => m.HomeModule),
  },
  {
    path: 'about',
    icon: 'face',
    name: 'about_me',
    loadChildren: () => import('./../modules/about/about.module').then(m => m.AboutModule),
  },
  {
    path: 'work-experiences',
    icon: 'work',
    name: 'work_experiences',
    loadChildren: () => import('./../modules/work-experiences/work-experiences.module').then(m => m.WorkExperiencesModule),
  },
  {
    path: 'personal-life',
    icon: 'gamepad',
    name: 'personal_life',
    loadChildren: () => import('./../modules/personal-life/personal-life.module').then(m => m.PersonalLifeModule),
  },
  {
    path: 'contacts',
    icon: 'contact_mail',
    name: 'links_and_contacts',
    loadChildren: () => import('./../modules/contacts/contacts.module').then(m => m.ContactsModule),
  },
];
