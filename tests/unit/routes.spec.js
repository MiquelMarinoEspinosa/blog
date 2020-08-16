import { mount, createLocalVue, shallowMount } from "@vue/test-utils";
import VueRouter from "vue-router";
import routes from "@/routes";
import App from "@/App";
import ShowBlogs from "@/components/ShowBlogs";
import AddBlog from "@/components/AddBlog";

const localVue = createLocalVue();

localVue.use(VueRouter);

describe("router", () => {
  it("path: /, component: ShowBlogs", async () => {
    const router = new VueRouter({ routes });
    const app = mount(App, { localVue, router });
    router.push("/");
    await localVue.nextTick();
    expect(app.find(ShowBlogs).exists()).toBeTruthy();
  });

  it("path: /add, component: AddBlog", async () => {
    const router = new VueRouter({ routes });
    const app = mount(App, { localVue, router });
    router.push("/add");
    await localVue.nextTick();
    expect(app.find(ShowBlogs).exists()).toBeTruthy();
  });
});
