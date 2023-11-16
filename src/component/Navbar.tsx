import { Link } from 'react-router-dom';
import { Box, Flex ,Button} from '@chakra-ui/react';
const Navbar = () => {
    function refresh(){
        window.location.href = '/home';
    }
    return (
    <Flex
        as="nav"
        align="center"
        justify="space-between"
        height='80px'
        bg="teal.500"
        color="white"
        position="fixed"
        top="0"  

        width="100%"
        zIndex="1000" 
    >
        <Button colorScheme='blue' marginLeft={4} onClick={()=>{refresh()}}>
                Refresh
        </Button>

        <Box display="flex" alignItems="center">
        <Box marginRight={4}>
            <Link to="/home">
                Home
            </Link>
        </Box >
        <Box marginRight={4}>
            <Link to="/tweet-analytic">
                Analytic
            </Link>
        </Box>
        <Box marginRight={4}>
            <Link to="/login" onClick={()=>{localStorage.removeItem('username')}}>
                Logout
            </Link>
        </Box>
        </Box>
    </Flex>
    );
};

export default Navbar;