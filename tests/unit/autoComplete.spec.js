import { ref } from "vue";
import { shallowMount } from "@vue/test-utils";
import AutoComplete from "../../src/components/AutoComplete.vue";
import { cities } from "@/store/cities";

describe("AutoComplete.vue", () => {
  it("search text box is on focus when component loads", () => {
    const modelValue = ref("");

    const wrapper = shallowMount(AutoComplete, {
      props: {
        focusOnLoad: true,
        modelValue,
        items: [],
      },
      attachTo: document.body,
    });

    const searchBox = wrapper.find("#search").element;

    expect(searchBox).toBe(document.activeElement);
  });

  it("a text input with less characters than the minimum character limit displays a validation message", () => {
    const modelValue = ref("Sa");

    const wrapper = shallowMount(AutoComplete, {
      props: {
        focusOnLoad: true,
        modelValue,
        items: cities.filter((city) => city.includes(modelValue.value)),
      },
      attachTo: document.body,
    });

    const validationMessageLabel = wrapper.find("#validation-message");

    expect(validationMessageLabel.text()).toBe("Enter at least 3 characters.");
  });

  it("a text input with more or equal no of characters than the minimum character limit with matching results displays a list", () => {
    const modelValue = ref("San");
    const filteredItems = cities.filter((city) =>
      city.toLowerCase().includes(modelValue.value.toLowerCase())
    );

    const wrapper = shallowMount(AutoComplete, {
      props: {
        focusOnLoad: true,
        modelValue,
        items: filteredItems,
      },
      attachTo: document.body,
    });

    const listItems = wrapper.findAll("li");

    expect(listItems.length).toBe(filteredItems.length);
  });

  it("a text input with more or equal no of characters than the minimum character limit with no matching results will display a message", () => {
    const modelValue = ref("Donx");
    const filteredItems = cities.filter((city) =>
      city.includes(modelValue.value)
    );

    const wrapper = shallowMount(AutoComplete, {
      props: {
        focusOnLoad: true,
        modelValue,
        items: filteredItems,
      },
      attachTo: document.body,
    });

    const noResultsMessageLabel = wrapper.find("#no-results-message");

    expect(noResultsMessageLabel.text()).toBe("No matching results found.");
  });
});
