export interface Mouvement {
  id: number;
  name: string;
  difficulty: number;
  description: string;
  image?: string;
}

export const mouvements = [
  {
    id: 1,
    name: 'Flick',
    difficulty: 2,
    description: 'Fait du sale',
    image: "assets/img/hero-background.jpg",
  },
  {
    id: 2,
    name: 'Air Dribble',
    difficulty: 3,
    description: 'Trop stylé'
  },
  {
    id: 3,
    name: 'Wave Dash',
    difficulty: 3,
    description: 'Se la pète un peu'
  }
];
