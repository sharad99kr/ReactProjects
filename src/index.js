//import react and react dom libraries
import React from 'react';
import ReactDom from 'react-dom';
import faker from 'faker';
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';


//create react component
const App=()=>{
    return <div className="ui container comments">
        
        <ApprovalCard>
            <CommentDetail
            author="sam"
            timeAgo="today at 4"
            content="nice post"
            avatar={faker.image.avatar()}    
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
            author="ram"
            timeAgo="today at 5"
            content="great post"
            avatar={faker.image.avatar()}    
            />
        </ApprovalCard>

        <ApprovalCard>
            <CommentDetail
            author="rahim"
            timeAgo="today at 6"
            content="what a post"
            avatar={faker.image.avatar()}    
            />
        </ApprovalCard>
        </div>;
};


//take creact component and show on screen
ReactDom.render(
    <App />, document.querySelector('#root')
);