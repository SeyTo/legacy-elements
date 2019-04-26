# prdins-elements

> components, stores, helpers for prdins fe projects

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report

# run unit tests
npm run unit

# run all tests
npm test
```

## Post installation of component

1. use as vue plugin

`src/plugins/elements.js`
```js
    import Vue from 'vue'
    import Elements from 'prdins-elements'

    Vue.use(Elements.components)
```

  Important note: when importing Vuetify, you should `import Vuetify from 'vuetify'` and not from `vuetify/lib` which will import all component at one import else you might get error with 'prdins-elements' complaining that they cant find this or that components

2. import into main app

`src/main.js`
```js
    import @/plugins/elements
    import @/plugins/vuetify
    import 'prdins-elements/src/styles/app.styl'

    import App from '@/App.vue'
    ...
```

3. import into store as well (important). Some components depend on the stores.

`src/stores/index.js`
```js
    import Elements from 'prdins-elements'

    Vue.use(vuex)

    export default new Vuex.Store({
      modules: [ ... ],
      plugins: [ Elements.store ]
    })
```

## Components

1. ActionBar
  Simple bar of FABs with Tooltip.

2. Countdown
  Countdown timer.
