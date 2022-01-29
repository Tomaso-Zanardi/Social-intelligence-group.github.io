---
title: Publications
permalink: /publications/
layout: single
author_profile: false
share: false
years: [2020, 2019, 2018]
---

<h3  id="volition_and_free_will_belief">Volition and Free Will Belief</h3>

{% bibliography -f volition_and_free_will_belief %}


<h3  id="social_context">Representation of Other Agent and Influence of Social Context to Cognition and Behaviour</h3>

{% for year in page.years %}

<h4 id="{{year}}">{{year}}</h4>
{% bibliography -f social_context -q @*[year={{year}}]* %}

{% endfor %}