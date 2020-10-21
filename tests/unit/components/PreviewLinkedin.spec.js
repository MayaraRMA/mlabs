import { shallowMount } from "@vue/test-utils";
import PreviewLinkedin from "@/components/PreviewLinkedin.vue";

describe("PreviewLinkedin.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(PreviewLinkedin);
    expect(wrapper.exists()).toMatchSnapshot();
  });
});
