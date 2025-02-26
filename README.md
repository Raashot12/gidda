<p align="center">
  <a href="https://www.plateaumed.com" target="blank">
    <img src="./public/icon-192x192.png" width="100" alt="Logo" />
  </a>
</p>

# 🚀 PlateauMed - EHR Web Portal

[![TypeScript](https://img.shields.io/badge/TypeScript-5.x-blue.svg)](https://www.typescriptlang.org/docs/handbook/2/everyday-types.html)
[![React](https://img.shields.io/badge/React-18.x-58c4dc.svg)](https://react.dev/learn/start-a-new-react-project)
[![Next.js](https://img.shields.io/badge/Next-13.x-000.svg)](https://nextjs.org/docs/getting-started/installation)

![Redux](https://img.shields.io/badge/redux-%23593d88.svg?style=for-the-badge&logo=redux&logoColor=white)
![Mantine](https://img.shields.io/badge/Mantine-ffffff?style=for-the-badge&logo=Mantine&logoColor=339af0)
![Styled Components](https://img.shields.io/badge/styled--components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white)

## Setup

```sh
$ (ssh) git clone git@github.com:Plateaumed/ehr-react-web.git
$ cd ehr-react-web
$ npm cache clean --force
$ npm install
# Or, npm install --legacy-peer-deps
# TODO copy .env credentials
$ npm run dev
```

#### Usage

> Local: http://localhost:4200

> Dev: https://app.plateaumed-dev.com/login

## Cypress Automation Test

```sh
$ npm run cypress:open:local
```

## OpenAPI Code Generation

```sh
$ npm run api-generate
```

## Documentation

|   # | Service | URL                                                                                                             |
| --: | :------ | :-------------------------------------------------------------------------------------------------------------- |
|   1 | Zoho    | https://projects.zoho.com/portal/plateaumeddotcom#kanbanview/1982824000001304007/customview/1982824000000449003 |
|   2 | Figma   | https://www.figma.com/design/2rMKAVkVhgsk0XJg07XXgZ/PlateauMed-Web-EMR                                          |
|   3 | Swagger | https://api.plateaumed-dev.com/                                                                                 |

## Screenshots

![Login](./public/screenshots/dongle-login.png)

![Dashboard](./public/screenshots/dongle-dashboard.png)
