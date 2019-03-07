'use strict';

const filters = [
  {
    id: `all`,
    title: `ALL`,
    count: 15,
    isChecked: true,
  },
  {
    id: `overdue`,
    title: `OVERDUE`,
    count: 0,
  },
  {
    id: `today`,
    title: `TODAY`,
    count: 0,
  },
  {
    id: `favorites`,
    title: `FAVORITES`,
    count: 7,
  },
  {
    id: `repeating`,
    title: `Repeating`,
    count: 2,
  },
  {
    id: `tags`,
    title: `Tags`,
    count: 6,
  },
  {
    id: `archive`,
    title: `ARCHIVE`,
    count: 115,
  },
];

const cards = [{
  // text: `Hellow World`,
  img: ``, // img/sample-img.jpg
  date: `20.02.2019`,
  time: `00:00`,
  repeat: true,
  days: [{
    day: `mo`,
    isChecked: true
  }, {
    day: `tu`,
    isChecked: true
  }, {
    day: `we`,
    isChecked: true
  }, {
    day: `th`,
    isChecked: true
  }, {
    day: `fr`,
    isChecked: false
  }, {
    day: `sa`,
    isChecked: false
  }, {
    day: `su`,
    isChecked: false
  }],
  hashtags: [`#repeat`, `#cinema`, `#entertaiment`],
  colors: [`black`, `yellow`, `blue`, `green`, `pink`],
  text: `Here is a card with filled data`,
  placeholder: `Start typing your text here...`,
  deadlineInfo: {
    date: `25_September`,
    time: `11:15 PM`
  }
}];

const getFilterItem = (item) => {
  const {id, title, count, isChecked} = item;
  const inputElement = `
    <input type="radio" id=${id} class="filter__input visually-hidden" name="filter" checked=${isChecked} />
  `;
  const labelElement = `
    <label for=${id} class="filter__label">
      ${title} <span class="${id}-count">${count}</span></label
    >
  `;
  const filterElement = inputElement + labelElement;
  return filterElement;
};

const colorsElement = (colors) => `
  <div class="card__colors-inner">
    <h3 class="card__colors-title">Color</h3>
    <div class="card__colors-wrap">
      ${colors.map((color) => `
        <input
          type="radio"
          id="color-${color}-4"
          class="card__color-input card__color-input--${color} visually-hidden"
          name="color"
          value=${color}
        />
        <label
          for="color-black-4"
          class="card__color card__color--${color}"
          >${color}</label
        >
      `).join(``)}
    </div>
  </div>
`;

const cardControl = `
  <div class="card__control">
    <button type="button" class="card__btn card__btn--edit">
      edit
    </button>
    <button type="button" class="card__btn card__btn--archive">
      archive
    </button>
    <button
      type="button"
      class="card__btn card__btn--favorites card__btn--disabled"
    >
      favorites
    </button>
  </div>
`;

const textarea = (text, phaceholder) => `
  <div class="card__textarea-wrap">
    <label>
      <textarea
        class="card__text"
        placeholder=${phaceholder}
        name="text"
      >
        ${text}
      </textarea>
    </label>
  </div>
`;

const deadline = (date, time) => `
  <fieldset class="card__date-deadline">
    <label class="card__input-deadline-wrap">
      <input
        class="card__date"
        type="text"
        placeholder=${date}
        name="date"
        value=${date}
      />
    </label>
    <label class="card__input-deadline-wrap">
      <input
        class="card__time"
        type="text"
        placeholder=${time}
        name="time"
        value=${time}
      />
    </label>
  </fieldset>
`;


const daysElement = (days) => `
  <fieldset class="card__repeat-days">
    <div class="card__repeat-days-inner">
      ${days.map((item) =>`
          <input
            class="visually-hidden card__repeat-day-input"
            type="checkbox"
            id="repeat-${item.day}-4"
            name="repeat"
            value=${item.day}
            ${item.isChecked ? `checked` : ``}
          />
          <label class="card__repeat-day" for="repeat-${item.day}-4"
            >${item.day}</label
          >
      `
  ).join(``)}
  </fieldset>
`;

const hashtagsElement = (hashtags) => `
  <div class="card__hashtag">
    <div class="card__hashtag-list">
      ${hashtags.map((hashtag) => `
        <span class="card__hashtag-inner">
          <input
            type="hidden"
            name="hashtag"
            value="repeat"
            class="card__hashtag-hidden-input"
          />
          <button type="button" class="card__hashtag-name">
            ${hashtag}
          </button>
          <button type="button" class="card__hashtag-delete">
            delete
          </button>
        </span>
      `)}
    </div>
    <label>
      <input
        type="text"
        class="card__hashtag-input"
        name="hashtag-input"
        placeholder="Type new hashtag here"
      />
    </label>
  </div>
`;

const statusBtns = `
  <div class="card__status-btns">
    <button class="card__save" type="submit">save</button>
    <button class="card__delete" type="button">delete</button>
  </div>
`;


const cardTemplate = (card) => {
  return `
  <article class="card card--edit card--yellow card--repeat">
    <form class="card__form" method="get">
      <div class="card__inner">
        ${cardControl}
        <div class="card__color-bar">
          <svg class="card__color-bar-wave" width="100%" height="10">
            <use xlink:href="#wave"></use>
          </svg>
        </div>

        ${textarea(card.text, card.placeholder)}

        <div class="card__settings">
          <div class="card__details">
            <div class="card__dates">
              <button class="card__date-deadline-toggle" type="button">
                date: <span class="card__date-status">yes</span>
              </button>

              ${deadline(card.deadlineInfo.date, card.deadlineInfo.time)}
              <button class="card__repeat-toggle" type="button">
                repeat:<span class="card__repeat-status">yes</span>
              </button>

              ${daysElement(card.days)}
            </div>
            ${hashtagsElement(card.hashtags)}
          </div>

          <label class="card__img-wrap">
            <input
              type="file"
              class="card__img-input visually-hidden"
              name="img"
            />
            <img
              src="img/sample-img.jpg"
              alt="task picture"
              class="card__img"
            />
          </label>
          ${colorsElement(card.colors)}
        </div>
        ${statusBtns}
      </div>
    </form>
  </article>
`
  ;
};


const drawElement = (element, position) => {
  const template = document.createElement(`template`);
  template.innerHTML = element;

  position.appendChild(template.content);
};

const filterContainer = document.querySelector(`.main__filter`);
const data = filters.map((item) => getFilterItem(item)).join(``);

drawElement(data, filterContainer);

const results = cards.map((card) => {
  return cardTemplate(card);
});

const tasksContainer = document.querySelector(`.board__tasks`);

drawElement(results, tasksContainer);
