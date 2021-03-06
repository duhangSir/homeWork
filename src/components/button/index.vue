<template>
  <button
    @click="change"
    :disabled="disabled || loading"
    class="duh-button"
    :style="[minWidthCss]"
    :class="[theme, isRound, isBorder, isSize, blockCss]"
  >
    <span>
      <i v-if="loading" class="iconfont icon-prefix icon-loading"></i>
      <i v-if="prefix" class="iconfont icon-prefix" :class="iconPrefix"></i>
      <slot></slot>
      <i v-if="suffix" class="iconfont icon-suffix" :class="iconSuffix"></i>
    </span>
  </button>
</template>
<script>
export default {
  name: "index",
  props: {
    type: {
      type: String,
      default: "",
    },
    minWidth: {
      type: String,
      default: "95px",
    },
    size: {
      type: String,

      default: "",
    },
    prefix: {
      type: String,
      default: "",
    },
    suffix: {
      type: String,
      default: "",
    },
    round: Boolean,
    border: Boolean,
    disabled: Boolean,
    block: Boolean,
    loading: Boolean,
  },
  computed: {
    theme() {
      return this.type ? `duh-button-${this.type}` : "";
    },
    isRound() {
      return this.round ? "is-round" : "";
    },
    isBorder() {
      return this.border ? "is-border" : "";
    },
    isSize() {
      return this.size ? `duh-button-${this.size}` : "";
    },
    minWidthCss() {
      if (!this.minWidth) return "";
      return { "min-width": this.minWidth };
    },
    iconPrefix() {
      return this.prefix ? `icon-${this.prefix}` : "";
    },
    iconSuffix() {
      return this.suffix ? `icon-${this.suffix}` : "";
    },
    blockCss() {
      return this.block ? "duh-button-block" : "";
    },
  },
  methods: {
    change() {
      this.$emit("click");
    },
  },
};
</script>

<style lang="scss" scoped>
.duh-button {
  border-width: 1px;
  border-style: solid;
  border-color: #dcdfe6;
  height: 40px;
  padding: 0 20px;
  background-color: #fff;
  border-radius: 4px;
  font-size: 14px;
  color: #606266;
  cursor: pointer;
  + .duh-button {
    margin-left: 14px;
    margin-bottom: 10px;
  }
  > span {
    display: inline-flex;
    align-items: center;
    justify-content: center;
  }
  .icon-prefix {
    margin-right: 10px;
  }
  .icon-suffix {
    margin-left: 10px;
  }
}
.duh-button-medium {
  height: 38px;
}
.duh-button-small {
  padding: 0 15px;
  height: 32px;
  font-size: 12px;
}
.duh-button-mini {
  padding: 0 15px;
  height: 28px;
  font-size: 12px;
}
.duh-button[disabled] {
  cursor: not-allowed;
  opacity: 0.5;
}
.duh-button-primary {
  background-color: #409eff;
  border-color: #409eff;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #409eff;
  }
}
.duh-button-success {
  background-color: #00d100;
  border-color: #00d100;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #00d100;
  }
}
.duh-button-danger {
  background-color: #e6a23c;
  border-color: #e6a23c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #e6a23c;
  }
}
.duh-button-warning {
  background-color: #f56c6c;
  border-color: #f56c6c;
  color: #fff;
  &.is-border {
    background-color: transparent;
    color: #f56c6c;
  }
}
/*** 圆角 */
.is-round {
  border-radius: 100px;
}
/**块级按钮*/
.duh-button-block {
  display: block;
  width: 100%;
  padding: 0;
  margin-bottom: 0;
}
/**loading动画加载*/
.icon-loading {
  animation: loading 2s infinite linear;
}
@keyframes loading {
  0% {
    transform: rotate(0deg);
  }
  100% {
    transform: rotate(360deg);
  }
}
</style>
