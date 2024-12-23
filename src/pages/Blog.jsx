import React, { useState, useEffect } from 'react';
import Navbar from "../components/Navbar";
import { Link } from 'react-router-dom';
import { EditPostIcon, NewPostIcon, LoadingIcon } from '../components/Icons';
import BlogCard from '../components/BlogCard';

const Blog = () => {
    const [postData, setPostData] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const URL = import.meta.env.VITE_BASE_URL;
    useEffect(() => {
        const fetchPostData = () => {
            fetch(URL)
                .then((res) => res.json())
                .then((res) => {
                    setPostData(res);
                    if (res.error) {
                        setError(res.error);
                    }
                    setIsLoading(false);
                })
                .catch((err) => console.error(err));

        }
        fetchPostData();
    }
    );
    return (
        <section className="min-h-screen gap-10 flex flex-col bg-black p-4 font-sans text-slate-300 lg:px-64">
            <Navbar />
            <div className='flex flex-col gap-6'>
                <div className='flex gap-2'>
                    <div class="rounded-3xl p-px bg-gradient-to-b dark:from-green-800 dark:to-blue-800 ">
                        <div class="rounded-3xl dark:bg-gray-900 hover:bg-black ease-in-out duration-150">
                            <Link className='flex items-center p-2'><NewPostIcon /> <h4 className='font-bold text-white'>New Post</h4></Link>
                        </div>
                    </div>
                </div>
                <div className=" flex flex-col gap-8">
                    {isLoading && <span className='text-white'>
                        <LoadingIcon />
                    </span>}
                    {
                        error && <span className="text-red-500 bg-stone-200 px-2 py-2 rounded-lg self-center"> 😶 {error}</span>
                    }
                    {postData.length > 0 &&
                        postData.map((post) => (
                            <>
                                <div key={post.id} className="flex flex-col gap-12 w-full">
                                    <BlogCard blogData={post} />
                                </div>
                                <hr className="w-full border-green-800 last-of-type:hidden" key={post.likeCount} />
                            </>
                        ))}
                </div>
            </div>
        </section>
    )
}


export default Blog