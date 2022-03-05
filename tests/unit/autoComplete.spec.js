import { shallowMount } from "@vue/test-utils";
import AutoComplete from "../../src/components/AutoComplete.vue";

describe("AutoComplete.vue", () => {
  it("Component mounts", () => {
    const wrapper = shallowMount(AutoComplete, {
      props: {},
    });
    expect(wrapper.exists()).toBeTruthy();
  });
});
