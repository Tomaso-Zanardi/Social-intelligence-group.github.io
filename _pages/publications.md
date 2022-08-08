---
permalink: /publications/
layout: single
author_profile: false
share: false
years: [2022, 2021, 2020]
page_js:
  - /assets/js/drop-down-effect.js
---

<h3  id="all_publications">Publication Since 2020</h3>

{% for year in page.years %}

<h4 id="{{year}}all_publications">{{year}}</h4>
{% bibliography -f all_publications -q @*[year={{year}}]* %}

{% endfor %}

