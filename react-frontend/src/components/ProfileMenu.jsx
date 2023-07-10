import * as React from 'react';
import { BiLogOut, BiShoppingBag, BiUser, BiUserCircle } from "react-icons/bi";
import { } from "react-icons/bi";

import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

export default function BasicMenu() {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <div>
            <div id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}>  <BiUser size={22} />
            </div>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}

                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                <div className='account-dropdown '>
                    <MenuItem onClick={handleClose}><BiUserCircle size={22} style={{ marginRight: '8px' }} />Manage My Account</MenuItem>
                    <MenuItem onClick={handleClose}> <BiShoppingBag size={22} style={{ marginRight: '8px' }} />  My Order</MenuItem>
                    <MenuItem onClick={handleClose}><BiLogOut size={22} style={{ marginRight: '8px' }} />Logout</MenuItem>
                </div>

            </Menu>
        </div>
    );
}