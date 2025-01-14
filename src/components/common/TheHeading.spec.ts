import { describe, it, expect } from 'vitest';
import { mount } from '@vue/test-utils';
import TheHeading from './TheHeading.vue';

describe('TheHeading', () => {
  it('should render h1 tag by default', () => {
    const wrapper = mount(TheHeading, {
      props: { title: 'Test' },
    });

    expect(wrapper.find('h1').exists()).toBe(true);
    expect(wrapper.find('h1').text()).toBe('Test');
  });

  it('should not apply center alignment by default', () => {
    const wrapper = mount(TheHeading, {
      props: {
        title: 'Default Heading',
      },
    });

    expect(wrapper.classes()).not.toContain('text-center');
  });

  it('should align center when center prop is true', () => {
    const wrapper = mount(TheHeading, {
      props: {
        title: 'Heading',
        center: true,
      },
    });

    expect(wrapper.classes()).toContain('text-center');
  });
});
