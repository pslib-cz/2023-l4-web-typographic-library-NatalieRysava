[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zprwltzm)
# Typography CSS library
**Author:** [Natálie Ryšavá](https://github.com/NatalieRysava)
## Description
Glyphica.css is a free typographic library that you can implement into your HTML code. It was created as a school project and offers a valuable solution to streamline your web development process.

With Glyphica.css, there's no need to create a new CSS file for every project, because it provides pre-designed styles for headings, special text markups, lists, buttons, basic tables, images, and even image galleries.

**Simply download the file and link it via stylesheet to your document's head section. The CSS file is fully responsive and compatible with all major browsers. Explore and enjoy!**
## Download
1. Download **[glyphica.css](https://github.com/pslib-cz/2023-l4-web-typographic-library-NatalieRysava/blob/main/css/glyphica.css)**
2. Add CSS file to Visual Studio Code
3. Link CSS file via stylesheet in your document's head section
```html
<link href="glyphica.css" rel="stylesheet">
```
## Demo site
Link to **[demo](https://pslib-cz.github.io/2023-l4-web-typographic-library-NatalieRysava/)** site for preview.
## Signpost
1. [Font](#Font)
2. [Colors](#Colors)
3. [Headings](#Headings)
4. [Text](#Text)
5. [Lists](#Lists)
6. [Buttons](#Buttons)
7. [Tables](#Tables)
8. [Photos](#Photos)
## Font
Glyphica.css is using three linked Google fonts – **Montserrat** as main for html, **Kadwa** for headings and **Source Code Pro** for codes. You can change them, simply remove predefined font and paste yours.
```html
/* imported fonts */
@import url('https://fonts.googleapis.com/css2?family=Kadwa:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');
```
## Colors
The predefined colors can be changed by `:root` selector.
```html
/* colors */
:root {
    --white-color: #fff;
    --black-color: #000;
    --grey-color: #dedede;
    --primary-color: #ff9533;
    --secondary-color: #932295;
}
```

## Components
### Headings
Use `<h1`>, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` tags for headings. Optionally, `class="underline"` underlines the heading to separate it from the rest of the content.
### Text
A standard paragraph is defined by `<p>` tag.

You can apply also:
* Bold text – `<b>` for stylistic purposes or `<strong>` for greater importance
* Italic text – `<i>` for stylistic purposes or `<em>` for emphasis
* Highlighted text – `<mark>`
* Hypertext link – `<a>`
* Strikethrough – `<s>` for stylistic purposes or `<del>` for defining deleted text
### Lists
Use either `<ol>` or `<ul>` as appropriate, in combination with `<li>` tags for a structured list.
* Ordered list – `<ol>`
```html
<ol>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3 with two sub-items
        <ol>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
        </ol>
    </li>
    <li>Item 4</li>
</ol>
```
* Unordered list – `<ul>`
```html
<ul>
    <li>Item 1</li>
    <li>Item 2</li>
    <li>Item 3 with two sub-items
        <ul>
            <li>Sub-item 1</li>
            <li>Sub-item 2</li>
        </ul>
    </li>
    <li>Item 4</li>
</ul>
```
### Buttons
Button is created by adding `class="button"` to the `<a>` or `<button>` tag.

There are two types of predefined buttons:
* For light background – `<a class="button">`
* For dark background – `<a class="button button--reversed">`
### Tables
Use the `<table>` tag for a standard table.

There are two types of predefined buttons:
* For light background – `<table>` without any class
* For dark background – `<table class="table--reversed">`
### Photos
Use the `<img>` tag to insert an image. If you want to create an image gallery, add `class="gallery"` to the wrapper.