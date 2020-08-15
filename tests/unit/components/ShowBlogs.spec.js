import { shallowMount, createLocalVue } from "@vue/test-utils";
import ShowBlogs from "@/components/ShowBlogs";
import Router from "vue-router";
import axios from "axios";
import snippet from "@/filters/snippet";

const localVue = createLocalVue();
localVue.prototype.$http = axios;
localVue.use(Router);
localVue.filter("snippet", snippet);

jest.mock("axios");

describe("Showblogs list of blogs", () => {
  let showBlogs;

  beforeEach(() => {
    jest.clearAllMocks();
  });

  afterEach(() => {
    showBlogs = null;
  });

  it("renders an empty list of blogs", async () => {
    const data = [];
    axios.get.mockResolvedValue({ data });
    showBlogs = shallowMount(ShowBlogs, { localVue });
    await localVue.nextTick();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8081/blog");
    expect(showBlogs.html()).toMatchSnapshot();
  });

  it("search by title into an empty blogs list returns an empty list", async () => {
    axios.get.mockResolvedValue({ data: [] });
    showBlogs = shallowMount(ShowBlogs, { localVue });
    await localVue.nextTick();
    const searchBox = showBlogs.get("input[type=text]");
    searchBox.setValue("Blog 1");
    await localVue.nextTick();
    expect(showBlogs.html()).toMatchSnapshot();
  });

  it("renders a list with some blogs entries", async () => {
    const data = [
      {
        title: "Blog 1",
        content: "Blog content 1",
        author: "Author 1",
        categories: ["vue", "react"],
      },
      {
        title: "Blog 2",
        content: "Blog content 2",
        author: "Author 2",
        categories: ["vue"],
      },
      {
        title: "Blog 3",
        content: "Blog content 3",
        author: "Author 2",
        categories: ["react"],
      },
    ];

    axios.get.mockResolvedValue({ data });
    showBlogs = shallowMount(ShowBlogs, { localVue });
    await localVue.nextTick();
    expect(axios.get).toHaveBeenCalledTimes(1);
    expect(axios.get).toHaveBeenCalledWith("http://localhost:8081/blog");
    expect(showBlogs.html()).toMatchSnapshot();
  });

  it("search by title into an empty blogs list returns list with 2 items", async () => {
    const data = [
      {
        title: "Another Blog 1",
        content: "Blog content 1",
        author: "Author 1",
        categories: ["vue", "react"],
      },
      {
        title: "Another Blog 2",
        content: "Blog content 2",
        author: "Author 2",
        categories: ["vue"],
      },
      {
        title: "Blog 3",
        content: "Blog content 3",
        author: "Author 2",
        categories: ["react"],
      },
    ];
    axios.get.mockResolvedValue({ data });
    showBlogs = shallowMount(ShowBlogs, { localVue });
    await localVue.nextTick();
    const searchBox = showBlogs.get("input[type=text]");
    searchBox.setValue("Another");
    await localVue.nextTick();
    expect(showBlogs.html()).toMatchSnapshot();
  });
});
