import { createSelector } from 'reselect';

const selectAllAnimals = state => state;

export const selectAllDogs = createSelector(
  selectAllAnimals,
  animals => animals.dogs
)