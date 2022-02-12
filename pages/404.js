import Typography from '@mui/material/Typography'
import Paper from '@mui/material/Paper'
import React from 'react'
import Link from '../components/molecules/Link'

const CustomNotFoundPage = () => {
    return (
        <div className="w-screen h-screen flex items-center text-center flex-col justify-center">
            <Paper className='w-full max-w-md mx-auto p-5'>
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
            </Paper>
        </div>
    )
}

export default CustomNotFoundPage