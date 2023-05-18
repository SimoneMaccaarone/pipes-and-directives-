import { Component } from '@angular/core';

@Component({
  selector: 'app-pipe',
  templateUrl: './pipe.component.html',
  styleUrls: ['./pipe.component.scss']
})
// ----------------------------------------------------------------

export class PipeComponent {
  // convertitore: JSON to TypeScript, per semplificare il lavoro
  user: User ={
    "username": "Coder-Monkey",
    "name":"nicolò", // creare un Pipe che trasforma in UpperCase la 1° lettera
    "surname":"esposito",
    "yob": 1999, // creare un Pipe che calcola l' età
    "description": "This is the face of Irving Evatt, a true victor among giants. He stands towering among others, despite his fragile frame."
    // creare un Pipe che tronchi la descrizione dopo 30 caratteri e aggiunga 3 puntini
  }
  constructor(){}
}

export interface User {
  username: string
  name: string
  surname: string
  yob: number
  description: string
}

