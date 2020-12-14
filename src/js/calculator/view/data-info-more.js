import AbstractView from '../abstract-view.js';
import footerTemplate from './footer'

export default class DataInfoMoreView extends AbstractView {
  constructor(state) {
    super();
    this._state = state;
  }

  get template() {
    return `
      <section class="calculator calculator--amount-data-next" data-controller="calculator">
        <div class="calculator__wrap">
          <h2 class="calculator__title title title--black">NATURE & VOLUME DES DONNÉES PERSONNELLES</h2>
          <ul class="calculator__list calculator__list--amount-data-next">


            <li class="calculator__item calculator__item--radio calculator__item--amount-top">
              <p class="calculator__field-text calculator__field-text--title">Nombre estimé de données personnelles traitées / detenues :</p>

              <div class="calculator__amount-select select__box">
                <select class="select__list" name="Nombre estimé de données personnelles traitées" id="select-effectif">
                  <option class="select__item" value="1-10">1 - 10</option>
                  <option class="select__item" value="10-50">10 - 50</option>
                  <option class="select__item" value="50-100">50 - 100</option>
                  <option class="select__item" value="100-500">100 - 500</option>
                  <option class="select__item" value="500-1000">500 - 1000</option>
                  <option class="select__item" value="1000+">1000 +</option>
                </select>
              </div>
            </li>
            <li class="calculator__item calculator__item--radio">
              <p class="calculator__field-text calculator__field-text--amount">Donnée personnelle consiste en « toute information relative à une personne physique identifiée ou qui peut être identifiée, directement ou indirectement, par référence à un numéro d'identification ou à un ou plusieurs éléments qui lui sont propres (images, enregistrements, codes personnels...) »</p>
            </li>
          </ul>
          <div class="calculator__box calculator__box--button">
            <a class="calculator__button calculator__button--back button button--back" href="#">
              <svg class="button__icon">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-back"></use>
              </svg>
            </a>
            <a class="calculator__button calculator__button--forth button button--forth" href="#">
              Continuer
              <svg class="button__icon button__icon--forth">
                <use xlink:href="img/sprites/sprite.svg#icon_arrow-forward"></use>
              </svg>
            </a>
          </div>
        </div>
        <div id="calc-footer"></div>
      </section>
    `;
  }

  bind() {
    const next = this.element.querySelector(`.calculator__button--forth`);
    const back = this.element.querySelector(`.calculator__button--back`);

    next.addEventListener(`click`, (e) => {
      e.preventDefault()
      this.onClickNext();
    });

    back.addEventListener(`click`, (e) => {
      e.preventDefault()
      this.onClickBack();
    })
  }

  onClickNext() {};
  onClickBack() {};
}
