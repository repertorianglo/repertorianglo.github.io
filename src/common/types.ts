export interface Link {
  href: string;
  title: string;
}

export interface EixoTematico extends Link {
  image: string;
  description?: string;
}