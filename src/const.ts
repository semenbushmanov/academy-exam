export enum AppRoute {
  Home = '/',
  Quest = '/detailed-quest',
  QuestWithIdParams = '/detailed-quest/:id',
  Contacts = '/contacts',
}

export enum APIRoute {
  Quests = '/quests',
  Order = '/orders',
}

export enum NameSpace {
  Data = 'DATA',
}

export enum QuestType {
  All = 'all',
  Adventures = 'adventures',
  Horror = 'horror',
  Mystic = 'mystic',
  Detective = 'detective',
  SciFi = 'sci-fi',
}

export const MapPoint = {
  Title: 'Набережная реки Карповка, д 5',
  Lat: 59.96822104365657,
  Lng: 30.317371764540287,
} as const;

export const MapCity = {
  Title: 'Санкт-Петербург',
  Lat: 59.96822104365657,
  Lng: 30.317371764540287,
  Zoom: 16,
} as const;
