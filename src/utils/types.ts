export interface MainHeroTypes {
  data: MainHeroSectionTypes[];
}
 interface MainHeroSectionTypes {
  id?: number;
  title: string;
  subTitle: string;
  heroContent: string;
  heroButtonLink: string;
  createdAt?: Date;
  updatedAt?: Date;
}


export interface SecondHeroTypes {
  data:MainHeroSectionTypes[];  
}

export interface SkydiveTypes {
  data: SkydiveSectionTypes[];
}

interface SkydiveSectionTypes {
  id?: number;
  title: string;
  flavor:{
    id?: number;
    flavorName: string;
  }
}
