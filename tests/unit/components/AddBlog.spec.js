/* 
  Improvements:
    - focus the search subelements within elements (blog title inside form) using searching
    - change the input's text values using the value attribute
    - use await for changin events like mouse clicks or blur
*/

import { mount } from '@vue/test-utils'
import AddBlog from '@/components/AddBlog.vue'

describe('AddBlog', () => {
  const wrapper = mount(AddBlog)

  it('contains the main div id "add-blog"', () => {
    expect(wrapper.html()).toContain('<div id="add-blog">')
  })

  it('contains the title "Add a New Blog Post"', () => {
    expect(wrapper.html()).toContain('<h2>Add a New Blog Post</h2>')
  })

  it('contains the form section', () => {
    expect(wrapper.html()).toContain('<form>')
    expect(wrapper.html()).toContain('</form>')
  })

  it('form section contains the "Blog Title"', () => {
    expect(wrapper.html()).toContain(
      '<label>Blog Title:</label> <input type="text" required="required">'
    )
  })

  it('form section contains the "Blog Content" label', () => {
    expect(wrapper.html()).toContain(
      '<label>Blog Content:</label> <textarea></textarea>'
    )
  })

  it('contains the checkboxes section', () => {
    expect(wrapper.html()).toContain('<div id="checkboxes">')
  })

  it('checkboxes section contains "Ninjas" option', () => {
    expect(wrapper.html()).toContain(
      '<label>Ninjas</label> <input type="checkbox" value="ninjas">'
    )
  })

  it('checkboxes section contains "Wizards" option', () => {
    expect(wrapper.html()).toContain(
      '<label>Wizards</label> <input type="checkbox" value="wizards">'
    )
  })

  it('checkboxes section contains "Mario" option', () => {
    expect(wrapper.html()).toContain(
      '<label>Mario</label> <input type="checkbox" value="mario">'
    )
  })

  it('checkboxes section contains "Cheese" option', () => {
    expect(wrapper.html()).toContain(
      '<label>Cheese</label> <input type="checkbox" value="cheese">'
    )
  })

  it('contains the preview section', () => {
    expect(wrapper.html()).toContain('<div id="preview">')
  })

  it('preview section contains the title "Preview Blog"', () => {
    expect(wrapper.html()).toContain('<h3>Preview Blog</h3>');
  })

  it('preview section contains the "Blog title"', () => {
    expect(wrapper.html().toContain(
      '<p>Blog title: </p>'
    );
  })

  it('preview section contains the "Blog content"', () => {
    expect(wrapper.html()).toContain(
      '<p>Blog content:</p>\n    <p></p>'
    );
  })

  it('preview section contians the "Blog categories"', () => {
    expect(wrapper.html()).toContain(
      '<p>Blog categories:</p>'
    );
  })
});
