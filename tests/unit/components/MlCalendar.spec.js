import { shallowMount } from "@vue/test-utils";
import MlCalendar from "@/components/MlCalendar.vue";

describe("MlCalendar.vue", () => {
  it("correctly mounted", () => {
    const wrapper = shallowMount(MlCalendar);
    expect(wrapper.exists()).toBeTruthy();
  });
});
