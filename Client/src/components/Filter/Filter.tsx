import "./Catalog-form.scss";
import "./Catalog.scss";
import "./Custom-checkbox.scss";
import "./Custom-input.scss";
import "./Custom-radio.scss";

export const Filter = () => {
  return (
    <form action="#!" method="get" className="catalog-form" id="form">
          <button className="catalog-form__reset" type="reset">
            <svg width="24" height="24" aria-hidden="true">
              <use href="images/sprite.svg#icon-filter"></use>
            </svg>
            <span className="catalog-form__reset-text">Сбросить фильтры</span>
          </button>
          <fieldset className="catalog-form__fieldset">
            <legend className="catalog-form__legend">Светильники</legend>
            <ul className="catalog-form__list-col">
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--pendant">
                  <input className="visually-hidden custom-checkbox__field" id="pendant" type="checkbox" name="type" value="pendant"/>
                  <label className="custom-checkbox__label" htmlFor="pendant">
                      <span className="custom-checkbox__name">
                        Бренд
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--ceiling">
                  <input className="visually-hidden custom-checkbox__field" id="ceiling" type="checkbox" name="type" value="ceiling"/>
                  <label className="custom-checkbox__label" htmlFor="ceiling">
                      <span className="custom-checkbox__name">
                        Страна
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--overhead">
                  <input className="visually-hidden custom-checkbox__field" id="overhead" type="checkbox" name="type" value="overhead"/>
                  <label className="custom-checkbox__label" htmlFor="overhead">
                      <span className="custom-checkbox__name">
                        Мощность
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--point">
                  <input className="visually-hidden custom-checkbox__field" id="point" type="checkbox" name="type" value="point"/>
                  <label className="custom-checkbox__label" htmlFor="point">
                      <span className="custom-checkbox__name">
                        Пробег
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
              <li className="catalog-form__item-col">
                <div className="custom-checkbox custom-checkbox--nightlights">
                  <input className="visually-hidden custom-checkbox__field" id="nightlights" type="checkbox"
                         name="type" value="nightlights"/>
                  <label className="custom-checkbox__label" htmlFor="nightlights">
                      <span className="custom-checkbox__name">
                        Год
                      </span>
                    <svg className="custom-checkbox__icon" width="10" height="10" aria-hidden="true">
                      <use href="images/sprite.svg#icon-check"></use>
                    </svg>
                    <span className="custom-checkbox__count">0</span>
                  </label>
                </div>
              </li>
            </ul>
          </fieldset>
        </form>
  );
};
