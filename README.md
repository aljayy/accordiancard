# Frontend Mentor - FAQ accordion card solution

This is a solution to the [FAQ accordion card challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/faq-accordion-card-XlyjD0Oam). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshot](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)

## Overview

### The challenge

Users should be able to:

- View the optimal layout for the component depending on their device's screen size
- See hover states for all interactive elements on the page
- Hide/Show the answer to a question when the question is clicked

### Screenshot

[Desktop](images/desktop-screenshot.png)

[Mobile](images/mobile-screenshot.png)

### Links

- Solution URL: [https://github.com/aljayy/accordioncard]
- Live Site URL: [https://aljayy.github.io/accordioncard/]

## My process

### Built with

- Semantic HTML5 markup
- CSS/SCSS custom properties
- Flexbox
- CSS Grid
- Mobile-first workflow
- JavaScript

### What I learned

One of the main learning lessons that really stuck with me is planning out for both mobile AND desktop. Coming from a mobile first approach I originally had formatted my code so that the image was outside of the card to be able to place its container as position absolute and take it out of the document flow and position it above the card as needed. But when it came down to desktop, I found that I needed the image inside of the card to hide the overflow of the edge. If I had planned this out alongside my mobile site in the beginning I could have probably seen this coming. I know not every single obstacle can be seen in advanced, but being prepared as possible to handle them is still something I want to become better at.

This was my first project where I had to do DOM manipulation and it was a great learning lesson. I did not struggle too much with this but finally putting something I've learned with JavaScript and seeing it work was very satisfying.

Another main thing I learned that goes hand in hand with my first point above is to be okay with restructing my code. When I got to the JS portion I found that I had to put my answers and question in seperate classes to make it work the way I wanted to. I've had to break out of this mindset that once I structure my code a certain way, I have to make my other languages work with that structure.

### Continued development

One of the areas I want to continue working on is in my "position" property values. Working with absolute and relative values really made my site work but they're still something I'm getting to know better which each time I use them.

Another area I want to gain more of an understanding in is the difference between the position and transform: translate properties. They both seem to do the same job when wanting to move an element around but I know they both have their own unique best use cases which is something I have made a point to research and learn so that the next time I run into an issue that can be solved with these properties, I know which one to apply.
