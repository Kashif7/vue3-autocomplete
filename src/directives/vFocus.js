//Directive to trigger focus to an element based on a passed value
//usage v-focus="true" case insensitive
//
export const vFocus = {
  mounted: (el, binding) => {
    if ("prevent" in binding.modifiers) {
      return;
    }

    el.focus();
  },
};
