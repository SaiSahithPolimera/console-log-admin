import { useEffect, useRef, useState } from "react"
import { useParams, useNavigate } from "react-router-dom"
import Navbar from "../components/Navbar";
import TagEditor from "../components/TagEditor";
import { Editor } from "@tinymce/tinymce-react";
import toast, { Toaster } from "react-hot-toast";
import { DeleteIcon } from "../components/Icons";

const PostEditor = () => {
    const { title } = useParams();
    const editorRef = useRef(null);
    const titleRef = useRef("");
    const tagRef = useRef("");
    const navigate = useNavigate();
    const URL = import.meta.env.VITE_BASE_URL;
    const [content, setContent] = useState("");
    const [tags, setTags] = useState([]);
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState("");
    const tinyApiKey = import.meta.env.VITE_TINY_MCE_KEY;
    const deletePost = async () => {
        try {
            console.log(title);
            const res = await fetch(`${URL}/posts/delete/${title}`, { method: "DELETE", headers: { 'Content-Type': 'application/json' }, credentials: 'include' });
            const data = await res.json();
            if (data.message) {
                navigate("/blog");
            }
            if (data.error) {
                toast.error(data.error);
            }
        } catch (err) {
            console.error(err);
            toast.error("Error deleting post")
        }
    }
    const addTag = async () => {
        if (tagRef.current.value) {
            try {
                const tagData = {
                    tagName: tagRef.current.value,
                    title: title.split("-").join(" ")
                }
                const res = await fetch(`${URL}/tags`, { method: "POST", headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(tagData) });
                if (res.ok == true) {
                    const updatedTags = [...tags, { name: tagRef.current.value }];
                    tagRef.current.value = "";
                    setTags(updatedTags);
                }
                const data = await res.json();
                if (data.error) {
                    toast.error(data.error);
                    return;
                }
            }
            catch (err) {
                console.error(err)
                setError("Error occurred while reaching server!")
            }
        }
    }
    const removeTag = async (name) => {
        if (name) {
            try {
                const tagData = {
                    tagName: name,
                    title: title.split("-").join(" ")
                }
                const res = await fetch(`${URL}/tags`, { method: "DELETE", headers: { 'Content-Type': 'application/json' }, credentials: 'include', body: JSON.stringify(tagData) });
                if (res.ok === true) {
                    const updatedTags = tags.filter((tag) => tag.name !== name);
                    setTags(updatedTags);
                }
                const data = await res.json();
                if (data.error) {
                    toast.error(data.error);
                    return;
                }
            } catch (err) {
                console.error(err);
                toast.error("Error occurred while reaching server!")
            }
        }

    }
    useEffect(() => {
        const fetchPostData = async () => {
            if (!title) {
                return;
            }
            setIsLoading(true);
            try {
                const response = await fetch(`${URL}/post/${title}`)
                const data = await response.json();
                if (data) {
                    setContent(data.post.post.content);
                    titleRef.current.value = data.post.post.title;
                    if (data.post.post.tags) {
                        setTags(data.post.post.tags);
                    }
                    setIsLoading(false);
                }
            }
            catch (err) {
                console.error(err);
                setIsLoading(false);
                setError("Error occurred while reaching server!");
            }
        }
        fetchPostData();
    }, [URL, title])

    return (
        <section className="min-h-screen gap-6 flex flex-col bg-black p-4 font-sans text-slate-300 lg:px-64">
            <Navbar />
            {
                !isLoading && error.includes("server") ? <span className="self-center bg-slate-200 p-1 text-black rounded-lg px-2 py-2"> 🥺 {error} </span> :
                    <div className={`flex flex-col gap-8 + ${isLoading ? "animate-pulse" : "animate-none"}`}>
                        <div className="flex gap-2 items-center">
                            <div className="rounded-2xl p-px bg-gradient-to-b dark:from-green-800 dark:to-blue-800 w-full">
                                <div className="rounded-2xl p-1 cursor-pointer bg-black ease-in-out">
                                    <input ref={titleRef} placeholder="* Title" className=" w-full px-3 py-3 text-xl text-slate-200 rounded-2xl outline-none bg-black" />
                                </div>
                            </div>
                        </div>
                        <Editor
                            onInit={(_evt, editor) => editorRef.current = editor}
                            initialValue={content}
                            init={{
                                menubar: false,
                                height: 600,
                                content_style: `
                            body {
                                background-color: black;
                                color: #f8fafc; 
                                font-family: sans-serif;
                            }
                            `,
                            }}
                            apiKey={tinyApiKey}
                        />
                        <div className="flex justify-between items-start">
                            <TagEditor removeTag={removeTag} addTag={addTag} tagRef={tagRef} tags={tags} />
                            <button className="bg-red-600 px-2 py-1 flex gap-1 rounded-lg text-white hover:bg-red-700 ease-linear duration-150" onClick={() => deletePost()}> Delete Post<DeleteIcon /></button>
                        </div>
                        <Toaster />
                    </div>
            }
        </section >
    )
}

export default PostEditor

