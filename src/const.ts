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
