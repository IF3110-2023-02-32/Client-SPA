import {useState,useEffect} from "react";
import Navbar from "./Navbar";
import {Text,Box, Center} from "@chakra-ui/react";
import LineChartAssetsHome from "./LineChartAssetsHome";


function Home(){
    // const [username,setUsername] = useState('');
    const [name,setName] = useState('');
    const [followData,setFollowData] = useState<any[]>([]);
    const nama = 'Sulthan'
    useEffect(()=>{
        // setUsername(localStorage.getItem('username')!);
        setName(nama);
        setFollowData(FollowData);
    },[])
    const FollowData = [
        { day : 'Mon' , total : 1000 },
        { day : 'Tue' , total : 3000 },
        { day : 'Wed' , total : 2000 },
        { day : 'Thu' , total : 5000 },
        { day : 'Fri' , total : 4000 },
        { day : 'Sat' , total : 3000 },
        { day : 'Sun' , total : 1000 },
    ];
    if(localStorage.getItem('username') === null){
        window.location.href = '/login';
    }
    return(
        <div>
        <Box marginTop='80px'>
        <Navbar/>
        <Box>
        <Box textAlign="center" paddingTop="40px" >
        <Text fontSize="4xl" fontWeight="bold" fontFamily="heading" color="teal.500">
            Welcome Back {name}!
        </Text>
        <Text fontSize="xl" fontFamily="body" color="gray.600" marginTop="4">
        Analytic Follow
        </Text>
        <Center>
        <LineChartAssetsHome data={followData} />
        </Center>
        </Box>
        </Box>
        </Box>
        </div>
        
    )
}

export default Home;