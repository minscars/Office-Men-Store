// thanh nav ngang

import PropTypes from 'prop-types';
import { Link, NavLink } from 'react-router-dom';
import { XMarkIcon } from '@heroicons/react/24/outline';
import { Avatar, Button, IconButton, Typography } from '@material-tailwind/react';
import { useMaterialTailwindController, setOpenSidenav } from '@/context';
import Logo from '@/components/image/logo-store.png';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import Alert from '@/components/alert';
export function Sidenav({ brandImg, brandName, routes }) {
  const [controller, dispatch] = useMaterialTailwindController();
  const { sidenavColor, sidenavType, openSidenav } = controller;
  const sidenavTypes = {
    dark: 'bg-gradient-to-br from-gray-800 to-gray-900',
    white: 'bg-white shadow-sm',
    transparent: 'bg-transparent',
  };
  const navigate = useNavigate();
  const handleLogout = async () => {
    Swal.fire({
      title: 'Are you sure?',
      text: 'Do you want to log-out?',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Yes, I want it!',
    }).then(async (result) => {
      if (result.isConfirmed) {
        window.localStorage.removeItem('token');
        Alert.showSuccessAlert('You have been log-outed sucessfully!');
        navigate(`/auth/sign-in`);
      }
    });
  };

  return (
    <aside
      className={`${sidenavTypes[sidenavType]} ${
        openSidenav ? 'translate-x-0' : '-translate-x-80'
      } fixed inset-0 z-50 my-4 mb-10 ml-4 h-[calc(100vh-32px)] w-72 rounded-xl transition-transform duration-300 xl:translate-x-0 border border-blue-gray-100`}
    >
      <div className={`relative`}>
        <img src={Logo} alt="" className="ml-4 mt-10 mb-16 h-auto w-[250px]" />
        {/* <div className="flex justify-center mb-10">
          <Typography color="blue-gray-100" className="text-[18px] font-medium capitalize">
            Hello Admin
          </Typography>
        </div> */}
        {/* nút thoát */}
        <IconButton
          variant="text"
          color="white"
          size="sm"
          ripple={false}
          className="absolute right-0 top-0 grid rounded-br-none rounded-tl-none xl:hidden"
          onClick={() => setOpenSidenav(dispatch, false)}
        >
          <XMarkIcon strokeWidth={2.5} className="h-5 w-5 text-white" />
        </IconButton>{' '}
      </div>

      {/*đăng nhập đăng xuất */}
      <div className="m-4">
        {routes.map(({ layout, title, pages }, key) => (
          <ul key={key} className="mb-4 flex flex-col gap-1">
            {title && (
              <li className="mx-3.5 mt-4 mb-2">
                <Typography
                  variant="small"
                  color={sidenavType === 'dark' ? 'white' : 'blue-gray'}
                  className="font-black uppercase opacity-75"
                >
                  {title}
                </Typography>
              </li>
            )}
            {/* chỉnh lại sidenav */}
            {pages
              .filter((page) => page.icon)
              .map(({ icon, name, path }) => (
                <li key={name}>
                  <NavLink to={`/${layout}${path}`}>
                    {({ isActive }) => (
                      <Button
                        variant={isActive ? 'gradient' : 'text'}
                        color={isActive ? sidenavColor : sidenavType === 'dark' ? 'white' : 'blue-gray'}
                        className="mb-4 flex items-center gap-4 px-4 capitalize"
                        fullWidth
                      >
                        {icon}
                        <Typography color="inherit" className="font-medium capitalize">
                          {name}
                        </Typography>
                      </Button>
                    )}
                  </NavLink>
                </li>
              ))}
          </ul>
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={() => handleLogout()} color="red">
          Sign out
        </Button>
      </div>
    </aside>
  );
}

Sidenav.defaultProps = {
  brandImg: '/img/logo-ct.png',
  brandName: 'Material Tailwind React',
};

Sidenav.propTypes = {
  brandImg: PropTypes.string,
  brandName: PropTypes.string,
  routes: PropTypes.arrayOf(PropTypes.object).isRequired,
};

Sidenav.displayName = '/src/widgets/layout/sidnave.jsx';

export default Sidenav;
