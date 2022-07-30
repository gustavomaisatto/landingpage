import {MenuList} from './styles'
import {ItemList} from './styles'


const Menu = () => {
    return (
        <MenuList>
            <ItemList><a href='#'>Home</a></ItemList>
            <ItemList><a href='#'>About Us</a></ItemList>
            <ItemList><a href='#'>Locations</a></ItemList>
            <ItemList><a href='#'>FAQ's</a></ItemList>
        </MenuList>
        )
}

export default Menu;