import React from "react";
import ReactDOM from "react-dom";
import CommentDetail from './CommentDetail';
import ApprovalCard from './ApprovalCard';
import faker from 'faker';

const App = () => {
    return (
      <div className="ui container comments">
          
        <ApprovalCard>
        <CommentDetail 
            author="Sam" 
            timeAgo="Today at 4:15AM" 
            text="Nice!!" 
            src={faker.image.avatar()}/>              
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail 
            author="Stephen" 
            timeAgo="Today at 2:00PM" 
            text="So GOOOOOD" 
            src={faker.image.avatar()}/>
        </ApprovalCard>

        <ApprovalCard>
        <CommentDetail
            author="Step" 
            timeAgo="Today at 3:00PM" 
            text="My BAD" 
            src={faker.image.avatar()}/>
        </ApprovalCard>
      </div>  
    );
}

ReactDOM.render(<App/>, document.querySelector('#root'))