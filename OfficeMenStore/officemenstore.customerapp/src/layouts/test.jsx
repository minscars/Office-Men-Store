import { Routes, Route } from 'react-router-dom';
import { Cog6ToothIcon } from '@heroicons/react/24/solid';
import { IconButton } from '@material-tailwind/react';
import { Sidenav, DashboardNavbar } from '@/widgets/layout';
import appRoutes from '@/app-routes';
import sidenavRoutes from '@/app-routes';
import { useMaterialTailwindController } from '@/context';

export function Test() {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavType } = controller;

  return (
    <div className="min-h-screen bg-blue-gray-50/50">
      <Sidenav
        routes={sidenavRoutes}
        brandImg={
          sidenavType === 'dark' ? '/img/logo-ct.png' : '/img/logo-ct-dark.png' // logo trên thẻ tab
        }
      />
      <div className="p-4 xl:ml-80">
        <DashboardNavbar />
        {/* <Configurator /> */}
        {/* <IconButton
          size="lg"
          color="white"
          className="fixed bottom-8 right-8 z-40 rounded-full shadow-blue-gray-900/10"
          ripple={false}
          onClick={() => setOpenConfigurator(dispatch, true)}
        >
          <Cog6ToothIcon className="h-5 w-5" />
        </IconButton> */}
        <Routes>
          {appRoutes.map(
            ({ layout, pages }) =>
              layout === 'test' && pages.map(({ path, element }) => <Route exact path={path} element={element} />),
          )}
        </Routes>
        {/* tạo ra các đường dẫn bằng map nếu layout trùng với dasboard và pages nó trùng 2 đối tượng là  */}
        {/* <div className="text-blue-gray-600">
          <Footer />
        </div> */}
      </div>
    </div>
  );
}

Test.displayName = '/src/layout/test.jsx';

export default Test;
