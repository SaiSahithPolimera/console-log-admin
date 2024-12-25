import { Link } from 'react-router-dom';
import { EditPostIcon } from './Icons';
import DOMPurify from 'dompurify';
import parse from "html-react-parser"
import { useMemo } from 'react';

const BlogCard = ({ blogData }) => {
    const sanitizedContent = useMemo(() => ({
        __html: DOMPurify.sanitize(blogData.content)
    }), [blogData.content]);
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className='flex items-center justify-between'>
                <Link to={`/blog/${blogData.title.split(" ").join("-")}/edit`}>
                    <h1 className="text-2xl text-slate-200 font-bold hover:cursor-pointer">{blogData.title}</h1>
                </Link>
                <div className="rounded-2xl  p-px bg-gradient-to-b dark:from-green-800 dark:to-blue-800 ">
                    <div className="rounded-2xl p-1 cursor-pointer dark:bg-gray-900 hover:bg-black ease-in-out duration-150">
                        <Link to={`/blog/${blogData.title.split(" ").join("-")}/edit`}>
                            <EditPostIcon />
                        </Link>
                    </div>
                </div>
            </div>
            <div className="text-md text-slate-300 line-clamp-3">{parse(sanitizedContent.__html)} </div>
        </div>
    )
}

export default BlogCard;