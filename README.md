# Getting Started with Create React App

### About Proejct;

I tried to minimize the use of React only for ui, and all the logic I wrote in vanilla JS (as required).

Architectural questions may arise but I decided to use OOP and FP with hooks, simply to imply that I can use both.

## Game Rule:

The UI should have a “Hit” button. When clicked, you must pick a random swarm member (Queen,
Worker or Drone) and do the following damage to it: queen – 8 damage, worker – 10 damage, drone
– 12 damage
When a bee remains without HP, it dies. When the Queen remains without HPs, all swarm members
die.
The game user interface must be clear, concise, intuitive and its main elements are:
• “Hit” button
• The player name
• Alive bees: grouped by type (BONUS: show detailed info about the swarm’s health)
• Which bee type is hit at each click and the damage done



## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`
