---
title: "Travel Writing"
permalink: /travel-writing/
author_profile: false
classes: no-sidebar
---
<p>Here is some of my travel writing.</p>


<div class="travel-grid-container"> 
{% for item in site.data.travel_writing %}
    <div class="travel-post">
        <div class="travel-post-img">
        {% if item.video %}
        <div class="video-wrap">
         <iframe src="{{ item.video }}" loading="lazy" allowfullscreen></iframe>
         </div>
        {% else %}
         <a href="{{ item.link }}" target = "_blank"> <img src="{{ item.thumb}}"></a>
        {% endif %}
         </div>
        <div class="travel-title"> <a href="{{ item.link }}" target = "_blank"> {{ item.title }}</a>
        </div>
        <div class="travel-subtitle">{{ item.subtitle }}</div>
    </div>
{% endfor %}
</div>