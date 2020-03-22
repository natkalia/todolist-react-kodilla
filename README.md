# To-Do list App with React :clipboard:

To-Do List app created as exercise for Web Developer Bootcamp in Kodilla (Module 12.2).

## Teaser

![view-1](https://user-images.githubusercontent.com/49140572/75342599-06772900-5897-11ea-833e-07639c0b1e4d.PNG)
![view-2](https://user-images.githubusercontent.com/49140572/75342600-07a85600-5897-11ea-8d00-bf50a8f6fcc4.PNG)

## Setup

**Live on Heroku:** [https://list-react-redux.herokuapp.com/](https://list-react-redux.herokuapp.com/)

**Repository**: https://github.com/natkalia/todolist-react-kodilla.git

You can also **download a zip archive** or a **clone repository** from github page:
```bash
git clone https://github.com/natkalia/todolist-react-kodilla.git
```
More info about launch/installation coming soon.

## Technologies/tools

Project is created with:
* HTML
* Sass for CSS
* Javascript (ES6)
* React
* Redux
* deployment on Heroku with http-server package
* Webpack

## Clean code

Description of linters coming soon.

## Todo / known bugs
- [ ] add a component, which by default will only display the menu button (hamburger), and when clicked, will show a drop-down menu containing all the lists currently available in the app, and after clicking one list only this list will be shown (add also All button on main page to show all lists again)
- [ ] refactor class to function components where possible
- [x] add new component for search results, showing one list with all found cards together (but with link to list location)
- [ ] add drag-and-drop feature for moving cards in and between columns
- [ ] add drag-and-drop feature for moving columns in and between lists
- [ ] add possibility to provide description and url with image when adding new list
- [x] add simple animation for apperance of 'To do... doing... done!' in splash
- [ ] add hamburger for RWD in navigation
- [ ] fix buttons in creator for RWD
- [ ] fix problem with buttons apperance that is now based on opacity
- [x] update webpack and dataStore for context/output paths to work for lists images
- [ ] fix problem with routing on heroku (when refreshing or using browser navigation)
- [x] fix bug with cards in columns (list subpage) - not properly showing, problem with adding new cards, but only after a search was performed
- [ ] fix bug with inputs that sometimes become kind of disabled for few seconds, without clear reason
- [ ] refactor SearchResult to show name of list/column next to link to list (link is already provided)
- [ ] refactor List view so that cards that were searched for lately, will have a different color, so that
these cards could be found easier after user is redirected from SearchResults 
- [ ] refactor search feature so that it would also check if searchString is included in list or column name, and add relevant cards with links to SearchResults
- [x] add possibility to delete text on Card
- [ ] add possibility to edit text on Card (icons already added)
- [ ] add possibility to delete Column
- [x] add possibility to delete List
- [ ] if user clicks on margin of ListLink, link is active - should be refactored
  
## Project status
In progress.

## Credits
Coming soon.
