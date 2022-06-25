---
title: tool
layout: base.njk
tags: navItem
pageClass: home
---
 <main>
 <h1 class="Tools">Pastry Tools</h1> 
     <selection class="tools-card">  
{%- for page in collections.toolcards %}
 <article class="card">  
   <div class="card-img"> 
   <a href="{{page.url}}"><img src="{{page.data.postImg}}" alt="{{page.data.postImgAlt}}" ></a>
      </div>
      <div class="card__content">
         <h2 class="project-title"><a href="{{page.url}}">{{page.data.title}}</a></h2> 
         <h3 class="project-price">Estimate Price:{{page.data.price}}</h2> 
        <button class="card__btn"><a href="{{page.url}}">Explore<span>&rarr;</span></a></button>
   </div> 
    </article>
{%- endfor %}
  </selection>
    </main>
