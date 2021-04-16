---
layout: page
title: Blog
image: /uploads/default.jpeg
---
{% for post in site.posts %}

# [{{ post.title }}]({{ post.url | relative_url }})

{{ post.excerpt }}

{% endfor %}
