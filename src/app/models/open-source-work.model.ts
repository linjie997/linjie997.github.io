import {OpenSourceWorkLink} from './open-source-work-link.model';

export interface OpenSourceWork {
  title?: string;
  descriptions?: string[];
  links?: OpenSourceWorkLink[];
}
