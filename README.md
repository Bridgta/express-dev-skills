<img src="https://i.imgur.com/vUOu9NW.jpg">


# Express Lab
# My Dev Skills - Part 1
---

## Intro

You've now seen how we can generate a skeleton Express application and implement the **index** & **show** functionality for a **resource** (To Dos).


##### 

## Exercises


- Scaffold a new app named `express-dev-skills` using express generator.

- Go into the folder and run `git init` to turn it into a repo.
  - Don't forget to create a `.gitignore` file to ignore the `node_modules` folder.
  - Commit everything right away.

- Be sure to create an array of "fake" data representing some of your awesome developer skills. The specific properties describing a skill object is up to you!

- Implement **index** functionality for the `skills` resource

- Implement **show** functionality for the `skills` resource

# Express Lab
# My Dev Skills - Part 2
---

## Intro

In the last lesson you saw how to use HTML forms and Express middleware, such as:

- `express.urlencoded` (body-parser)
- `method-override`

to perform **Create**, **Update** & **Delete** data operations in an Express application.

## Exercises

The goal of the lab is to add to your `express-dev-skills` project everything that we did during the _Express - Middleware_ lesson by adding the following functionality:

1. Display an _Add Skill_ link on the **index** view that when clicked, displays a **new** view that displays a form for entering a new Dev Skill.

2. When a new Dev Skill is submitted, the skill is added to the "database" and redirect the user to the **index** view.

3. On the **show** view, display a _Delete Skill_ link that when clicked, deletes the skill from the "database" and redirects to the **index** view.

Note: All routes should follow those described in the [RESTful/Resourceful routing chart](restful-routing-chart.md)

##### Hints

- Be sure to install, require & mount the `method-override` middleware.


##### Hints

- The controller action will need to get the Dev Skill being edited using the `Skill` Model and pass it to the **edit** view.
- Pre-fill `<input>` elements by using the `value` attribute and some EJS tags to write out the data properties of the skill passed in.

### This Lab is a Deliverable
