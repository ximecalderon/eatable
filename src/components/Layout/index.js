import { useState } from 'react';
import { Outlet, Link } from 'react-router-dom';
import { CgHome } from 'react-icons/cg';
import { FiUser } from 'react-icons/fi';
import { BiHistory } from 'react-icons/bi';
import { AiOutlineLeft } from 'react-icons/ai';

const Layout = () => {
    const [title, setTitle] = useState();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'space-between',
                height: '100%',
            }}
        >
            <header
                style={{
                    padding: 20,
                    position: 'relative',
                }}
            >
                <AiOutlineLeft style={{ position: 'absolute', fontSize: 25 }} />
                <h1 style={{ textAlign: 'center' }}>{title}</h1>
            </header>
            <Outlet context={{ setTitle }} />
            <nav>
                <ul
                    style={{
                        appearance: 'none',
                        listStyle: 'none',
                        display: 'flex',
                        justifyContent: 'space-around',
                        margin: 0,
                        padding: 0,
                    }}
                >
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
                </ul>
            </nav>
        </div>
    );
};

export default Layout;
