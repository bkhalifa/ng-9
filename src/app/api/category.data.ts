
import { InMemoryDbService } from 'angular-in-memory-web-api';

import { Category } from '../core/category';

export class CategoryData   implements InMemoryDbService {

    createDb() {
        const categories: Category[] =[
  {
    "categoryId": 14,
    "categoryName": "Communications"
  },
  {
    "categoryId": 15,
    "categoryName": "Deception"
  },
  {
    "categoryId": 16,
    "categoryName": "Travel"
  },
  {
    "categoryId": 17,
    "categoryName": "Protection"
  },
  {
    "categoryId": 18,
    "categoryName": "Munitions"
  },
  {
    "categoryId": 19,
    "categoryName": "Tools"
  },
  {
    "categoryId": 20,
    "categoryName": "General"
  }
];
return {categories}
    }
  }
