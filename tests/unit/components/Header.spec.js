import { shallowMount, createLocalVue } from "@vue/test-utils";
import Header from "@/components/Header";
import VueRouter from "vue-router";

const localVue = createLocalVue();
localVue.use(VueRouter);

describe("Header nav links", () => {
  let header;

  beforeEach(() => {
    header = shallowMount(Header, { localVue });
  });
  afterEach(() => {
    header = null;
  });

  it("renders the inital html", () => {
    expect(header.html()).toMatchSnapshot();
  });
});
