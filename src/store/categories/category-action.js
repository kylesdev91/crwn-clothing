import { CATEGORIES_ACTION_TYPES } from './category-types';
import { createAction } from '../../utils/reducer/reducer.utils';

export const setCategoriesMapAction = (categoriesMap) =>
  createAction(CATEGORIES_ACTION_TYPE.SET_CATEGORIES_MAP, categoriesMap);
