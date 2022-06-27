---
title: tool
layout: base.njk
tags: navItem
pageClass: home
---
 <main>
 <h1 class="toolstitle">Pastry Tools</h1> 
<p class=tooltexts>For a novice pastry beginner, browsing the aisles at a local cookware store can be a daunting task. How many pans, whisks and measuring devices do you really need? Even the experienced home baker might not be using today's bevy of gadgets to the best of his or her advantage. To find out which products will go the distance, we turned to some of the top pastry chefs across the country. We had to know: What is their favorite baking tool? </p>
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
    </main>

