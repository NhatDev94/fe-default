import { Input } from 'antd'
import { useState, ChangeEvent, useRef, useEffect, useCallback, MouseEvent } from 'react'
import { SearchResultInterface } from '../../interfaces/FormInterface'

import './index.css'

interface PropsInterface {
    placeholder?: string
    optionList: SearchResultInterface[]
}

const CustomSelect = (props: PropsInterface) => {
    const { placeholder, optionList } = props
    const ref = useRef<HTMLDivElement>(null)
    const searchRef: any = useRef(null)

    const [value, setValue] = useState('')

    const [isSearch, setIsSearch] = useState(false)
    const [searchValue, setSearchValue] = useState('')

    const [searchResult, setSearchResult] = useState<SearchResultInterface[]>([])

    const clickOutSide = useCallback((e: Event) => {
        if (searchValue) {
            !ref?.current?.contains(e.target as Node) && setSearchValue('')
        }
    }, [searchValue])

    useEffect(() => {
        window.addEventListener('click', clickOutSide)
        return () => {
            window.removeEventListener('click', clickOutSide)
        }
    }, [clickOutSide])

    useEffect(() => {
        if (searchValue) {
            document.body.style.overflow = 'hidden'
        }
        return () => {
            document.body.style.overflow = 'auto'
        }
    }, [searchValue])

    const handleFocus = () => {
        setIsSearch(true)
        searchRef?.current?.focus()
    }

    const hanleBlur = () => {
        setIsSearch(false)
    }

    const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value
        setSearchValue(value)
        if (!value) {
            setSearchResult([])
            return
        }
        const result: SearchResultInterface[] = optionList?.filter((item: SearchResultInterface) => item?.name?.toLocaleLowerCase()?.slice(0, value?.length) === value?.toLocaleLowerCase())
        setSearchResult(result)
    }

    const handleSelect = (select: SearchResultInterface) => {
        setValue(select?.name)
        setIsSearch(false)
        setSearchValue('')
    }

    return (
        <div className="relative z-10" id='custom-select'>
            <Input
                placeholder='Search...'
                value={searchValue}
                onBlur={hanleBlur}
                onChange={handleSearch}
                className={`absolute top-0 left-0 ${isSearch ? '' : 'opacity-0'}`}
                ref={searchRef}
            />
            {
                !isSearch && (
                    <Input
                        placeholder={placeholder}
                        readOnly
                        value={value}
                        onFocus={handleFocus}
                        className='absolute top-0 left-0'
                    />
                )
            }
            {
                searchValue && (
                    <div className='absolute top-10 left-0 translate-y-2 rounded-lg bg-gray-100 w-full max-h-[200px] overflow-y-scroll border border-black/10 shadow-md' ref={ref} >
                        {
                            searchResult?.length > 0 && searchResult?.map((item: SearchResultInterface, i: number) => (
                                <div
                                    key={i}
                                    className='mb-[1px] py-2 px-4 bg-white'
                                    onClick={() => handleSelect(item)}
                                >
                                    <p className=''> {item?.name}</p>
                                </div>
                            ))
                        }
                        {
                            searchResult?.length === 0 && (
                                <div className='flex items-center justify-center h-12 text-black'>No result</div>
                            )
                        }
                    </div>
                )
            }
        </div>
    )
}

export default CustomSelect