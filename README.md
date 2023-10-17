[![Review Assignment Due Date](https://classroom.github.com/assets/deadline-readme-button-24ddc0f5d75046c5622901739e7c5dd533143b0c8e959d652212380cedb1ea36.svg)](https://classroom.github.com/a/zprwltzm)
# Typography CSS library
**Author:** [Natálie Ryšavá](https://github.com/NatalieRysava)
## Description
Glyphica.css is **a&nbsp;free typographic library** that you can implement into your HTML code. It was created as a&nbsp;school project and offers a&nbsp;valuable solution to streamline your web development process.

With Glyphica.css, there's no need to create a&nbsp;new CSS file for every project, because it provides pre-designed styles for headings, special text markups, lists, buttons, basic tables, images, and even image galleries.

**Simply download the file and link it via stylesheet to your document's head section. The CSS file is fully responsive and compatible with all major browsers. Explore and enjoy!**
## Demo site
Link to **[demo](https://pslib-cz.github.io/2023-l4-web-typographic-library-NatalieRysava/)** site for preview.
## Table of contents
1. [Implementation](#Implementation)
2. [Typography](#Typography)
3. [Colors](#Colors)
4. [Headings](#Headings)
5. [Text](#Text)
6. [Lists](#Lists)
7. [Buttons](#Buttons)
6. [Text](#Text)
   * [Styled text](#Styled-text)
7. [Components](#Components)
   * [Tables](#Tables)
   * [Buttons](#Buttons)
8. [Photos](#Photos)
   * [Recommendation](#Recommendation)
## Implementation
1. Download **[glyphica.css](https://github.com/pslib-cz/2023-l4-web-typographic-library-NatalieRysava/blob/main/css/glyphica.css)**
2. Add CSS file in your project's folder
3. Open it in Visual Studio Code 
3. Link CSS file via stylesheet in your document's head section
```html
<link href="glyphica.css" rel="stylesheet">
```
## Typography
Glyphica.css is using three linked Google fonts – **Montserrat** as main for html, **Kadwa** for headings and **Source Code Pro** for codes. You can change them, simply remove predefined font and paste yours.
```html
/* imported fonts */
@import url('https://fonts.googleapis.com/css2?family=Kadwa:wght@400;600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Montserrat:ital,wght@0,300;0,400;0,600;1,300;1,400;1,600&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Source+Code+Pro&display=swap');

/* linked fonts */

h1, h2, h3, h4, h5, h6 {
    font-family: 'Kadwa', serif;
}

caption {
    font-family: 'Kadwa', serif;
}

html{
    font-family: 'Montserrat', sans-serif;
}


code {
    font-family: 'Source Code Pro', monospace;
}
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
## Headings
Use `<h1`>, `<h2>`, `<h3>`, `<h4>`, `<h5>`, `<h6>` tags for headings. Optionally, `class="underline"` underlines the heading to separate it from the rest of the content.
## Text
A standard paragraph is defined by `<p>` tag.
### Styled text
You can apply:
* Bold text – `<b>` for stylistic purposes or `<strong>` for greater importance
* Italic text – `<i>` for stylistic purposes or `<em>` for emphasis
* Highlighted text – `<mark>`
* Hypertext link – `<a>`
* Strikethrough – `<s>` for stylistic purposes or `<del>` for defining deleted text
## Lists
Use either `<ol>` or `<ul>` as appropriate, in combination with `<li>` tags for a&nbsp;structured list.
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
## Components
### Buttons
Button is created by adding `class="button"` to the `<a>` or `<button>` tag.

There are two types of predefined buttons:
* For light background – `<a class="button">`
* For dark background – `<a class="button button--reversed">`
### Tables
Use the `<table>` tag for a&nbsp;standard table.

There are two types of predefined buttons:
* For light background – `<table>` without any class
* For dark background – `<table class="table--reversed">`
## Photos
* Single image
Use the `<img>` tag inside a&nbsp;`<figure>` to insert a&nbsp;image.

* Gallery
If you want to create a&nbsp;image gallery, add `class="gallery"` to the wrapper.

### Recommendation
To enhance the functionality of your gallery and enable smooth, arrow-driven photo navigation, I highly suggest considering the utilization of **[the lightgallery folder](https://github.com/pslib-cz/2023-l4-web-typographic-library-NatalieRysava/tree/main/lightgallery)**, a&nbsp;powerful image gallery solution developed by **Sachin Neravath**. You can conveniently acquire it from its official **[website](https://www.lightgalleryjs.com/)**, or directly from the project's **[GitHub repository](https://github.com/sachinchoolur/lightGallery)**. This tool enhances your gallery with a&nbsp;interactive, scrollable interface for engaging photo exploration.

Don't forget to link it via stylesheet in your document's head section. In my opinion, it is optimal to attach these files that support zoom, thumbnails and autoplay.
```html
    <link rel="stylesheet" href="lightgallery/css/lightgallery.css">
    <link rel="stylesheet" href="lightgallery/css/lg-thumbnail.css">
    <link rel="stylesheet" href="lightgallery/css/lg-zoom.css">
    <link rel="stylesheet" href="lightgallery/css/lg-autoplay.css">
    <script src="lightgallery/lightgallery.min.js"></script>
    <script src="lightgallery/plugins/thumbnail/lg-thumbnail.min.js"></script>
    <script src="lightgallery/plugins/zoom/lg-zoom.min.js"></script>
    <script src="lightgallery/plugins/autoplay/lg-autoplay.min.js"></script>
```
You need to add a&nbsp;script after the `<footer>` tag for the feature to work. If you have specific scripts linked in your document's head section, all corresponding plugins should be listed there.
```html
    <script type="text/javascript">
        lightGallery(
            document.querySelector(".gallery"), {
            plugins: [lgZoom, lgThumbnail, lgAutoplay],
            speed: 500,
            selector: ".gallery > figure > a"
        });
    </script>
```
