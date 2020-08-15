import { shallowMount, createLocalVue } from "@vue/test-utils";
import AddBlog from "@/components/AddBlog.vue";
import axios from "axios";

const localVue = createLocalVue();
localVue.prototype.$http = axios;
jest.mock("axios");

describe("AddBlog initial render and creating a blog entry", () => {
  let addBlog;

  beforeEach(() => {
    jest.clearAllMocks();
    addBlog = shallowMount(AddBlog, { localVue });
    addBlog.setData({
      authors: ["Author 1", "Author 2", "Author 3"],
    });
  });

  afterEach(() => {
    addBlog = null;
  });
  it("renders the initial html", () => {
    expect(addBlog.html()).toMatchSnapshot();
  });

  it("fills out the form fields and updates the preview section", async () => {
    const blogTitle = addBlog.get("input[type=text]");
    blogTitle.setValue("New Blog");
    const blogContent = addBlog.get("textarea");
    blogContent.setValue("New Blog Content");
    const vueCategory = addBlog.get("input[value=vue]");
    vueCategory.setChecked();
    const options = addBlog.get("select").findAll("option");
    options.at(0).setSelected();
    await localVue.nextTick();
    expect(addBlog.html()).toMatchSnapshot();
  });

  it("send the form and create the blog entry", async () => {
    const blog = {
      title: "New Blog",
      content: "New Blog Content",
      categories: ["vue"],
      author: "Author 1",
    };
    const blogTitle = addBlog.get("input[type=text]");
    blogTitle.setValue(blog.title);
    const blogContent = addBlog.get("textarea");
    blogContent.setValue(blog.content);
    const vueCategory = addBlog.get("input[value=vue]");
    vueCategory.setChecked();
    const options = addBlog.get("select").findAll("option");
    options.at(0).setSelected();
    await localVue.nextTick();
    axios.post.mockResolvedValue();
    const submit = addBlog.get("button");
    submit.trigger("click");
    await localVue.nextTick();
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("http://localhost:8081/blog", blog);
    expect(addBlog.html()).toMatchSnapshot();
  });
});
