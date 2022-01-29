---
title: Team
permalink: /team/
layout: archive
---


<div class="grid__wrapper">

{% for member in site.data.team.people %}



<div class="feature__item" >

<div class="archive__item" style="flex-direction: row">

<div class="archive__item-teaser" style="width: 200px">

<a href="{{ member.url }}"> <img src="{{member.image_path}}" alt="{{member.name}}"> </a>

</div>


<div class="archive__item-body" style="flex-direction: row">

<h2 class="archive__item-title">{{member.name}}</h2>

<p>{{member.title}}</p>


<div class="archive__item-excerpt">

{% if member.excerpt %}

<div class="modal micromodal-slide" id="modal-{{member.id}}" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-{{member.id}}-title">
      <header class="modal__header">
        <h2 class="modal__title">
          {{member.name}}
        </h2>
        <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <div class="modal-content-content">
        <div class="modal__content">
          {{member.excerpt}}
        </div>

      </div>
    </div>

  </div>
</div>

<a data-micromodal-trigger="modal-{{member.id}}" href='javascript:void(0);' class="btn btn--primary">Open Modal Dialog</a>


{% endif %}

</div>

</div>


</div>

</div>



{% endfor %}

</div>






