//Directive to focus on an element
//usage <input v-focus />
export const vFocus = {
  mounted: (el, binding) => {
    if ("prevent" in binding.modifiers) {
      return;
    }

    el.focus();
  },
};
