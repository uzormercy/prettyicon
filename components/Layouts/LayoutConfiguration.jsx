import EmptyLayout from "./EmptyLayout";
import Layout from "./Layout";
import url from 'url';

const getLayout = (router) => {

  const LayoutConfig = [
    {
      path: "/login",
      layout: EmptyLayout,
    },
    {
      path: "/",
      layout: EmptyLayout,
    },
    {
      path: "/admin",
      layout: Layout,
    },
      {
      path: "/admin/pageants",
      layout: Layout,
    },

  ];

  const { pathname } = url.parse(process.env.NEXT_PUBLIC_BASE_URL + router.asPath, true);
  const config = LayoutConfig.find(({ path }) => path === pathname);

  if (config) return config.layout;
  if (router.query) return Layout;
  return EmptyLayout;

}
export { getLayout }