import 'materialize-css/dist/css/materialize.min.css';
import { Navbar, NavItem, Icon, Dropdown, Divider} from 'react-materialize';
function TopNav (){
    return(
        <Navbar
            className="sample"
            alignLinks="right"
            brand={<b><a className="brand-logo" href="#" style={{color:'black'}}>Rep<span style={{color:"#3f51b5"}}>suite</span>.</a></b>}
            id="mobile-nav"
            options={{
            draggable: true,
            edge: 'left',
            inDuration: 250,
            onCloseEnd: null,
            onCloseStart: null,
            onOpenEnd: null,
            onOpenStart: null,
            outDuration: 200,
            preventScrolling: true
            }}
            style={{color:'black'}}
        >
        <NavItem href="components.html" style={{color:'black'}}>
            <Icon small>subject</Icon>
        </NavItem>
        <NavItem href="" style={{color:'black'}}>
            <Icon small>settings</Icon>
        </NavItem>
        <Dropdown style={{color:'black'}}
            trigger={<a href="#!" style={{color:'black'}}><Icon left>person</Icon>{'Rachna Ranade'}<Icon right>arrow_drop_down</Icon></a>}
            >
            <a href="#" style={{color:'black'}}>
            Edit
            </a>
            <Divider></Divider>
            <a href="#" style={{color:'black'}}>
            Logout
            </a>
        </Dropdown>
        </Navbar>
    )
}


export default TopNav