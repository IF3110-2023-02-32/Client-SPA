import {useState,useEffect} from 'react'
import LineChartAssets from './LineChartAssets';
import {Box, Text} from '@chakra-ui/react';
import BoxContent from './BoxContent';
import Navbar from './Navbar';
import { useLocation } from "react-router-dom"

interface Data {
    day: string;
    total: number;
}
interface Content{
    username : string;
    id : number;
    name : string;
    post_id : number;
    body : string;
    date_created : string;
    path : string;
}
function TweetAnalytic(){
    if(localStorage.getItem('username') === null){
        window.location.href = '/login';
    }
    const location = useLocation()
    const params = new URLSearchParams(location.search)
    const id = params.get('id');
    if(id === null){
        console.log('all');
    }
    else{
        console.log(id);
    }
    const initialData = [
        { day : 'Mon' , total : 0 },
        { day : 'Tue' , total : 0 },
        { day : 'Wed' , total : 0 },
        { day : 'Thu' , total : 0 },
        { day : 'Fri' , total : 0 },
        { day : 'Sat' , total : 0 },
        { day : 'Sun' , total : 0 },
    ];
    const [replyData, setReplyData] = useState<Data[]>(initialData);
    const [likeData, setLikeData] = useState<Data[]>(initialData);
    const [viewData, setViewData] = useState<Data[]>(initialData);
    const [content, setContent] = useState<Content[]>([]);

    //Dummy Data
    const LikeData = [
        { day : 'Mon' , total : 1000 },
        { day : 'Tue' , total : 3000 },
        { day : 'Wed' , total : 2000 },
        { day : 'Thu' , total : 5000 },
        { day : 'Fri' , total : 4000 },
        { day : 'Sat' , total : 3000 },
        { day : 'Sun' , total : 1000 },
    ];
    
    const ViewsData = [
        { day : 'Mon' , total : 1000 },
        { day : 'Tue' , total : 3000 },
        { day : 'Wed' , total : 2000 },
        { day : 'Thu' , total : 5000 },
        { day : 'Fri' , total : 4000 },
        { day : 'Sat' , total : 3000 },
        { day : 'Sun' , total : 1000 },
    ];

    const RepliesData = [
        { day: 'Mon', total: 1000 },
        { day: 'Tue', total: 3000 },
        { day: 'Wed', total: 2000 },
        { day: 'Thu', total: 5000 },
        { day: 'Fri', total: 4000 },
        { day: 'Sat', total: 3000 },
        { day: 'Sun', total: 1000 },
    ];

    const ContentData = [
        {
            username: 'user1',
            id: 1,
            name: 'user1',
            post_id: 1,
            body: 'tweet1',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
        {
            username: 'user2',
            id: 2,
            name: 'user2',
            post_id: 2,
            body: 'tweet2',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
        {
            username: 'user3',
            id: 3,
            name: 'user3',
            post_id: 3,
            body: 'tweet3',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
        {
            username: 'user4',
            id: 4,
            name: 'user4',
            post_id: 4,
            body: 'tweet4',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
        {
            username: 'user5',
            id: 5,
            name: 'user5',
            post_id: 5,
            body: 'tweet5',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
        {
            username: 'user6',
            id: 6,
            name: 'user6',
            post_id: 6,
            body: 'tweet6',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
        {
            username: 'user7',
            id: 7,
            name: 'user7',
            post_id: 7,
            body: 'tweet7',
            date_created: '2021-05-31',
            path: 'https://pbs.twimg.com/media/E2Zu8mTUcAAGzDg?format=jpg&name=small'
        },
    ];
        

    //Set Data
    useEffect(() => {
        setLikeData(LikeData);
        setViewData(ViewsData);
        setReplyData(RepliesData);
        setContent(ContentData);
    }, [])

    const makeContentBox = () => {
        let contentBox = [];
        for (let i = 0; i < content.length; i++) {
            contentBox.push(<BoxContent data={content[i]} key={content[i].id} />)
        }
        return contentBox;
    }
    return (
        <div>
            <Navbar />
            <Box
            marginRight="240px"
            marginTop="80px"
            >
                {makeContentBox()}
            </Box>
            <Box
            position="fixed"
            right="0"
            top="78px"
            height="100vh"
            width="240px"  
            overflowX="auto"
            padding="4">
                <Text fontSize="xl" fontWeight="bold">Like</Text>
                <LineChartAssets data={likeData} />
                <Text fontSize="xl" fontWeight="bold">Views</Text>
                <LineChartAssets data={viewData} />
                <Text fontSize="xl" fontWeight="bold">Replies</Text>
                <LineChartAssets data={replyData} />
            </Box>
            
        </div>
    )
}

export default TweetAnalytic;