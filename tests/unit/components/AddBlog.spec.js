/* 
  Improvements:
    - focus the search subelements within elements (blog title inside form) using searching
    - change the input's text values using the value attribute
    - use await for changin events like mouse clicks or blur
*/
import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import AddBlog from "@/components/AddBlog.vue";
import axios from "axios";
Vue.prototype.$http = axios;
jest.mock("axios");

describe("AddBlog initial render and creating a blog entry", () => {
  let wrapper;

  beforeEach(() => {
    wrapper = shallowMount(AddBlog);
    wrapper.setData({
      authors: ["Author 1", "Author 2", "Author 3"],
    });
  });

  afterEach(() => {
    wrapper = null;
  });
  it("renders the initial html", () => {
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("fills out the form fields and updates the preview section", async () => {
    const blogTitle = wrapper.get("input[type=text]");
    await blogTitle.setValue("New Blog");
    const blogContent = wrapper.get("textarea");
    await blogContent.setValue("New Blog Content");
    const vueCategory = wrapper.get("input[value=vue]");
    await vueCategory.setChecked();
    const options = wrapper.get("select").findAll("option");
    await options.at(0).setSelected();
    expect(wrapper.html()).toMatchSnapshot();
  });

  it("send the form", async () => {
    const blog = {
      title: "New Blog",
      content: "New Blog Content",
      categories: ["vue"],
      author: "Author 1",
    };
    const blogTitle = wrapper.get("input[type=text]");
    await blogTitle.setValue(blog.title);
    const blogContent = wrapper.get("textarea");
    await blogContent.setValue(blog.content);
    const vueCategory = wrapper.get("input[value=vue]");
    await vueCategory.setChecked();
    const options = wrapper.get("select").findAll("option");
    await options.at(0).setSelected();
    axios.post.mockResolvedValue(() => {});
    const submit = wrapper.get("button");
    submit.trigger("click");
    await Vue.nextTick();
    expect(axios.post).toHaveBeenCalledTimes(1);
    expect(axios.post).toHaveBeenCalledWith("http://localhost:8081/blog", blog);
    expect(wrapper.html()).toMatchSnapshot();
  });
});
