import { createLocalVue, shallowMount } from "@vue/test-utils";
import axios from "axios";
import SingleBlog from "@/components/SingleBlog";

const localVue = createLocalVue();

jest.mock("axios");

localVue.prototype.$http = axios;

describe("SingleBlog", () => {
  beforeEach(() => {
    jest.clearAllMocks();
  });

  it("retrieves the single blog", async () => {
    const id = "e2e6d160-15ff-4d30-92ce-2799eb7fe5bd";
    const $route = {
      params: {
        id,
      },
    };
    const data = {
      title: "Blog 1",
      content: "Blog content 1",
      author: "Author 1",
      categories: ["vue", "react", "node"],
    };
    axios.get.mockResolvedValue({ data });
    const singleBlog = shallowMount(SingleBlog, {
      localVue,
      mocks: { $route },
    });
    await localVue.nextTick();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith("http://localhost:8081/blog/" + id);
    expect(singleBlog.html()).toMatchSnapshot();
  });

  it("has happened an error and no blog was retreived", async () => {
    const id = "e2e6d160-15ff-4d30-92ce-2799eb7fe5b";
    const $route = {
      params: {
        id,
      },
    };
    axios.get.mockRejectedValue("Something went wrong :(");
    const singleBlog = shallowMount(SingleBlog, {
      localVue,
      mocks: { $route },
    });
    await localVue.nextTick();
    expect(axios.get).toBeCalledTimes(1);
    expect(axios.get).toBeCalledWith("http://localhost:8081/blog/" + id);
    await localVue.nextTick();
    expect(singleBlog.html()).toMatchSnapshot();
  });
});
