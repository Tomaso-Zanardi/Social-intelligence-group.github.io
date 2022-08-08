---
permalink: /publications/
layout: single
author_profile: false
share: false
years: [2022, 2021, 2020]
page_js:
  - /assets/js/drop-down-effect.js
---

<h3  id="publication_since_2020">Publication Since 2020</h3>

{% for year in page.years %}

<h4 id="{{year}}_publication_since_2020">{{year}}</h4>
{% bibliography -f publication_since_2020 -q @*[year={{year}}]* %}

{% endfor %}

