
**Видеокурс React JS.**
------------------------------------
https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=1


**Установка React** 

https://github.com/facebook/create-react-app

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

**Урок 23**

Рефакторим файл Dialogs.jsx.

Добавляем новую компоненту и props. 

Рефакторим MyPosts.jsx

**21.08.2020**
------------------------
**Урок 24**

Рефакторим Dilogs.jsx

Создаем массив в котором будем хранить обьекты.

``` 
let dilogsData = 
[
    {id: 1, name: 'Dimych'},
    {id: 2, name: 'Andrey'},
    {id: 3, name: 'Sveta'},
    {id: 4, name: 'Sasha'}
];
```
Обращение к массиву

```
<DialogItem name={dilogsData[0].name} id={dilogsData[0].id}/>
```
Рефакторим MyPosts.jsx

**Урок 25**

Рефакторим Dialogs.jsx и MyPosts.jsx, используем функцию map и стрелочную функцию внутри

```
let dialogsElements = dialogs.map
    (
        dialogs => (<DialogItem name={dialogs.name} id={dialogs.id}/>)
    );
```

В код вставляем полученный массив, где он сам "распаковывается"

`{dialogsElements}`

То же что и выше, но без стрелочных функций (для понимания)

```    
    function forMap(dialogs){
        return (
            <DialogItem name={dialogs.name} id={dialogs.id}/>
        );
    };

    let dialogsElements = dialogs.map(forMap);
```

**Урок 26**

Рефакторим папку Dialogs, добавляем новые компоненты DialogsItem, Message

Вынес props из MyPosts.jsx на уровень выше.

**22.08.2020**
-----------------
**Урок 27**

В файле App.js меняем конструкцию 

 `<Route path = '/dialogs' component={Dialogs}/>`
 
 на
 
 `<Route path = '/dialogs' render={() => <Dialogs />}/>`
 
 что бы иметь возможность передавать props'ы
 
 Так же содержимое скобок можно вынести в отдельную функцию и вызывать уже ее
 
```
let FunDialogs = () => <Dialogs />;
<Route path = '/dialogs' render={FunDialogs}/>
```

В этом случае опять можно использовать не `render`, а `component`

`<Route path = '/dialogs' component={FunDialogs}/>`

Или даже так

`<Route path = '/dialogs' component={() => <Dialogs />}/>`

Есть предположение что `render` работает быстрее. (надо разбираться в документации)

**Урок 28**

Продолжаем выносить props`ы наверх в index.js

Изучаем что такое `debugger;` Жмем F12 и перезагружаем страницу.