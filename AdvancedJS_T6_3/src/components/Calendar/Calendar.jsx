import './Calendar.css';

function Calendar({ date }) {
  const year = date.getFullYear();
  const month = date.getMonth();
  const today = date.getDate();

  const weekDays = [
    'Понедельник',
    'Вторник',
    'Среда',
    'Четверг',
    'Пятница',
    'Суббота',
    'Воскресенье',
  ];

  const weekDaysShort = ['Пн', 'Вт', 'Ср', 'Чт', 'Пт', 'Сб', 'Вс'];

  const monthsNominative = [
    'Январь',
    'Февраль',
    'Март',
    'Апрель',
    'Май',
    'Июнь',
    'Июль',
    'Август',
    'Сентябрь',
    'Октябрь',
    'Ноябрь',
    'Декабрь',
  ];

  const monthsGenitive = [
    'Января',
    'Февраля',
    'Марта',
    'Апреля',
    'Мая',
    'Июня',
    'Июля',
    'Августа',
    'Сентября',
    'Октября',
    'Ноября',
    'Декабря',
  ];

  const dayOfWeek = (date.getDay() + 6) % 7;

  const firstDayOfMonth = new Date(year, month, 1);
  const lastDayOfMonth = new Date(year, month + 1, 0);

  const daysInMonth = lastDayOfMonth.getDate();
  const startWeekDay = (firstDayOfMonth.getDay() + 6) % 7;

  const days = [];

  // дни предыдущего месяца
  const prevMonthLastDay = new Date(year, month, 0).getDate();
  for (let i = startWeekDay - 1; i >= 0; i--) {
    days.push({
      day: prevMonthLastDay - i,
      otherMonth: true,
    });
  }

  // дни текущего месяца
  for (let i = 1; i <= daysInMonth; i++) {
    days.push({
      day: i,
      today: i === today,
      otherMonth: false,
    });
  }

  // дни следующего месяца
  while (days.length % 7 !== 0) {
    days.push({
      day: days.length - daysInMonth - startWeekDay + 1,
      otherMonth: true,
    });
  }

  // разбиваем по неделям
  const weeks = [];
  for (let i = 0; i < days.length; i += 7) {
    weeks.push(days.slice(i, i + 7));
  }

  return (
    <div className="ui-datepicker">
      <div className="ui-datepicker-material-header">
        <div className="ui-datepicker-material-day">
          {weekDays[dayOfWeek]}
        </div>

        <div className="ui-datepicker-material-date">
          <div className="ui-datepicker-material-day-num">
            {today}
          </div>
          <div className="ui-datepicker-material-month">
            {monthsGenitive[month]}
          </div>
          <div className="ui-datepicker-material-year">
            {year}
          </div>
        </div>
      </div>

      <div className="ui-datepicker-header">
        <div className="ui-datepicker-title">
          <span className="ui-datepicker-month">
            {monthsNominative[month]}
          </span>
          &nbsp;
          <span className="ui-datepicker-year">{year}</span>
        </div>
      </div>

      <table className="ui-datepicker-calendar">
        <colgroup>
          <col />
          <col />
          <col />
          <col />
          <col />
          <col className="ui-datepicker-week-end" />
          <col className="ui-datepicker-week-end" />
        </colgroup>

        <thead>
          <tr>
            {weekDaysShort.map((day, i) => (
              <th key={i} scope="col" title={weekDays[i]}>
                {day}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {weeks.map((week, i) => (
            <tr key={i}>
              {week.map((day, j) => (
                <td
                  key={j}
                  className={[
                    day.otherMonth && 'ui-datepicker-other-month',
                    day.today && 'ui-datepicker-today',
                  ]
                    .filter(Boolean)
                    .join(' ')}
                >
                  {day.day}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Calendar;
