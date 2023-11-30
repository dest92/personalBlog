import Link from "next/link";
import Date from "./date";
import React from "react";

interface PostCardProps {
  id: string;
  title: string;
  date: string;
}

const PostCard: React.FC<PostCardProps> = ({ id, title, date }) => {
  return (
    <>
      <div className="card max-w-xl w-auto bg-base-100 shadow-xl m-3">
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>
            <Date dateString={date} />
          </p>
          <div className="card-actions justify-end">
            <Link
              href={`/posts/${id}`}
              className="text-blue-300 hover:text-blue-600 underline decoration-transparent hover:decoration-current transition-all duration-300 ease-in-out"
            >
              Read More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default PostCard;
