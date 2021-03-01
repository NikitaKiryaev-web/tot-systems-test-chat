import '../styles/Sidebar.css';
import {NavLink} from 'react-router-dom';

function Sidebar(props) {
  

  return(
    <nav className="sidebar">
      <NavLink to='/workchat' className="sidebar__link" activeClassName="sidebar__link_active">Work</NavLink>
      <NavLink to='/floodchat' className='sidebar__link' activeClassName="sidebar__link_active">Flood</NavLink>
    </nav>
  )
}

export default Sidebar;