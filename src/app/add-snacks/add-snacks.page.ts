import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-add-snacks',
  templateUrl: './add-snacks.page.html',
  styleUrls: ['./add-snacks.page.scss'],
})
export class AddSnacksPage implements OnInit {

  constructor(private router: Router,
              private route: ActivatedRoute,
    ) { }

    snacks = [];
    id: string;
    title: string;
    imageUrl: 'string';
    snacknames: 'string';

  ngOnInit() {
  }
  async Addsnacks() {
    const obj = {
      id: this.id,
      title: this.title,
      imageUrl: this.imageUrl,
      snacknames: this.snacknames
    };
    // this.Snacksservice.AddsnacksByObj(obj);
    this.router.navigateByUrl('/snacks');
  }

}
