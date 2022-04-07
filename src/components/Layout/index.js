import { useState } from 'react';
import { Outlet, NavLink } from 'react-router-dom';
import { CgHome } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { BiHistory } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';
import { LayoutStyles, Header, ItemsNav, Title } from './styles';

const Layout = () => {
    const [title, setTitle] = useState('');
    return (
        <LayoutStyles>
            <Header>
                <AiOutlineLeft style={{ position: 'absolute', fontSize: 25 }} />
                <Title>{title}</Title>
            </Header>
            <Outlet context={{ setTitle }} />
            <nav>
                <ItemsNav>
                    <li>
                        <NavLink
                            to='/'
                            className={({ isActive }) =>
                                isActive ? 'link-active' : 'link'
                            }
                        >
                            <CgHome style={{ fontSize: 30 }} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/profile'
                            className={({ isActive }) =>
                                isActive ? 'link-active' : 'link'
                            }
                        >
                            <FiUser style={{ fontSize: 30 }} />
                        </NavLink>
                    </li>
                    <li>
                        <NavLink
                            to='/history'
                            className={({ isActive }) =>
                                isActive ? 'link-active' : 'link'
                            }
                        >
                            <BiHistory style={{ fontSize: 30 }} />
                        </NavLink>
                    </li>
                </ItemsNav>
            </nav>
        </LayoutStyles>
    );
};

export default Layout;
