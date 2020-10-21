import { shallowMount } from "@vue/test-utils";
import PreviewInstagram from "@/components/PreviewInstagram.vue";

describe("PreviewInstagram.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(PreviewInstagram);
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
