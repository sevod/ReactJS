
**Видеокурс React JS.**
------------------------------------
https://www.youtube.com/watch?v=gb7gMluAeao&list=PLcvhF2Wqh7DNVy1OCUpG3i5lyxyBWhGZ8&index=1

https://app.mindmup.com/map/_free/2020/09/9bb94330ec9a11ea942d2925b1743b8e


**Установка React** 

```
https://github.com/facebook/create-react-app
nmp create-react-app nameApp
```



 `<BrowserRouter>` импортируется с помощью `import {BrowserRouter, Route} from "react-router-dom";` 
 
 и предварительной установки `"react-router-dom"`  с помощью node.js
 
 `<Route path = '/dialogs' render={() => <Dialogs state = {props.state.dialogsPage}/>}/>` Route использует ту же компоненту


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

**Урок 29**

Создаем папку redux и в ней файл state.js. Выносим туда все данные. Все данные заносим в объект state.

**23.08.2020**
----------------------

**Урок 30**

 Видео на повторение. Нового кода нет.
 
**Урок 31**
 
 В MyPosts.jsx в кнопку добавляем событие onClick, во внутрь функцию которая будет обрабатывать onClick
 На 4:45 объяснение колбэк функции. Функцию вызываем не мы, а отдается куда-то, что бы ее вызвали там.
 В React мы взаимодействуем с Virtual DOM, напрямую в DOM мы заходить не должны.
 
 Создаем ссылку и помещаем ее в `<textarea>` 
``` 
let newPostElement = React.createRef();
<textarea ref={newPostElement}></textarea>
```
Теперь мы можем получать данные из `<textarea>` 

```
let text = newPostElement.current.value;
```
Недостаток `ref` в том что мы работаем с DOM а не Virtual DOM

**Урок 32**

В файл state.js добавили новую функцию addPost. Прокидываем ее по цепочки в MyPosts.js через props.
Добавляем ее в onClic. При клике данные добавляются, но внешний вид пока не меняется.

**Урок 33**

Создали файл render.js. В него вынесли функциональность по отрисовке, теперь его можно вызывать из state.js при каждом изменении DOM.

Концепция FLUX организация потока данных. Один из реализаций Redux.

Lightshot для скринов.

**24.08.2020**
---------

**Урок 34**

Вводится понятие "STATE MANAGEMENT". Мы для этого будем использовать REDUX. Альтернатива MobX.

В файле MyPosts.jsx в `<textarea ref={newPostElement} onChange={onPostChange} value={props.newPostText}/>` 
Задаем обработчик `onChange` и функцию для него. `value` - значение поля, будем получать из props.

Добавили функции `onPostChange` и `updateNewPostText` теперь данные в textarea ходят строго через state.
Отрефакторили `addPost` теперь туда данные не передаем, они уже сразу находятся в state.

С помощь **window.state = state**; в state.js мы в консоли можем отлавливать занчение state

**Урок 35**

Рефакторим render.js. Переносим все в index.js и удаляем файл.

В state.js создаем функцию subscribe, котороую мы будем вызывать в index.js и помещать в нее функцию renderEntireTree, 
после чего эта функция (renderEntireTree) будет доступна в файле state.js. Это и есть `колбэк`.

Упомянул об объекте `store`.

**Урок 36**

Некоторое объяснение ООП. Кода нет.

**Урок 37**

В файле state.js проводим рефакторинг. Все переменные и функции инкапсулировали в объект `store`.

Для сохранения контекста используем функцию `bind`

`props.store.addPost.bind(props.store)`

**25.08.2020**
------------

**Урок 38**

Вводится понятие/метод в state.js `dispatch(action)`. Внутрь dispatch переносятся все методы из state.js. Рефакторим остальной код.

**Урок 39**

Разбираем action creator и action type

Создаем ActionCreator в MyPosts.jsx.

`Action` - Это объект, у которого как минимум есть свойство `type`. Action передается в dispatche в качестве параметра.

ActionCreator - это функция, которая возвращает action.

Переносим все в state.js

**Урок 40**

Все повторяем и в Dialogs.jsx добавляем добавление сообщений и весь код для этого. По сути повторение.

Когда мы в `<textarea onChange={onMessageChange} />` вызываем событие `onChange` то в нашу функцию `onMessageChange` передается объект event из которого можно много чего достать.

`let text = event.target.value;`

**26.08.2020**
-----------------

**Урок 41**

`Reducer'ы`

reducer это специальная функция, принимает state (не весь, а часть) и action, применяет action к state'у и возвращает новый state.

В папке redux создаем файлы reducer.

Рефакторим dispatch в state.js, переносим код в reducer ы

**27.08.2020**
---------------------------
**Урок 42**

`REDUX`

`npm install redux --save` - Устанавливаем redux 

создаем файл redux-store.js. Теперь store будет там.

создаем сам store.

`let store = createStore();`


подключаем reducerы и передаем их в store
```
let reducers = combineReducers({
    profileReducer,
    sidebarReducer,
    dialogsReducer
});

let store = createStore(reducers);
```

**Урок 43**

`presentational vs container`

Презентационные и контейнерные компоненты.

До этого момента мы использовали только функциональные, презентационные компоненты

Из MyPosts.jsx поднимаем dispatch наверх.

Нашу презентационную компоненту обвернем контейнерной компонентой MyPostsContainer.jsx.
Тоже самое делаем с Dialogs.jsx

В конце видео упомянули о "Контекст", компонента которая доступна всему дочернему дереву.

**Урок 44**

`Контекст`

`React.createContext(defaultValue);`

Создаем файл StoreContext.js (в будущем удалим)

`const StoreContext = React.createContext(null);`

В index.js `App` обрамляем  `<StoreContext.Provider value={store}>`. Теперь всему что внутри будет доступен Context.

В компонентах где нужны данные используем <StoreContext.Consumer>. Файлы MyPostContainer.jsx и DialogsContainer.jsx

<StoreContext.Consumer> после этого должны быть фигурные скобки с НОВОЙ СТРОКИ!!! JS!

**28.08.2020**
--------------------------
**Урок 45**

`REACT-REDUX`

npm install react-redux --save

Удаляем StoreContext.js из предыдущего урока 

В index.js обворачиваем App библиотекой react-redux, теперь у нас везде будут доступны дополнительные функции.
```
<Provider store={store}>
    <App />
</Provider>
```
В DialogsContainer.jsx вызываем функцию `connect()()` из библиотеки react-redux, она создает нам новую контейнерную компоненту, куда помещаем презентационную компоненту Dialogs.
mapStateToProps и mapDispatchToProps функции в которых определяем данные и колбэк функции и передаем все это в нашу презентационную компоненту.
```
let mapStateToProps = (state) => {
    return {
        dialogs: state.dialogs,
        messagesData: state.messagesData
    }
}

let mapDispatchToProps = (dispatch) => {
    return {
        updateNewMessageBody: (body) =>{
            dispatch(updateNewMessageTextActionCreator(body));
            },
        sendMessage: () => {
            dispatch(addMessageActionCreator());
        }
    }
}
let DialogsContainer = connect(mapStateToProps, mapDispatchToProps)(Dialogs);
```

**Урок 46**

Рассказ о том как копирются обьекты. Кода нет.

**Урок 47**

Убираем из index.js `store.subscribe` Этим теперь будет заниматься connect. В ней есть свой локальный subscribe.
Переписываем redeser'ы. Теперь из них возвращаем новые объекты, а не те же самые.

**Урок 48**

Рефакторим reduser'ы

**29.08.2020**
--------------------

**Урок 49**

Объяснение jsx, Babel

Babel - это транспилятор jsx в js

Создаем страницу users и все что для нее надо.

Упоенается DDD домен драйвинг дизайн

**Урок 50**

Общие обьяснения об CRUD. Кода нет.

**Урок 51**

Устанавливаем библиотеку axios для связи с сервером
```
npm install axios --save
```
В users.jsx пишем get запрос для получения пользователей.

Существуют так называемы json online viewer
 
Пишем в users.jsx get запрос и ответ помещаем в users
```
axios.get("https://social-network.samuraijs.com/api/1.0/users").then(response => {
            props.setUsers(response.data.items);
            debugger;
        });
```

**Урок 52**

Side Effect

**30.08.2020**
---------------

**Урок 53**

Классовые компоненты

Рефакторим Users, делаем из `функциональной`, `классовую` компоненту. 

Класс обязательно наследуюется от `React.Component`

`class Users extends React.Component`

**Урок 54**

Жизненный цикл классовой компоненты.

componentDidMount() компонента была вмонтирована (вставлена в html и отрисована)
componentDidUpdate() компонента была обновлена    

рефаторим users.js используем `componentDidMount()` 

**Урок 55**

Pagenation

Правим users.jsx делаем постраничный вывод

31.08.2020
--------------------

**Урок 56**

Создаем API компоненту. Вокруг Users компоненты, теперь две компоненты.

Будем рефакторить UsersAPIComponent.jsx. Снова сделаем Users функциональной.

В итоге UsersAPIComponent.jsx удаляем и все переносим в UsersContainer.jsx. Теперь в этом файле две контейнерных компоненты.

**Урок 57**

Создадим режим ожидания в Users (крутилку).
Создаем переменную isFetching.

В браузере в разделе Network можно включать имитацию медленного интернета

Переносим все что создали в папку common

ТРАНСПИЛЯЦИЯ!

**Урок 58**

Рефакторим UsersContainer.jsx. mapDispatchToProps заменяем на объект и вставляем в функцию connect

пример "короткого" синтекса
```
let name = 15;
let user = {
    name //тут подставится name: name
}
```
Переименовыем AC, убирая это окончание и упрощаем код еще.

**Урок 59**

На странице Users.jsx оборачиваем аватарку в `<NavLink to={'/profile/' + users.id}>`. Она будет вести на страницу пользователя.

Query Parameters - через ? знак.

URI параметры - как часть адреса.

Для данного урока в API:
```
URI Parameters
userId: required(integer)
```

Создаем ProfileContainer.jsx.

Так `<Profile {...this.props}/>` мы пробрасываем пришедшие пропсы дальше.

**Урок 60**

WithRouter

`withRouter(ProfileContainer)` получаем данные из URL 

в файле ProfileContainer.jsx с помощью `withRouter(ProfileContainer)` обернем ProfileContainer. Таким образом мы сможем передать туда URL текущей страницы.

Теперь в props есть match но он пустой.

Меняем строку в App.js

`<Route path='/profile/:userId?' render={() => <ProfileContainer />}/>`

Теперь в match будет userId. Знак ? в конце, означает что этот параметр не обязательный.

**Урок 61**

Делаем отображение логина на сервер.

Создаем auth-reducer.js и HeaderContainer.js
```
axios.get(`https://social-network.samuraijs.com/api/1.0/auth/me`, {withCredentials: true}).then(response => {
            
        });
```

`withCredentials: true ` важный параметр, разрешающий браузеру переадресовывать запросы на другой URL


**01.09.2020**
----------------

**Урок 62**

Follow Unfollow, Post запрос

Работаем в Users.jsx

`axios.post` - пост запрос

Follow запрос
```
axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {}, {withCredentials: true})
            .then(response => {}});
```

Unfollow запрос

 ```
 axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${users.id}`, {withCredentials: true})
            .then(response => {}});
```

Обращаем внимание `withCredentials` идет разным по счету параметром!

Так же добавляем `withCredentials` в Users

**Урок 63**

DAL - dialog access layer

Создаем папку api, в ней api.js и выносим туда функцию axios.get

Выучить promise!
Promise (промис) используется для отложенных и асинхронных вычислений.

Создаем `instance = axios.create(...` внутрь помещаем наши базовые настройки axios что бы не повторять их в коде

**Урок 64**

Будем блокировать многократное нажатие follow unfollow

Правим users-reduser.js

Для блокировки кнопки используем следующую конструкцию 

`<button disabled={props.followingInProgress.some(id => id === users.id)} onClick={() => {...`

одна из функций работы с массивами. добавляем (...) в массив все что проходит фильтр. по факту удаляем с определенным id

`...state.followingInProgress.filter(userId => userId != action.userId)`

**Урок 65**

Теория о

thunk (преобразователь)

чуток про замыкания. Функция1 вызывает функцию2 и ф2 имеет доступ к данным ф1. 
```
const f1 = (message) => (dispatch) => {
    //это уже f2, но мы можем получить message
        message
    }
    ...then(() => {
        //а это уже снова f1! (наверное, в следующей лекции узнаю) Ё js
        message
    } )
}
```

store не умеет принимать в качестве dispath функцию, поэтому используем "мидл веар" он же "thunk mw" который будет "фильтрофать" thunk`и

**Урок 66**

В users-reducer создаем thunk и оборачиваем его getUsersThunkCreator

Устанавливаем npm install redux-thunk
yarn можно исползовать вместо npm 

Импортируем в redux-store.js `import {thunk as thunkMiddleware} from "redux-thunk";`
В redux-store.js меняем код, добавляем applyMiddleware()

`let store = createStore(reducers, applyMiddleware());`

Используем `getUsersThunkCreator` в `UsersContainer.jsx`

Рефакторим Users.jsx

**02.09.2020**
----------------------

**Урок 67**

Продолжаем применять thunk.

Рефакторим ProfileContainer.jsx. Переносим все api.js.

Так же рефакторим HeaderContainer.js, auth-reducer.js

**Урок 68**

Редирект Redirect

Делаем редирект на login когда не залогинены

Информацию о том залогинены мы или нет мы берем из auth-reducer'а

Правим DialogsContainer, Dialogs

Сам редирект.
```
import {Redirect} from "react-router-dom";

if (!props.action)
    return <Redirect to={"/login"} />;

```

**Урок 69**

High Order Component (HOC ХОК)

создаем withAuthRedirect.js, это наш ХОК для редиректа. Дополнительно наш хок (внутри) оборачиваем в connect, что бы получить state.

наименование хоков начинаем на with

**03.09.2020**
-----------------------

**Урок 70**

Compose

Функция, которая собирает в себя и обьединяет другие функции. Часть библиотеки redux.

Рефакторим DialogContainer.jsx и ProfileContainer.jsx

**Урок 71**

Статус, локальный стейт (local state)

Будем использовать классы.
 
Создаем ProfileStatus.jsx

`this.forceUpdate() `используем для того что бы показать что state обновился. не рекомендуется.

Используем 
```
this.setState({
            editMode: true
        })
```

setState() асинхронный

`onBlur={}` событие, когда элемент теряет фокус

autoFocus={true} автоматически перемещает фокус на элемент

**04.09.2020**
--------------------

**Урок 72**

ctrl + p поиск файла в консол браузера, так же можно использовать точки останова

объясняется как обновлять React

кода нет