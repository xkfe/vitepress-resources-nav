---
layout: doc
layoutClass: resources-nav-layout
sidebar: false
prev: false
next: false
lastUpdated: '2024/5/20 05:20:00'
---

<style src="/.vitepress/theme/styles/resources-nav.scss"></style>

<script setup>
import { NAV_DATA } from '/.vitepress/theme/resources-data'
</script>
:::tip
**资源网址导航** - 为开发者提供各种资源网址导航，包括前端、后端、工具等。

**_同时也欢迎大家评论提交优秀的资源网址!_**

<DataPanel/>
:::



<NavLinks v-for="{title, items} in NAV_DATA" :title="title" :items="items"/>
