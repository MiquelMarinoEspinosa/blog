/* 
  Improvements:
    - focus the search subelements within elements (blog title inside form) using searching
    - change the input's text values using the value attribute
    - use await for changin events like mouse clicks or blur
*/

import { shallowMount } from "@vue/test-utils";
import AddBlog from "@/components/AddBlog.vue";

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
});
