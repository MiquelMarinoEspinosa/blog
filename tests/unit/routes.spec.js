import { mount, createLocalVue } from "@vue/test-utils";
import Router from "vue-router";
import routes from "@/routes";
import App from "@/App";
import ShowBlogs from "@/components/ShowBlogs";
import AddBlog from "@/components/AddBlog";
import Header from "@/components/Header";
import SingleBlog from "@/components/SingleBlog";
import axios from "axios";

const localVue = createLocalVue();

localVue.use(Router);
jest.mock("axios");
localVue.prototype.$http = axios;

describe("router", () => {
  let router;
  let app;
  beforeAll(() => {
    const data = [];
    router = new Router({ routes });
    axios.get.mockResolvedValue({ data });
    app = mount(App, {
      localVue,
      router,
      stubs: { "app-header": Header },
    });
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("path: /, component: ShowBlogs", async () => {
    router.push("/");
    await localVue.nextTick();
    expect(app.find(ShowBlogs).exists()).toBeTruthy();
  });

  it("path: /add, component: AddBlog", async () => {
    router.push("/add");
    await localVue.nextTick();
    expect(app.find(AddBlog).exists()).toBeTruthy();
  });

  it("path: /blog/:id, component: SingleBlog", async () => {
    const data = {
      title: "Blog 1",
      content: "Blog content 1",
      author: "Author 1",
      categories: ["vue", "react", "node"],
    };
    const id = "e2e6d160-15ff-4d30-92ce-2799eb7fe5b";
    axios.get.mockResolvedValue({
      data,
    });
    router.push("/blog/" + id);
    await localVue.nextTick();
    expect(app.find(SingleBlog).exists()).toBeTruthy();
  });
});
