<template>
  <div class="checkbox">
    <input type="checkbox" :name="name" :id="name" />
    <label :for="name" :class="{ 'opacity-0': !props.label }">{{ label }}</label>

    <svg viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
      <path d="M 10 10 L 90 90" stroke="#000" stroke-dasharray="113" stroke-dashoffset="113"></path>
      <path d="M 90 10 L 10 90" stroke="#000" stroke-dasharray="113" stroke-dashoffset="113"></path>
    </svg>
  </div>
</template>

<script setup lang="ts">
const props = defineProps<{
  name: string
  label?: string
}>()
</script>

<style>
.checkbox {
  --size: 20px;
  --border-size: 2px;

  position: relative;
}

.checkbox *,
.checkbox *::after,
.checkbox *::before {
  box-sizing: border-box;
}

.checkbox input[type='checkbox'] {
  display: inline-block;
  vertical-align: middle;
  opacity: 0;
}

.checkbox input[type='checkbox'],
.checkbox label::before {
  width: var(--size);
  height: var(--size);
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
}

.checkbox label {
  display: inline-block;
  position: relative;
  padding: 0 0 0 calc(var(--size) + 7px);
}

.checkbox label::before {
  content: '';
  border: var(--border-size) solid #000;
  opacity: 0.7;
  transition: opacity 0.3s;
}

.checkbox input[type='checkbox']:checked + label::before {
  opacity: 1;
}

.checkbox svg {
  position: absolute;
  top: calc(50% + var(--border-size));
  left: var(--border-size);
  width: calc(var(--size) - (var(--border-size) * 2));
  height: calc(var(--size) - (var(--border-size) * 2));
  margin-top: calc(var(--size) / -2);
  pointer-events: none;
}

.checkbox svg path {
  stroke-width: 0;
  fill: none;
  transition: stroke-dashoffset 0.2s ease-in 0s;
}

.checkbox svg path + path {
  transition: stroke-dashoffset 0.2s ease-out 0.2s;
}

.checkbox input[type='checkbox']:checked ~ svg path {
  stroke-dashoffset: 0;
  stroke-width: calc(var(--size) / 2);
}
</style>
