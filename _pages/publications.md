---
permalink: /publications/
layout: single
author_profile: false
share: false
years: [2021, 2020, 2019, 2018]
page_js:
  - /assets/js/drop-down-effect.js
---

<h3  id="volition_and_free_will_belief">Volition and Free Will Belief</h3>

{% for year in page.years %}

<h4 id="{{year}}_volition_and_free_will_belief">{{year}}</h4>
{% bibliography -f volition_and_free_will_belief -q @*[year={{year}}]* %}

{% endfor %}

