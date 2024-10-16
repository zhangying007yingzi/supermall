<template>
  <div class="check-wrapper">
    <input :id="'checkbox'+iid" class="checkbox" type="checkbox" :disabled="IsReadly"  :checked="checkState"/>
    <label :for="'checkbox'+iid" class="checkbox-label">
      <slot></slot>
    </label>
  </div>
</template>

<script>
export default {
  name: "SupermallCheckButton",

  props: {
    iid: {
      type: String,
      default: '',
    },
    IsReadly: {
      type: Boolean,
      default: false,
    }, 
    checkState: {
      type: Boolean,
      default: false,
    },
    
  },
  

  mounted() {
    console.log(this.checkState);
    
  },

  methods: {
    change(el){
      console.log(el.target.checked);
      
    }
  },
};
</script>
<style lang="scss" scoped>
div.check-wrapper {
  display: flex;
  align-items: center;
  label.checkbox-label {
    user-select: none;
    position: relative;
    height: 20px;
    line-height: 20px;
    padding-left: 20px;
  }
  input.checkbox {
    display: none;
    & + label {
       &::before{
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
        border: 1px solid #b9b9b9;
        border-radius: 100%;
        transition: border-color 0.3s;
        background-color: #fff;
     }
    }
    &:checked + label {
     &::before{
      content: '';
      display: block;
      position: absolute;
      left: 0;
      top: 0;
      width: 18px;
      height: 18px;
      border-radius: 100%;
      border: 1px solid var(--color-high-text);
      background: url("~assets/img/cart/tick.svg") no-repeat  center 100% var(--color-high-text);
     }
    }
  }
}
</style>
