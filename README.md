# So, What is This?
This repository contains all code examples for the demos from my [Pluralsight](https://www.Pluralsight.com "Pluralsight") course: Styling Angular Applications. Use these files to follow along with the course or for whatever you want really.

# Styling Angular Applications
Angular revolutionizes the way that we architect CSS for modern web applications. But before we can become Angular styling ninjas we need to take a step back consider the many different ways that things can be done. In this course we explore how the framework aligns with web components and what that means for adding styles to components and apps in general. Throughout this course we develop systems geared towards organization, scale, and maintainability for HTML and CSS within Angular apps. And as we get more comfortable adding and styling components within these systems we consider component themes and the ways that we can transform their look under certain circumstances. By the end of this course we'll have a strong knowledge of how Angular processes CSS and the many different ways it can be leveraged as part of an overall design system for creating beautiful, organized, maintainable, and future proof web applications.

##### Introduction
There are many considerations when it comes to CSS and styling applications in Angular version 2+ and in this module we explore, at a high level, many of the concepts we will cover in this course.

##### How Styles Work in Angular
In this module we dive into how styles work in Angular. We cover how the different view encapsulation modes work, what they mean as far as the rendered code and style scoping, and why you may want to use each of them. We explore some of the different ways that we can add styles to components, how Angular handles them, and how their priority flows through. And lastly, we dig into how Angular emulates Shadow DOM, CSS Scoping Module selectors, what they look like when rendered in the browser, and how/why we would want to use them.

##### Scalable, Maintainable CSS/SCSS Architecture in Angular
In this module we leverage the default Emulated view encapsulation mode for angular components along with the SASS preprocessor to cover concepts regarding global styles, variables, and mixins.  We explore aspects regarding CSS selectors and class naming conventions both at a global app level as well as at a local component level. We develop a system for applying CSS relative units across components with reliability. And we utilize SASS variables and mixins to create relationships between styles within individual components and across multiple components making them easier to edit and maintain over time.

##### Creating Component Themes
In this module we focus on what a component theme is and on creating components that will vary their look under certain criteria. First we will look at explicitly setting component themes per instance by adding classes and properties to our components and exploring what this SCSS/CSS looks like. We then look at providing context aware themes to our components that automatically change styles based on the surroundings of the component using the :host-context selector. We use methods to determine if theme classes have been provided or if projected content exists to conditionally alter the look of components. And finally we explore the future of component theming with CSS Custom Properties.

##### It's Wrap
In this module we recap, at a high level, the core concepts and takeaways from the course and get ourselves set up to build amazing Angular applications that look great today and are easy to bring forward into the web of tomorrow.
## How to Use It
In order to work with this project here's what you'll need to do...

### Install and Set Up
1. Install the following if you don't already have them
  * [node.js](https://nodejs.org/en/ "Node.js")
  * [git](https://git-scm.com/ "Git")<br /><br />
2. Clone the repository down to your computer<br />`https://github.com/pluralsight-styling-angular-apps/demos-v2.git`<br /><br />
3. CD to the project folder<br />`cd demos-v2`<br /><br />
4. Install project dependencies<br />`npm install`<br /><br />
5. Build the code, watch for file changes, and serve up the site locally<br />`npm start`

### Working With the Demos
This repository contains the entire set of 56 demos for the course. To switch between demos you'll just need to checkout the proper branch. In order to know what branch to use for a given demo, the branch name is briefly displayed in the lower right hand corner of the video clip every time a code example is shown. The branches are named by module, for example, the first demo in module 02 is named `module-02-01` whereas the sixth demo in module 04 is named `module-04-06`.

#### Module 02
`module-02-01` - `module-02-16`

#### Module 03
`module-03-01` - `module-03-25`

#### Module 04
`module-04-01` - `module-04-15`