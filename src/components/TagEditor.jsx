import { RemoveIcon, AddIcon } from "./Icons";


const TagEditor = ({ removeTag, tagRef, addTag, tags }) => {
    return (
        <div className="flex flex-col gap-3 w-3/5">
            <div className="flex gap-3 flex-wrap">
                <h3 className="text-white font-bold text-xl">Tags: </h3>
                {
                    tags.map((tag) => <span className=" px-2 py-1 bg-slate-900 flex flex-row items-center justify-center cursor-pointer hover:bg-slate-800  ease-linear duration-150 rounded-lg" key={tag.id}><span>{tag.name}</span>
                        <button onClick={() => removeTag(tag.name)}> <RemoveIcon /> </button> </span>)
                }
            </div>
            <div className="flex gap-2 items-center">
                <div className="rounded-2xl p-px bg-gradient-to-b dark:from-green-800 dark:to-blue-800 lg:w-2/5 sm:w-3/5">
                    <div className="rounded-2xl p-1 bg-black ease-in-out">
                        <input ref={tagRef} onKeyDown={(e) => e.key === "Enter" ? addTag() : e} placeholder="new tag" className=" w-full px-2 py-2 text-md text-slate-200 rounded-2xl outline-none bg-black" />
                    </div>
                </div>
                <button className="p-1 bg-green-600 rounded-3xl hover:bg-green-700 ease-linear duration-150" onClick={() => addTag()}><AddIcon /></button>
            </div>
        </div>
    )
}

export default TagEditor;