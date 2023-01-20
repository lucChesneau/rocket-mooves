import { Component } from '@angular/core';
import {mouvements} from "../mouvement";
import { Router } from '@angular/router';

@Component({
  selector: 'app-section-moov-list',
  templateUrl: './section-moov-list.component.html',
  styleUrls: ['./section-moov-list.component.css']
})
export class SectionMoovListComponent {
  mouvements = mouvements;

  constructor(private router: Router) { }

  onMouvementClick(id: number) {
    this.router.navigate(['/movement-details', id]);
  }
}
