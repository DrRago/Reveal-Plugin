# Heading-Overview Plugin for reveal.js  
## Usage  

+ add plugin to Reveal initialisation:  
```
Reveal.initialize({
   dependencies: [ {src: 'plugin/heading-overview.js', async: true} ]
})
```

+ add class "heading-overview" to headings in top-level slides:
```
<section>
    <h2 class="heading-overview">Hello There</h2>
    <p>
        This plugin is the fucking best, because it's written by me
    </p>
</section>
```

+ add attribute "data-heading-overview" to set a different heading for the overview for this slide:
```
<section>
    <h2 class="heading-overview" data-heaading-ovrview="Alternative">Hello There</h2>
    <p>
        This plugin is the fucking best, because it's written by me
    </p>
</section>
```

+ add class "no-heading-overview" to slides hide the heading-overview:
```
<section class="no-heading-overview">
    <h2 class="heading-overview">Hello There</h2>
    <p>
        This plugin is the fucking best, because it's written by me
    </p>
</section>
```

+ add class "table-of-contents" to slides to generate a table of contents automatically with the headings classified with "heading-overview". Additionally add the attributes "data-heading-tag" and "data-heading" to set a heading for this slide:
```
<section class="table-of-contents" data-heading-tag="h3" data-heading="Table of contents">
    <p>
        this content does not matter. It gets overwritten.
    </p>
</section>
```

+ __don't forget to add the example stylesheet or create a custom one after the reveal stylesheets!__

## Class Names
+ ``.topics``: complete container
+ ``.topics .head``: container with the topics
+ ``.topics .head .active``: active topic
+ ``.topics .head .inactive``: inactive topic
+ Headings have no specific class, they are ``.topics .head h4``
  
### Please enjoy art  

&copy; &trade; by Leonhard Gahr