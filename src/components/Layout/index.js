import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
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
                        <Link to='/'>
                            <CgHome style={{ fontSize: 30 }} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/profile'>
                            <FiUser style={{ fontSize: 30 }} />
                        </Link>
                    </li>
                    <li>
                        <Link to='/history'>
                            <BiHistory style={{ fontSize: 30 }} />
                        </Link>
                    </li>
                </ItemsNav>
            </nav>
        </LayoutStyles>
    );
};

export default Layout;
