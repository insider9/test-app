export enum ProductStorageTypes {
  units = 'units',
  packages = 'packages',
}

export const STORAGE_TYPE_ALIASES = {
  [ProductStorageTypes.units]: 'шт.',
  [ProductStorageTypes.packages]: 'уп.',
}
