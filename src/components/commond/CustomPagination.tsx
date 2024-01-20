'use client'
import { CircularProgress, Pagination } from '@mui/material'
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useState } from 'react'
import CustomProgress from './CustomProgress';
import useVisiblity from '@/hooks/useVisiblity';

export default function CustomPagination({ count, page, pathname }: { count: number, page: string, pathname: string }) {
    const searchParams = useSearchParams();
    const router = useRouter();
    const [currentPage, setCurrentPage] = useState(+page)
    const loading = useVisiblity()
    const handleChange = async (event: React.ChangeEvent<unknown>, value: number) => {
        loading.show()
        router.push(`${pathname}/${value.toString()}`);
        setCurrentPage(value);
    };
    return (
        <>
            {
                loading.visiblity ?
                    <CustomProgress /> :
                    <Pagination
                        count={Math.ceil(count / 2)}
                        page={currentPage}
                        siblingCount={0}
                        onChange={handleChange}
                        sx={{
                            '& button': {
                                backgroundColor: "hsla(0,0%,100%, 0.1)",
                                backdropFilter: 'blur(20px)',
                                borderRadius: 3,
                            },
                            '& .Mui-selected':{
                                backgroundColor: theme => theme.palette.active.main
                            }
                        }}
                    />
            }
        </>
    )
}
