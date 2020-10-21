import { shallowMount } from "@vue/test-utils";
import MlArticle from "@/components/MlArticle.vue";

describe("MlArticle.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlArticle);
    expect(wrapper.exists()).toBeTruthy();
  });
});
