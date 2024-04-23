<script setup lang="ts">
import { nextTick, provide } from 'vue'
import { useData } from 'vitepress'
import DefaultTheme from 'vitepress/theme'
import Giscus from '@giscus/vue'
import ReloadPrompt from './ReloadPrompt.vue'

const { Layout } = DefaultTheme
const { isDark,theme,frontmatter } = useData()
const { comment } = theme.value

const enableTransitions = () =>
  'startViewTransition' in document &&
  window.matchMedia('(prefers-reduced-motion: no-preference)').matches

provide('toggle-appearance', async ({ clientX: x, clientY: y }: MouseEvent) => {
  if (!enableTransitions()) {
    isDark.value = !isDark.value
    return
  }

  const clipPath = [
    `circle(0px at ${x}px ${y}px)`,
    `circle(${Math.hypot(
      Math.max(x, innerWidth - x),
      Math.max(y, innerHeight - y),
    )}px at ${x}px ${y}px)`,
  ]

  // @ts-ignore
  await document.startViewTransition(async () => {
    isDark.value = !isDark.value
    await nextTick()
  }).ready

  document.documentElement.animate(
    { clipPath: isDark.value ? clipPath.reverse() : clipPath },
    {
      duration: 380,
      easing: 'ease-in',
      pseudoElement: `::view-transition-${isDark.value ? 'old' : 'new'}(root)`,
    },
  )
})
</script>

<template>
  <Layout v-bind="$attrs">
    <!--
      相关插槽
      https://vitepress.dev/zh/guide/extending-default-theme#layout-slots
      https://github.com/vuejs/vitepress/blob/main/src/client/theme-default/Layout.vue
    -->
    <template v-if="comment && frontmatter.comment !== false" #doc-footer-before>
      <div class="doc-comments">
        <Giscus
          id="comments"
          mapping="specific"
          term="Welcome to 小凯同学的网址导航!"
          strict="1"
          reactionsEnabled="1"
          emitMetadata="0"
          inputPosition="top"
          :theme="isDark ? 'dark' : 'light'"
          lang="zh-CN"
          loading="lazy"
          v-bind="{ ...comment }"
        />
      </div>
    </template>
    <template #layout-bottom>
      <ReloadPrompt />
    </template>
  </Layout>
</template>

<style></style>
