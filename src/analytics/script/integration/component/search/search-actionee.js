import { ComponentActionee } from '../component-actionee';
import { Type } from '../../../analytics/action/type';
import ID from './id';

class SearchActionee extends ComponentActionee {
  constructor () {
    super(2, true);
  }

  static get instanceClassName () {
    return 'SearchActionee';
  }

  init () {
    this.listenInputValidation(this.node, Type.SEARCH);
  }

  get label () {
    return 'barre de recherche';
  }

  get component () {
    return ID;
  }
}

export { SearchActionee };
