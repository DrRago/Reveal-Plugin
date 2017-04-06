# Heading-Overview Plugin for reveal.js  
## Usage  

+ add class "heading-overview" to headings in top-level slides:
```
<section>
    <h2 class="heading-overview">Hello There</h2>
    <p>
        This plugin is the fucking best, because it's written by me
    </p>
</section>
```

+ add plugin to Reveal initialisation:  
```
Reveal.initialize({
   dependencies: [ {src: 'plugin/heading-overview.js', async: true} ]
})
```
## Class Names
+ ``.topics``: complete container
+ ``.topics .head``: container with the topics
+ ``.topics .head .active``: active topic
+ ``.topics .head .inactive``: inactive topic
+ ``.hidden``: set to ``.topics`` on overview active
+ Headings have no specific class, they are ``.topics .head h4``
  
### Please enjoy art  

&copy; &trade; by Leonhard Gahr