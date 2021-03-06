Реализация SPA
В данном задании необходимо реализовать приложение с конструктором форм. При реализации необходимо использовать предоставленный API. При реализации интерфейса рекомендуется использовать одну из следующих ui-библиотек: Element UI, Ant Design.

Интерфейс готового приложения должен состоять из тех же страниц, что указаны в прототипе, НО, в точности соответствовать дизайну необязательно.

Схема - описание формы, содержащее все поля формы и их параметры. Представляется в виде json-объекта.

Пример схемы:

{
"name": "Название схемы",
"fields": [
{
"key": "login",
"label": "Логин",
"type": "string",
"validation": {
"required": true,
"min": "6"
}
},
{
"key": "password",
"label": "Пароль",
"type": "password",
"validation": {
"required": true,
"pattern": "[0-9]",
"max": "255"
}
},
{
"key": "role",
"label": "Роль",
"type": "select",
"validation": {
"required": true
},
"options": [
{
"key": "admin",
"value": "Администратор"
},
{
"key": "manager",
"value": "Менеджер"
}
]
},
{
"key": "age",
"label": "Возраст",
"type": "number",
"validation": {
"required": false,
"min": "18"
}
},
{
"key": "notification",
"label": "Получать уведомления",
"type": "checkbox",
"validation": {
"required": false
}
}
]
}

Требования

При реализации использовать TypeScript. Также, необходимо покрыть 1 компонент и 1 функцию unit-тестами.

Реализовать страницу авторизации пользователя с формой входа: логин, пароль. Для аутентификации использовать API сервера (http://193.124.206.217:3000). Для получения данных от API использовать JWT-токен (предоставляется сервером при авторизации). В личный кабинет могут попасть только авторизованные пользователи, в противном случае - пользователь попадает на страницу входа.

Для авторизации необходимо добавить в запрос заголовок следующего вида: Authorization: bearer <auth_token>. После авторизации пользователь должен попадать на главную страницу личного кабинета, на которой расположен список просмотра схем (в виде таблицы). Под таблицей расположена кнопка “Добавить”, по нажатию на которую происходит переход на страницу добавления схемы.

Страница добавления схемы должна состоять из обязательного поля названия схемы и хотя бы одного поля, описывающего схему - свойства схемы.

Каждое свойство схемы описывают следующие поля (все обязательны для заполнения, кроме описывающих валидацию):
ключ свойства - текстовое поле;
название свойства - текстовое поле;
поле для отображения - выпадающий список, доступны следующие варианты: числовое поле, текстовое поле, пароль, номер телефона, чекбокс, выпадающий список с опциями;
валидация - несколько полей, описывающих валидацию свойства для выбранного поля отображения. Варианты валидации описаны ниже;
варианты выбора, если выбрано поле для отображения “Выпадающий список с опциями” - использовать форму добавления опций свойства создаваемой схемы (обязательна для заполнения хотя бы одна опция):
по умолчанию отображать поля ввода для одной опции :
ключ - текстовое поле, ключи опций не должны повторяться для одного и того же свойства;
значение - текстовое поле, значения опций не должны повторяться для одного и того же свойства;
по нажатию на кнопку “Добавить значение” появляется дополнительное поле для ввода значения.

Для каждого поля необходимо описать варианты валидации. Варианты валидации полей:
для всех полей:
обязательность заполнения, т.е. является ли поле обязательным для заполнения (для выпадающего списка проверять наличие выбранной опции);
числовое поле:
максимальное значение;
минимальное значение.
текстовое поле и пароль:
максимальное количество символов;
минимальное количество символов;
шаблон ввода (регулярное выражение).
номер телефона, значения принимать только в формате “+7 (987) 654-32-10” и “8 (987) 654-32-10” (без кавычек).

Каждую схему можно просмотреть на отдельной странице. Необходимо реализовать компонент формы, которая формирует поля в соответствии с выбранной схемой, включая валидацию для каждого поля. Под формой необходимо реализовать кнопку, по нажатию на которую валидируется форма и выводятся ошибки, либо выводится текст об успешной валидации.

Реализовать выход из приложения.

Рекомендуется
Использование методологии БЭМ.
Использование библиотеки axios для запросов.

Документация к API: http://193.124.206.217:3000/api/

Ссылка на макет: https://tinyurl.com/y2cq887m

Рекомендуемое время выполнения тестового задания: 2-3 дня

Полезное
БЭМ: https://en.bem.info/
Axios: https://github.com/axios/axios
UI-библиотеки:
Element UI: https://element.eleme.io/
Ant Design: https://ant.design/
Управление состоянием приложения:
Redux: https://redux.js.org/
Mobx: https://mobx.js.org/README.html
Vuex: https://vuex.vuejs.org/
Маршрутизация:
React Router: https://reacttraining.com/react-router/
Vue Router: https://router.vuejs.org/
Тестирование:
Vue Test Utils: https://vue-test-utils.vuejs.org/
Jest: https://jestjs.io/
Mocha: https://mochajs.org/
Chai: https://www.chaijs.com/
Enzyme: https://airbnb.io/enzyme/
