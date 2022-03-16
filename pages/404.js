import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import React from 'react'
import Link from '../components/molecules/Link'
import PageHead from '../components/molecules/PageHead'

const CustomNotFoundPage = () => {
    return (
        <>
            <PageHead
                title='Halaman tidak ditemukan'
            />
            <div className="w-screen h-screen flex items-center text-center flex-col justify-center">
                <div className='w-full max-w-md mx-auto p-5'>
                    <Typography variant="h1" gutterBottom>
                        t(404)t
                    </Typography>
                    <Typography variant="h5">
                        Halaman tidak ditemukan
                    </Typography>
                    <Typography>
                        <Link href="/">
                            Kembali ke halaman utama
                        </Link>
                    </Typography>
                </div>
            </div>
        </>
    )
}

export default CustomNotFoundPage