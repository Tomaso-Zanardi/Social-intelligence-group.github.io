---
title: Team
permalink: /team/
layout: collection
collection: portfolio
entries_layout: grid
---

<ul>
{% for member in site.data.team.people %}

<figure class="third">
    <a href="{{ member.url }}">
      <img src="{{member.image_path}}" alt="{{member.name}}">
    </a>
    
      <div class="members-text">
        <h2>{{member.name}}</h2>
        <p>{{member.title}}</p>
      </div>
    <span></span>
</figure>
{% endfor %}
</ul>