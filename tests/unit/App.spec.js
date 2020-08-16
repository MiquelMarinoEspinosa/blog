import { shallowMount, createLocalVue } from "@vue/test-utils";
import Router from "vue-router";
import App from "@/App";
import Header from "@/components/Header";

const localVue = createLocalVue();
localVue.use(Router);

describe("App", () => {
  it("renders the App", () => {
    const app = shallowMount(App, { localVue });
    expect(app.find(Header).exists()).toBeTruthy();
    expect(app.html()).toMatchSnapshot();
  });
});
