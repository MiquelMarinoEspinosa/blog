import { createLocalVue, shallowMount } from "@vue/test-utils";
import Router from "vue-router";
import axios from "axios";
import ListBlogs from "@/components/ListBlogs";

const localVue = createLocalVue();

localVue.use(Router);
jest.mock("axios");

localVue.prototype.$http = axios;

describe("ListBlogs", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("renders an empty blogs list", async () => {
    const data = [];
    axios.get.mockResolvedValue({ data });
    const listBlogs = shallowMount(ListBlogs, { localVue });
    await localVue.nextTick();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith("http://localhost:8081/blog");
    expect(listBlogs.html()).toMatchSnapshot();
  });

  it("search in an empty list returns an empty list blogs", async () => {
    const data = [];
    axios.get.mockResolvedValue({ data });
    const listBlogs = shallowMount(ListBlogs, { localVue });
    await localVue.nextTick();
    const searchBox = listBlogs.get("input[type=text]");
    searchBox.setValue("Blog");
    await localVue.nextTick();
    expect(listBlogs.html()).toMatchSnapshot();
  });

  it("renders a blogs list", async () => {
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
    const listBlogs = shallowMount(ListBlogs, { localVue });
    await localVue.nextTick();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith("http://localhost:8081/blog");
    expect(listBlogs.html()).toMatchSnapshot();
  });

  it("does not return mode than 10 blog items", async () => {
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
      {
        title: "Blog 4",
        content: "Blog content 4",
        author: "Author 4",
        categories: ["vue", "react"],
      },
      {
        title: "Blog 5",
        content: "Blog content 5",
        author: "Author 5",
        categories: ["vue"],
      },
      {
        title: "Blog 6",
        content: "Blog content 6",
        author: "Author 2",
        categories: ["react"],
      },
      {
        title: "Blog 7",
        content: "Blog content 7",
        author: "Author 4",
        categories: ["vue", "react"],
      },
      {
        title: "Blog 8",
        content: "Blog content 8",
        author: "Author 5",
        categories: ["vue"],
      },
      {
        title: "Blog 9",
        content: "Blog content 9",
        author: "Author 2",
        categories: ["react"],
      },
      {
        title: "Blog 10",
        content: "Blog content 10",
        author: "Author 2",
        categories: ["react"],
      },
      {
        title: "Blog 11",
        content: "Blog content 11",
        author: "Author 2",
        categories: ["react"],
      },
    ];
    axios.get.mockResolvedValue({ data });
    const listBlogs = shallowMount(ListBlogs, { localVue });
    await localVue.nextTick();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith("http://localhost:8081/blog");
    expect(listBlogs.html()).toMatchSnapshot();
  });

  it("search and return 2 blogs items", async () => {
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
    const listBlogs = shallowMount(ListBlogs, { localVue });
    await localVue.nextTick();
    const searchBox = listBlogs.get("input[type=text]");
    searchBox.setValue("Another");
    await localVue.nextTick();
    expect(listBlogs.html()).toMatchSnapshot();
  });
});
