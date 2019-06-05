# ePortfolio

Made with React and Bootstrap, need an api backend

Check demo at https://blunt76.github.io/myportfolio/


## HOW TO

Rename .env.js.example to .env.js and edit it:

const env = {
  api: 'your backend url here/eportfolio/api.php', <-- should return a json array
  username: 'your name and lastname',  <-- navbar and footer
  githubUrl: 'your github url',
  githubProjectUrlBtnText: 'See it on Github',
  onlineProjectUrlBtnText: 'See it online',
  linkedinUrl: 'your linkedin url',
  appName: 'ePortfolio or whatever you want',  <-- navbar
  subTitle: 'My web Projects or whatever you want',
  year: '2019',  <-- footer
}


### API

The backend api need to return this json:

``` [{
  githuburl: "https://github.com/yourLogin/yourRepo",
  imgurl: "a screenshot url of the project",
  onlineurl: "your project deployment url",
  text: "Comment your app here",
  title: "project title",
  },] ```



## DEV MODE
In the project directory, you can run:

`npm start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>
You will also see any lint errors in the console.


### DEPLOYMENT

Activate your github pages

Modify package.json "homepage"

```"homepage": "your portfolio github pages url",```

and run:

```npm run deploy```

A new branch 'gh-pages' will be created in a few minutes, point your github pages to this branch

Done !!


