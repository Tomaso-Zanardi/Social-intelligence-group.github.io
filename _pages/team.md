---
permalink: /team/
layout: archive
page_css:
  - /assets/css/team.css
  - /assets/css/modal.css
page_js:
  - ../assets/js/modal.js
---


<div class="grid__wrapper">

{% for member in site.data.team.people %}


<div class="feature__item">

<div class="archive__item">

<div class="archive__item-teaser">

<a href="{{ member.url }}"> <img src="{{member.image_path}}" alt="{{member.name}}"> </a>

</div>


<div class="archive__item-body">

<h2 class="archive__item-title">{{member.name}}</h2>

<p>{{member.title}}</p>


<div class="archive__item-excerpt">

{% if member.excerpt %}
<div class="modal micromodal-slide" id="modal-{{member.id}}" aria-hidden="true">
  <div class="modal__overlay" tabindex="-1" data-micromodal-close>
    <div class="modal__container" role="dialog" aria-modal="true" aria-labelledby="modal-{{member.id}}-title">
      <header class="modal__header">
        <h1>{{member.name}}</h1>
        <button class="modal__close" aria-label="Close modal" data-micromodal-close></button>
      </header>
      <div>
        <div>
            <p>{{member.excerpt}}</p>
            <p>
            {% if member.github %}
            <a href="https://github.com/{{ member.github }}" style="text-decoration:None" title="GitHub" rel="nofollow noopener noreferrer me">
            <i class="fab fa-fw fa-github" aria-hidden="true"></i>
            </a>
            {% endif %}
            {% if member.google_scholar %}
            <a href="https://scholar.google.com/citations?user={{ member.google_scholar}}" style="text-decoration:None" title="Google Scholar" rel="nofollow noopener noreferrer me">
            <i class="ai ai-google-scholar ai-3x" aria-hidden="true"></i>
            </a>
            {% endif %}
            {% if member.researchgate %}
            <a href="https://www.researchgate.net/profile/{{ member.researchgate}}" style="text-decoration:None" title="Research Gate" rel="nofollow noopener noreferrer me">
            <i class="ai ai-researchgate ai-3x" aria-hidden="true"></i>
            </a>
            {% endif %}
            {% if member.orcid %}
            <a href="https://orcid.org/{{ member.orcid}}" style="text-decoration:None" title="Orcid" rel="nofollow noopener noreferrer me">
            <i class="ai ai-orcid ai-3x" aria-hidden="true"></i>
            </a>
            {% endif %}
            {% if member.twitter %}
            <a href="https://twitter.com/{{ member.twitter}}" style="text-decoration:None" title="Twitter" rel="nofollow noopener noreferrer me">
            <i class="fab fa-fw fa-twitter" aria-hidden="true"></i>
            </a>
            {% endif %}
            </p>
        </div>
      </div>
    </div>
  </div>
</div>


<a data-micromodal-trigger="modal-{{member.id}}" href='javascript:void(0);' class="btn btn--inverse btn--large">About me</a>

{% endif %}





</div>

</div>


</div>

</div>



{% endfor %}

</div>






