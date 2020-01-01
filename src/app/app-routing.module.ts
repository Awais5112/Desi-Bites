import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', redirectTo: 'foods', pathMatch: 'full' },
{ path: 'foods',
children: [
  {
    path: '',
    loadChildren: './foods/foods.module#FoodsPageModule'
  },
  {
    path: ':foodId',
    loadChildren: './foods/food-details/food-details.module#FoodDetailsPageModule'
  }
]
},
  { path: 'add-snacks', loadChildren: './add-snacks/add-snacks.module#AddSnacksPageModule' },
  // { path: 'foods', loadChildren: './foods/foods.module#FoodsPageModule' },
  // { path: 'food-details', loadChildren: './foods/food-details/food-details.module#FoodDetailsPageModule' }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
