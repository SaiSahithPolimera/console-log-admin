import { Link } from 'react-router-dom';
import { EditPostIcon } from './Icons';

const BlogCard = ({ blogData }) => {
    return (
        <div className="flex flex-col gap-2 w-full">
            <div className='flex items-center justify-between'>
                <Link to={/posts/ + blogData.title.split(" ").join("-")}>
                    <h1 className="text-2xl text-slate-200 font-bold hover:cursor-pointer">{blogData.title}</h1>
                </Link>
                <div class="rounded-2xl  p-px bg-gradient-to-b dark:from-green-800 dark:to-blue-800 ">
                    <div class="rounded-2xl p-1 cursor-pointer dark:bg-gray-900 hover:bg-black ease-in-out duration-150">
                        <EditPostIcon />
                    </div>
                </div>
            </div>
            <div className="text-md text-slate-300 line-clamp-3">{blogData.content}</div>
        </div>
    )
}

export default BlogCard;