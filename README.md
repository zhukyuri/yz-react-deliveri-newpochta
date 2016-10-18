# Oформлениe доставки "Новая почта" (Украина)
### API запросы для интернет-магазинов
### Совместимо с React, использование ES2015

В Украине существует несколько служб доставки товаров, имеющих свой онлайн сервис. Одна из самых популярных - это служба "Новая Почта". Она имеет сотни отделений по всей Украине. Интернет-магазины с удовольствием пользуются этой услугой.

Так как "Новая почта" постоянно развивается и расширяется, стало затруднительно отслеживать работающие и новые отделения. К тому же, у некоторых отделений есть ограничения по весу груза.
 
Я часто использую в своих проектах функцию оформления доставки товаров, поэтому создал этот модуль. В первой версии этого модуля я использую минимальный функционал из того что предлагает API службы.

Особенностью модуля есть то, что информация об отделениях не хранится в базе данных, а получается асинхронными запросами с сервера службы. 
   
В этой версии пакета использованы запросы для минимального алгоритма оформления доставки:

1. Выбор области Украины.
2. Выбор города.
3. Выбор отделения.

В следующих версиях планирую сделать запросы для отслеживания товара в пути, его статус.

Пакет [yz-react-deliveri-newpochta](https://github.com/zhukyuri/yz-react-deliveri-newpochta) находится на GitHub, где можно посмотреть его изнутри.

## Установка

1. cd <директория-проекта>
2. `npm install yz-react-deliveri-newpochta --save`

## Применение:

- Я готовлю текст документации по применению


## License

MIT
