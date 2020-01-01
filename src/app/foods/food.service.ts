import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  private foods: Food[] = [
    {
      id: 'g1',
      title: 'Chicken Karahi',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/f/f0/Chicken_Karahi.JPG/1024px-Chicken_Karahi.JPG',
      snacknames: ['Red-Chilli', 'Black-Pepper', 'Chicken-Tikka']
    },
    {
      id: 'g2',
      title: 'Mutton Karahi',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/8/82/Mutton_Karahi_2.JPG/120px-Mutton_Karahi_2.JPG',
      snacknames: ['Mutton-Tikka', 'Mutton-fried']
    },
    {
      id: 'g3',
      title: 'Chicken Kofta',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Hara_chicken_kofta_curry.jpg/120px-Hara_chicken_kofta_curry.jpg',
      snacknames: ['Salty','spicy']
    },
    {
      id: 'g4',
      title: 'Pulao',
      imageUrl: 'https://upload.wikimedia.org/wikipedia/commons/thumb/d/d0/Parboiled_rice_with_chicken%2C_peppers%2C_cucurbita%2C_peas_and_tomato.jpg/1024px-Parboiled_rice_with_chicken%2C_peppers%2C_cucurbita%2C_peas_and_tomato.jpg',
      snacknames: ['Chinese','Chicken']
    }
  ];
  getAllFoods() {
    return [...this.foods];
  }
  geFoods(foodId: string) {
    return {
      ...this.foods.find(snack => {
        return snack.id === foodId;
      })
    };
  }
  AddfoodsByObj(foodsObj) {
    this.foods.push(foodsObj);
  }
  deleteFood(foodId: string) {
    this.foods = this.foods.filter(snack => {
      return snack.id !== foodId;
    });
    return this.foods;
  }
}

export interface Food {
  id: string;
  title: string;
  imageUrl: string;
  snacknames: string[];
}
