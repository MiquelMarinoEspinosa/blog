import Vue from "vue";
import { shallowMount } from "@vue/test-utils";
import Header from "@/components/Header";
import VueRouter from "vue-router";

Vue.use(VueRouter);

describe("Header nav links", () => {
  let header;
  beforeEach(() => {
    header = shallowMount(Header);
  });
  afterEach(() => {
    header = null;
  });

  it("renders the inital html", () => {
    expect(header.html()).toMatchSnapshot();
  });
});
