# Frontend Mentor - E-commerce product page solution

This is a solution to the [E-commerce product page challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/ecommerce-product-page-UPsZ9MJp6). Frontend Mentor challenges help you improve your coding skills by building realistic projects.

## Table of contents

- [Overview](#overview)
  - [The challenge](#the-challenge)
  - [Screenshots](#screenshot)
  - [Links](#links)
- [My process](#my-process)
  - [Built with](#built-with)
  - [What I learned](#what-i-learned)
  - [Continued development](#continued-development)
  - [Useful resources](#useful-resources)
- [Author](#author)


## Overview

### The challenge

Users should be able to:

- View the optimal layout for the site depending on their device's screen size
- See hover states for all interactive elements on the page
- Open a lightbox gallery by clicking on the large product image
- Switch the large product image by clicking on the small thumbnail images
- Add items to the cart
- View the cart and remove items from it

### Screenshot

![Desktop-design](./design/desktop-design.JPG)
![Mobile-design](./design/mobile-design.JPG)

**Note: More screenshots in the design folder**

### Links

- Solution URL: [see my solution to this challenge](https://www.frontendmentor.io/solutions/responsive-mobilefirst-solution-to-ecommerce-product-page-challenge-7hjZmkolP2)
- Live Site URL: [view live site](https://damola-147.github.io/Ecommerce-product-page-solution/)


## My process

### Built with

- Semantic HTML5 markup
- CSS custom properties
- Flexbox
- Mobile-first workflow
- JavaScript

### What I learned

- Changing the color of an SVG image on hover was quite a challenge for me. After a peruse of some articles (links below) that challenge became somewhat of an inspiration. I discovered that the combination of CSS filter properties does the trick. Some examples:

```css
.delete:hover {
    filter: brightness(0);
}/*Makes the image completely dark (bold) on hover */

.close {
  filter: brightness(90); 
}/* Turn Black (original) to White color */

.close:hover {
  filter: invert(55%) sepia(100%) saturate(3.5) brightness(110%);
} /* To Orange on hover */

.arr:hover img {
  filter: invert(55%) sepia(100%) saturate(3.5);
} /* Orange on hover */

.thumb:hover {
  filter: opacity(1) drop-shadow(0 0 0 #fff) saturate(0.2) brightness(150%);
} /* Make thumbnail opaque/white */
/* The dropshadow is used to change the image's color to white */
```
```css
/* Combinations & Value types, degree or percentage: */

.user-acc .cart:hover {
  filter: invert(27%) saturate(2878%) hue-rotate(346deg) brightness(104%) contrast(97%);

  filter: invert(200%) saturate(5000%) hue-rotate(360deg) brightness(6%) contrast(50%); 

  filter: brightness(60%);
}
```
- I also learned that the `:hover` pseudo-class needs a pointing (graphical input) device, capable of distinguishing the actions *pointing* and *selecting/activating*. Usually on mobile devices with a touch interface you don't have the former, only the latter. That said, `:hover` has a weird behaviour on mobile devices and is problematic on touchscreens. A workaround for this is:

```css
@media (hover: hover) and (pointer: fine) {
 button:hover {
   ...
   /* True for pointing devices, not touchscreens */
 }
}
```


### Continued development

I am currently learning React, a JavaScript library. Building this project made me realize how quickly JavaScript can become messy and all over the place. And how React is great for complex projects like this one - for building reuseable components.


### Useful resources

These are amazing articles which helped me finally understand CSS filter and changing the color of svg images. And also `:hover` behaviour on touchscreens. I'd recommend it to anyone still learning this concept.

- [How to change color of SVG on hover](https://css-tricks.com/change-color-of-svg-on-hover/)  

- [CSS filter property](https://css-tricks.com/almanac/properties/f/filter/)  

- [Changing image color without forming an actual shadow](https://www.delftstack.com/howto/css/css-change-image-color/#:~:text=We%20can%20change%20the%20image,without%20forming%20an%20actual%20shadow.)  

- [Using CSS filters to change SVG colours](https://link.medium.com/2t5b1bHRDsb) 

- [A CSS only solution to :hover on touchscreens](https://link.medium.com/dHtluhMmHsb) 

- [Detecting Hover Capable Devices](https://css-irl.info/detecting-hover-capable-devices/)


## Author

- GitHub - [Damola-147](https://github.com/Damola-147)
- Frontend Mentor - [Damola-147](https://www.frontendmentor.io/profile/Damola-147/)
- Twitter - [@adebiyi_stoke](https://www.twitter.com/adebiyi_stoke/)

