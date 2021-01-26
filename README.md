# eslint-config

В данный пакет входит набор рекомендуемых правил и плагинов для фронтенд-проектов компании Realize.

## Установка пакета

Самостоятельно установить `eslint` версии 7 или выше:

`npm i eslint`

Установить данный набор правил и конфигов:

`npm install github:realize-it/eslint-config#main`

Расширить свой конфиг `.eslintrc.js` или аналогичный:

```
extends: [
    '@realize/eslint-config',
],
```

### Обновление пакета

`npm update @realize/eslint-config`

## Плагины и готовые конфиги правил

| Плагин/конфиг | Версия | Используется для extends |
| ------ | ------ | ------ |
| eslint | (peer) | eslint:recommended  |
| [eslint-config-airbnb](https://www.npmjs.com/package/eslint-config-airbnb) | 18.2.1 | eslint-config-airbnb <br /> eslint-config-airbnb/hooks |
| [eslint-plugin-jest](https://www.npmjs.com/package/eslint-plugin-jest) | 24.1.3 | plugin:jest/all |
| [eslint-plugin-unicorn](https://www.npmjs.com/package/eslint-plugin-unicorn) | 26.0.1 | ➖ |
| [eslint-plugin-eslint-comments](https://www.npmjs.com/package/eslint-plugin-eslint-comments) | 3.2.0 | plugin:eslint-comments/recommended |
| [eslint-plugin-sonarjs](https://www.npmjs.com/package/eslint-plugin-sonarjs) | 0.5.0 | plugin:sonarjs/recommended |
| [eslint-plugin-jsdoc](https://www.npmjs.com/package/eslint-plugin-jsdoc) | 31.0.8 | plugin:jsdoc/recommended |
| [eslint-plugin-unused-imports](https://www.npmjs.com/package/eslint-plugin-unused-imports) | 1.0.1 | ➖ |
| [@typescript-eslint/eslint-plugin](https://www.npmjs.com/package/@typescript-eslint/eslint-plugin) | 4.14.0 | plugin:@typescript-eslint/recommended |

### no-console

По умолчанию `no-console` настроен на `warn`. Вместо этого рекомендуется отключить это правило,
заменив его на [babel-plugin-transform-remove-console](https://www.npmjs.com/package/babel-plugin-transform-remove-console).

### Особенности использования без TypeScript (JavaScript-only проекты)

Переопределить правила:

```
'unused-imports/no-unused-imports-ts': 'off',
'unused-imports/no-unused-vars-ts': 'off',
```

Вместо этого включить:

```
'unused-imports/no-unused-imports': 'error',
'unused-imports/no-unused-vars': ['error', {
    vars: 'all',
    args: 'after-used',
    ignoreRestSiblings: true,
    argsIgnorePattern: '^_',
}],
```

### Прочие инструменты

[eslint-import-resolver-typescript](https://www.npmjs.com/package/eslint-import-resolver-typescript)

### Про не включенные рекомендуемые наборы правил

Набор рекомендуемых правил `unicorn` отключен по умолчанию по причине чрезмерной жесткости.
При желании можно расширить свой конфиг, добавив в него `plugin:unicorn/recommended`.

### Прочие плагины

Также вы можете найти полезными следующие плагины и инструменты:

* [eslint-plugin-boundaries](https://www.npmjs.com/package/eslint-plugin-boundaries)
* [eslint-import-resolver-alias](https://www.npmjs.com/package/eslint-import-resolver-alias)
