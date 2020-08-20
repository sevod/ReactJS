
**Видеокурс React JS.**
------------------------------------
https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=1

**19.08.2020**
------------------------
Конспект выше еще не писал, буду восполнять

**Урок 20**

Для перехода по сслыкам без перезагрузки страницы вместо

`<a href="/profile">Profile</a>`

 ипользуем в Navbar.jsx

`import {NavLink} from "react-router-dom";`

`<NavLink to="/profile">Profile</NavLink>`

С помощью конструкции `activeClassName = {s.activeLink}` обьявляем как будет выглядить стандартный css класс active

`<NavLink to="/profile" activeClassName = {s.activeLink}>Profile</NavLink>`

**20.08.2020**
-------------------------

**Урок 21**

Правим файл Dilogs.jsx и Dilogs.module.css

**Урок 22**

В файл Dialogs.jsx добавляем NavLink'и

`<NavLink to="/dialogs/1">Dimych</NavLink>`

Если в `<Route path = '/dialogs' component={Dialogs}/>`

добавить `exact`

`<Route exact path = '/dialogs' component={Dialogs}/>`

отображение компоненты `Dialogs` происходит только при точном совпадении url.