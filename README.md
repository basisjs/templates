## English

### What is this

`basis-template.js` is the fast low-level template engine. Most of template engines just produce some HTML. But this engine working with DOM only and not just produce a DOM fragment, but also update it until dispose. That make that template engine unique.

This library is not designed for use as-is. But aimed to be integrated into other frameworks and libraries as module or plugin, provides more convinient API.

More info on [project's page](http://basisjs.com/templates).

## Русский

### Что это?

`basis-template.js` - это быстрый низкоуровневый шаблонизатор. В то время, как большинство шаблонизаторов лишь производят некоторый HTML, данный шаблонизатор оперирует в терминах DOM, и не только производит DOM фрагмент из описания, но и занимается дальнейшим его обслуживанием, в чем и заключается его уникальность.

Этот шаблонизатор не расчитан на использование в исходном виде, а нацелен на встраивание в другие библиотеки и фреймворки, в виде модулей или плагинов, которые предоставляют более удобное API.

Больше информации можно найти на [странице проекта](http://basisjs.com/templates).

### Репозитарий

Этот репозитарий содержит все необходимое для сборки библиотеки. На данный момент, это сборка модулей `template` и `l10n` из фреймворка [basis.js](http://github.com/basisjs/basisjs). В дальнешем планируется перенести код модулей из репозитария basis.js в данный репозитарий.

Так же в репозитарии доступен код плагинов (пока это плагин для backbone.js), которые представляют собой библиотеку `basis-templates.js` и некоторое дополнительное API, которое соотвествует правилам и подходам присущим целефой библиотеке или фреймворку.

### Сборка

Для сборки необходим консольный инструмент `basis.js` – [basisjs-tools](http://github.com/basisjs/basisjs-tools). Собирается библиотека следующей командой:

  $ basis build src/basis-templates.html

После ее выполнения в папке `build` будет доступен файл сборки.

Можно так же выполнить `bash` скрипт `build.sh` для получения `production` сборок библиотеки и плагинов.
