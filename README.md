## Install

```
git clone git@github.com:yao-dev/marvel-app.git
cd marvel-app
npm install
```

## Requirements

Add **API_PUBLIC** and **API_PRIVATE** key igin src/config/index.js

## Start app

Enter in project then run :

**Dev mode**

```
npm run dev
```

**Prod mode**

```
npm run build
npm run start
```

## Documentation

```
npm run styleguide:build && npm run styleguide
```

With running app

```
npm run dev
```

Then go to http://localhost:6060

## Unit tests & coverage

```
npm test
```

**With coverage**

```
npm run test:coverage
```
And go to (path/of/your/system/marvel-app/coverage/lcov-report/index.html)

## Deploy with now.sh

```
npm run deploy
```
