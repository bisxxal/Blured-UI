'use client';
import { useEffect, useState } from 'react';
import { getAllTitles } from '@/lib/actions/codeSave';
import { SearchNormal } from 'iconsax-react';
import { RxCross2 } from "react-icons/rx";
import Link from 'next/link';
function SearchCom() {
    const [allTitles, setAllTitles] = useState([]);
    const [filteredTitles, setFilteredTitles] = useState([]);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        const fetchTitles = async () => {
            const fetchedTitles = await getAllTitles();
            setAllTitles(fetchedTitles);
            setFilteredTitles(fetchedTitles); // Initially show all titles
        };

        fetchTitles();
    }, []);

    const handleInputChange = (event) => {
        const term = event.target.value;
        setSearchTerm(term);

        if (term.trim() === '') {
            setFilteredTitles(allTitles); // Show all titles if search term is empty
        } else {
            const lowercasedTerm = term.toLowerCase();
            setFilteredTitles(
                allTitles.filter(title => title.toLowerCase().includes(lowercasedTerm))
            );
        }
    };

    const handleTitleClick = (title) => {
        setSearchTerm(title);
        setFilteredTitles([title]); // Show only the selected title
    };

    const [showSearch, setShowSearch] = useState(false);
    return (
        <>
            <div onClick={()=>setShowSearch(true)} className='inshadow flex gap-3 px-2 py-2  border-[2px] bg-[#ffffff0b] border-[#ffffff17] rounded-2xl'>
                <SearchNormal size="20" />
                <input
                    type="text"
                    className='border-none outline-none max-lg:w-20 placeholder:text-gray-500 bg-transparent text-sm'
                    placeholder='Search Doc'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>


            <div className={` ${showSearch=== true ? ' block ' :' hidden '} bg-[#0000008e]  z-50 h-screen w-full absolute top-0 left-0 `}>
                <h1 onClick={()=>setShowSearch(false)} className=' cursor-pointer z-10 absolute left-[73%] top-[15%] text-3xl font-thin'> <RxCross2 /></h1>
            <div className='h-[50vh] max-lg:w-[78%] w-[50vw] backdrop-blur-xl bg-[#9e9e9e9f searchbg border-[2px] border-[#ffffff17] rounded-2xl absolute top-[20%] max-lg:left-[10%] left-[25%] mt-1 rounded- shadow-lg overflow-y-auto z-10'>
         
            <div className=' inshadow flex gap-3 px-2 py-2 border-[2px] bg-[#ffffff0b] border-[#ffffff17] rounded-xl w-[96%] mx-auto mt-4'>
                <SearchNormal size="20" />
                <input
                    type="text"
                    className='border-none outline-none placeholder:text-gray-500 bg-transparent text-sm'
                    placeholder='Search Doc'
                    value={searchTerm}
                    onChange={handleInputChange}
                />
            </div>

                <div className='p-3 flex flex-col'>
                    {filteredTitles.map((item, index) => (
                        <Link href={`/docs/${item}`}
                        key={index}
                        className='py-2 px-3 hover:bg-[#ffffff1a] text-[#ffffffb5] rounded-lg cursor-pointer'
                        onClick={() => handleTitleClick(item)}
                        >
                            {item}
                        </Link>
                    ))}
                </div>
            </div>
                    </div>
        </>
    );
}

export default SearchCom;
