---
title: "Portfolio"
layout: single
permalink: /portfolio/
author_profile: false
classes: no-sidebar
---

<p> Here is some of my past academic work. I would be more than happy to correspond
over email about any of the projects linked here. </p>


  
{% for group in site.data.portfolio %}
<div class = "portfolio-section"> {{ group.section }} </div>

{% for item in group.entries %}
<div class = "portfolio-container">
    <div class = "portfolio-entry">
     <div class = "portfolio-title"> <a href="{{ item.link }}" target = "_blank"> {{ item.title }} </a> </div>
     <div class = "portfolio-subtitle"> {{ item.subtitle }} </div>
     <div class = "portfolio-description"> {{ item.description | markdownify }} </div>
    {% if item.note %} <div class = "portfolio-supplement"> {{ item.note }} {% endif %} </div>
    </div>
   <div class = "portfolio-thumb"> <a href="{{ item.link }}"> <img src="{{ item.thumb }}" alt= "{{ item.alt }}"> </a> </div>
   </div>
  {% endfor %}

{% endfor %}