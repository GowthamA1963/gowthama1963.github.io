---
title: Blog
layout: layout.njk
permalink: /blog/
---

# Blog

Welcome to my robotics + ROS blog.

Posts will be listed here:

<ul>
{% for post in collections.post reversed %}
  <li>
    <a href="{{ post.url }}">{{ post.data.title }}</a> – {{ post.date | date: "%b %d, %Y" }}
  </li>
{% endfor %}
</ul>
