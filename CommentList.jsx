import React from "react";
import Comment from "./Comment";

const comments = [
    {
        name: "이유찬",
        comment: "안녕하세요, 유찬이입니다.",
    },
    {
        name: "유현지",
        comment: "한일문화컨텐츠 전공으로 할거야",
    },
    {
        name: "이동혁",
        comment: "내 앞날이 걱정이다 싀바",
    },
    {
        name: "이은찬",
        comment: "하... 휴가 짤린거 ㅈ같네;",
    }
];

function CommentList(props) {
    return (
        <div>
            {comments.map((comment) => {
                return (
                    <Comment name={comment.name} comment={comment.comment} />
                );
            })}
        </div>
    );
}

export default CommentList;