---
layout: archive
title: "Publications"
permalink: /publications/
author_profile: true
---

{% if site.author.googlescholar %}
  <div class="wordwrap">You can also find my articles on <a href="{{site.author.googlescholar}}">my Google Scholar profile</a>.</div>
{% endif %}
{% Publication 01 %}
<div class = "wordwrap"># **AR Based Life-logging System for Reminiscence** <br>
Md Nazmus Sakib, Mehrab Mustafy Rahman, Hasan Mahmud, Md Kamrul Hasan <br>
Proceedings of International Conference on Fourth Industrial Revolution and Beyond (IC4IR 2021) <br>
[PDF](http:/mnazmussakib.github.io/files/AR_Paper.pdf) || [LINK](https://link.springer.com/chapter/10.1007/978-981-19-2445-3_34)
</div>
{% endif %}

{% include base_path %}

{% for post in site.publications reversed %}
  {% include archive-single.html %}
{% endfor %}
