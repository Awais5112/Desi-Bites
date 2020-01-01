import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { FoodService } from './food.service';
@Component({
  selector: 'app-foods',
  templateUrl: './foods.page.html',
  styleUrls: ['./foods.page.scss'],
})
export class FoodsPage implements OnInit {
  foods: Food[];
  constructor(
    private foodService: FoodService,
    private alertController: AlertController,
    private router: Router
  ) { }

  ngOnInit() {
    this.foods = this.foodService.getAllFoods();
  }
  async onDelete(food) {
    const aalert = await this.alertController.create({
      header: 'Alert',
      message: `Are you sure you want to remove ${food.name}?`,
      buttons: [
        {
          text: 'Cancel'
        },
        {
          text: 'Okay',
          handler: () => {
            this.foodService.deleteFood(food.id);
            this.router.navigateByUrl('foods');
          }
        }
      ]
    });
    aalert.present();
  }
}

export interface Food {
  id: string;
  title: string;
  imageUrl: string;
  snacknames: string[];
}
