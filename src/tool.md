---
title: tool
layout: base.njk
tags: navItem
pageClass: toolcollector
---
 <h1 class="toolstitle">Pastry Tools</h1> 
     <selection class="tools-card">  
{%- for page in collections.toolcards %}
<div class="toolmaincontainer">
  <div class="toolmaincard">
   <div class="imgBx">
   <img src="{{page.data.postImg}}" alt="{{page.data.postImgAlt}}" >
        </div>
  <div class="contentBx">
      <h2 class="project-title">{{page.data.title}}</h2>
      <div class="price">
        <h3 class="project-price">Estimate Price:{{page.data.price}}</h2> 
      </div>
      <a href="{{page.url}}">Explore<span>&rarr;</span></a>
  </div>
  </div>
</div>

{%- endfor %}
  </selection>


