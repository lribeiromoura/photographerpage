import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';

import MenuIcon from '@mui/icons-material/Menu';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';

import style from './Menu.module.scss';

type Anchor = 'top' | 'left' | 'bottom' | 'right';

export default function Menu() {
  const routes = [
    {
      label: 'SHOWS',
      to: '/shows',
    },
  ];

  const [state, setState] = useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });
  const [width, setWidth] = useState<number>(window.innerWidth);

  const toggleDrawer = (anchor: Anchor, open: boolean) =>
    (event: React.KeyboardEvent | React.MouseEvent) => {
      if (
        event.type === 'keydown' &&
        ((event as React.KeyboardEvent).key === 'Tab' ||
          (event as React.KeyboardEvent).key === 'Shift')
      ) {
        return;
      }

      setState({ ...state, [anchor]: open });
    };

  function handleWindowSizeChange() {
    setWidth(window.innerWidth);
  }

  useEffect(() => {
    window.addEventListener('resize', handleWindowSizeChange);
    return () => {
      window.removeEventListener('resize', handleWindowSizeChange);
    };
  }, []);

  const isMobile = width <= 899;

  const list = (anchor: Anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <List>
        {routes.map((route, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ width: '100%' }}>
              <Link to={route.to}>
                <ListItemText primary={route.label}  />
              </Link>
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      {/* <div className={style.exemplos}>Menu</div>
      <div
        className={classNames({
          [style.exemplos__exemplo]: true,
          [style['exemplos--ativo']]: true,
        })}
      >
        Menu
      </div> */}
      <header className={style.sidebar}>
        <div
          className={classNames({
            [style['sidebar-wrap']]: true,
          })}
        >
          <h1 className="logo long-text">
            <Link to="/">LUCAS STHORACHE</Link>
          </h1>
          <nav className={style.menu}>
            {isMobile ? (
              <>
                <MenuIcon
                  fontSize="large"
                  onClick={toggleDrawer('right', true)}
                />
                <Drawer
                  anchor={'right'}
                  open={state['right']}
                  onClose={toggleDrawer('right', false)}
                >
                  {list('right')}
                </Drawer>
              </>
            ) : (
              <ul className={style.menu__desktop}>
                {routes.map((route, index) => (
                  <li className={style.item} key={index}>
                    <Link to={route.to}>{route.label}</Link>
                  </li>
                ))}
              </ul>
            )}
          </nav>
        </div>
      </header>
    </>
  );
}
