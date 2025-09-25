import "./Filter.scss";

export const Filter = () => {
  return (
    <div className="filter">
      <button className="filter__btn" type="button">
        Спросить фильтр
      </button>
      <ul className="filter__checkbox">
        <li className="filter__checkbox-item">
          <input type="checkbox" id="brand" name="brand" />
          <label htmlFor="brand">Бренд</label>
        </li>
        <li className="filter__checkbox-item">
          <input type="checkbox" id="country" name="country" />
          <label htmlFor="country">Страна</label>
        </li>

        <li className="filter__checkbox-item">
          <input type="checkbox" id="power" name="power" />
          <label htmlFor="power">Мощность</label>
        </li>

        <li className="filter__checkbox-item">
          <input type="checkbox" id="mileage" name="mileage" />
          <label htmlFor="mileage">Пробег</label>
        </li>

        <li className="filter__checkbox-item">
          <input type="checkbox" id="year" name="year" />
          <label htmlFor="year">Год</label>
        </li>
      </ul>
    </div>
  );
};
