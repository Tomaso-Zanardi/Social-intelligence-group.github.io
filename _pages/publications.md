---
title: Publications
permalink: /publications/
layout: single
author_profile: false
share: false
toc: true
toc_label: "Topics"
years: [2021, 2020, 2019, 2018]
---

<h3  id="volition_and_free_will_belief">Volition and Free Will Belief</h3>

{% for year in page.years %}

<h4 id="{{year}}">{{year}}</h4>
{% bibliography -f volition_and_free_will_belief -q @*[year={{year}}]* %}

{% endfor %}


<h3  id="social_context">Representation of Other Agent and Influence of Social Context to Cognition and Behaviour</h3>

{% for year in page.years %}

<h4 id="{{year}}">{{year}}</h4>
{% bibliography -f social_context -q @*[year={{year}}]* %}

{% endfor %}

<h3  id="cognitive_control_instruction_following">Cognitive control/instruction following</h3>

{% for year in page.years %}

<h4 id="{{year}}">{{year}}</h4>
{% bibliography -f cognitive_control_instruction_following -q @*[year={{year}}]* %}

{% endfor %}