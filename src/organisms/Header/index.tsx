import { Box } from "./styles"
import Logo from "../../molecules/Logo"
import Menu from "../Menu"
import Button from "../../atoms/Button"
export default function Header() {
    return (
        <Box>
            <Logo />
            <Menu />
            <Button />
        </Box>
    )
}