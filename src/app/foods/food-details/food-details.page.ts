import { Component, OnInit } from '@angular/core';
import { AlertController } from '@ionic/angular';
import { ActivatedRoute, Router } from '@angular/router';
import { FoodService } from '../food.service';

@Component({
  selector: 'app-food-details',
  templateUrl: './food-details.page.html',
  styleUrls: ['./food-details.page.scss'],
})
export class FoodDetailsPage implements OnInit {
  LoadedFood: Food;
  constructor(
    private activatedRoute: ActivatedRoute,
    private foodService: FoodService,
    private alertController: AlertController,
    private router: Router,
    ) { }
    foodId: any;
  ngOnInit() {
    this.activatedRoute.paramMap.subscribe(paramMap => {
      if (!paramMap.has('foodId')) {
        return;
      }
      this.foodId = paramMap.get('foodId');
      this.LoadedFood = this.foodService.geFoods(this.foodId);
    });
  }
  async onDelete() {
    const alert = await this.alertController.create({
      header: 'Confirm!',
      message: `Are you sure you want to delete the "Chicken Karahi"`,
      buttons: [
        {
          text: 'Cancel',
          role: 'cancel',
          cssClass: 'secondary',
          handler: blah => {
            console.log('Confirm Cancel: blah');
          }
        },
        {
          text: 'Okay',
          handler: () => {
            this.foodId.deleteFood(this.foodId);
            this.router.navigateByUrl('/snacks');
          }
        }
      ]
    });
    await alert.present();
  }
}
export interface Food {
  id: string;
  title: string;
  imageUrl: string;
  snacknames: string[];
}

