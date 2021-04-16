---
layout: page
title: Blog
image: /uploads/default.jpeg
---
{% for post in site.posts %}

# [{{ post.title }}]({{ post.url | relative_url }})

_{{ post.date | date:"%e %b %Y" }}_

{{ post.excerpt }}

{% endfor %}
