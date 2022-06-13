/* ---> HOOKS <--- */
import {useState} from 'react'

/*---> NAVBAR <---*/
import { ProSidebar, SidebarHeader, SidebarFooter, SidebarContent } from 'react-pro-sidebar'
import { Menu, MenuItem, SubMenu } from 'react-pro-sidebar'
import { FaBars, FaUser, FaReact} from 'react-icons/fa'

/* ---> LINKING <---*/
import { Link } from 'react-router-dom'
  
import 'react-pro-sidebar/dist/css/styles.css'

export default function SideNavBar() {
    const [collapsed, setCollapsed] = useState(true)
    
    return (
        <ProSidebar collapsed={collapsed}>
            <SidebarHeader>
                NavBar
            </SidebarHeader>
            <SidebarContent>
                <Menu iconShape='square'>
                    <MenuItem icon={<FaBars />} onClick={() => setCollapsed(state => (!state))}>
                        <Link to="/">Home</Link>
                    </MenuItem>
                    <SubMenu title="Account" icon={<FaUser />}>
                        <MenuItem>
                            <Link to="/wallet">Wallet</Link>
                        </MenuItem>
                        <MenuItem>
                            <Link to="/walletSettings">Wallet Settings</Link>
                        </MenuItem>
                    </SubMenu>
                </Menu>
            </SidebarContent>
            <SidebarFooter>
                <FaReact/>Sponsor by React
            </SidebarFooter>
        </ProSidebar>
    )
}