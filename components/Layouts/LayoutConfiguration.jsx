import EmptyLayout from "./EmptyLayout";
import Layout from "./Layout";

const layoutConfig = [
    {
        config: { path: '/login', title: 'Login' },
        layout: EmptyLayout
    },
    {
        config: { path: '/register', title: 'Register' },
        layout: EmptyLayout
    },
    {
        config: { path: '/admin', title: 'Dashboard' },
        layout: Layout
    },
    {
      config: { path: '/admin/pageants', title: 'Pageants' },
      layout: Layout
  },
  {
    config: { path: '/', title: 'Home' },
    layout: EmptyLayout,
  },
    {
        config: { path: '' },
        layout: EmptyLayout
    },
];

const GetLayout = (path) => {
  
    const config = layoutConfig.find((configItem) => path.includes(configItem.config.path));
    if(config) return config;
    return { Layout: EmptyLayout };
}

export { GetLayout }