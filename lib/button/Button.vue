<template>
  <button :class="classes" :disabled="disabled" class="coast-button">
    <Icon v-if="loading" class="coast-loadingIndicator" name="loading" />
    <slot />
  </button>
</template>

<script lang="ts">
import { computed, defineComponent, PropType } from 'vue';
import Icon from '../Icon.vue';

type ButtonThemeType = PropType<'button' | 'link' | 'text'>;
type ButtonSizeType = PropType<'normal' | 'big' | 'small'>;
type ButtonLevelType = PropType<'normal' | 'main' | 'danger' | 'warning'>;

interface ButtonProps {
  theme: ButtonThemeType;
  size: ButtonSizeType;
  level: ButtonLevelType;
  disabled: boolean;
  loading: boolean;
}

export default defineComponent({
  name: 'CoastButton',
  components: { Icon },
  props: {
    theme: {
      type: String as ButtonThemeType,
      default: 'button',
      validator: (val: string) => {
        return ['button', 'link', 'text'].includes(val);
      },
    },
    size: {
      type: String as ButtonSizeType,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'big', 'small'].includes(val);
      },
    },
    level: {
      type: String as ButtonLevelType,
      default: 'normal',
      validator: (val: string) => {
        return ['normal', 'main', 'danger', 'warning'].includes(val);
      },
    },
    disabled: {
      type: Boolean,
      default: false,
    },
    loading: {
      type: Boolean,
      default: false,
    },
  },
  setup(props: ButtonProps) {
    const { theme, size, level } = props;
    const classes = computed(() => {
      return {
        [`coast-theme-${theme}`]: theme,
        [`coast-size-${size}`]: size,
        [`coast-level-${level}`]: level,
        'coast-loading': props.loading,
      };
    });
    return { classes };
  },
});
</script>

<style lang="scss">
$h: 32px;
$border-color: #d9d9d9;
$color: #666;
$theme: #000;
$radius: 4px;
$red: red;
$gray: gray;
$orange: #f5a623;
.coast-button {
  box-sizing: border-box;
  height: $h;
  padding: 0 12px;
  cursor: pointer;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  white-space: nowrap;
  background: white;
  color: $color;
  border: 1px solid $border-color;
  border-radius: $radius;
  box-shadow: 0 1px 0 fade-out(black, 0.95);
  transition: all 0.25s;

  & + & {
    margin-left: 8px;
  }

  &:hover,
  &:focus {
    color: $theme;
    border-color: $theme;
  }

  &:focus {
    outline: none;
  }

  &::-moz-focus-inner {
    border: 0;
  }

  &.coast-theme-link {
    border-color: transparent;
    box-shadow: none;
    color: $theme;
    text-decoration: underline;

    &:hover,
    &:focus {
      color: #40a9ff;
    }
  }

  &.coast-theme-text {
    border-color: transparent;
    box-shadow: none;
    color: inherit;

    &:hover,
    &:focus {
      background: darken(white, 5%);
    }
  }

  &.coast-size-big {
    font-size: 24px;
    height: 48px;
    padding: 0 16px;
  }

  &.coast-size-small {
    font-size: 12px;
    height: 20px;
    padding: 0 4px;
  }

  &.coast-theme-button {
    &.coast-level-main {
      background: $theme;
      color: white;
      border-color: $theme;

      &:hover,
      &:focus {
        background: darken($theme, 10%);
        border-color: darken($theme, 10%);
      }
    }

    &.coast-level-danger {
      background: $red;
      border-color: $red;
      color: white;

      &:hover,
      &:focus {
        background: darken($red, 10%);
        border-color: darken($red, 10%);
      }
    }

    &.coast-level-warning {
      background: $orange;
      border-color: $orange;
      color: white;

      &:hover,
      &:focus {
        background: darken($orange, 10%);
        border-color: darken($orange, 10%);
      }
    }
  }

  &.coast-theme-link {
    &.coast-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }
    &.coast-level-warning {
      color: $orange;

      &:hover,
      &:focus {
        color: darken($orange, 10%);
      }
    }
  }

  &.coast-theme-text {
    &.coast-level-main {
      color: $theme;

      &:hover,
      &:focus {
        color: darken($theme, 10%);
      }
    }

    &.coast-level-danger {
      color: $red;

      &:hover,
      &:focus {
        color: darken($red, 10%);
      }
    }

    &.coast-level-warning {
      color: $orange;

      &:hover,
      &:focus {
        color: darken($orange, 10%);
      }
    }
  }

  &.coast-theme-button {
    &[disabled] {
      cursor: not-allowed;
      color: $gray;

      &:hover {
        color: $color;
        border: 1px solid $border-color;
      }
    }
  }

  &.coast-theme-link,
  &.coast-theme-text {
    &[disabled] {
      cursor: not-allowed;
      color: $gray;

      &:hover {
        background: transparent;
      }
    }
  }

  &.coast-loading {
    cursor: default;
    position: relative;

    &::before {
      position: absolute;
      content: '';
      top: -1px;
      left: -1px;
      right: -1px;
      bottom: -1px;
      z-index: 1;
      border-radius: inherit;
      background: #fff;
      opacity: 0.35;
      transition: opacity 0.2s;
      pointer-events: none;
    }

    &:hover,
    &:focus {
      color: inherit;
      border-color: $border-color;
    }

    > .coast-loadingIndicator {
      margin-right: 4px;
      animation: coast-spin 1s infinite linear;
    }

    &.coast-level-warning,
    &.coast-level-danger,
    &.coast-level-main {
      &:hover,
      &:focus {
        color: white;
        border-color: $border-color;
        background-color: $theme;
      }

      > .coast-loadingIndicator {
        border-color: white white white transparent;
      }
    }

    &.coast-level-warning {
      &:hover,
      &:focus {
        background-color: $orange;
      }
    }
    &.coast-level-danger {
      &:hover,
      &:focus {
        background-color: $red;
      }
    }
  }
}

@keyframes coast-spin {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>