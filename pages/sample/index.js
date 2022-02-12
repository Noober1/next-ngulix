import React from 'react'
import Link from 'next/link'

const SamplePage = () => {
  return (
    <div>
        <ul>
            <li>
                <Link href="/sample/changeTheme">
                    <a>Change Theme</a>
                </Link>
            </li>
            <li>
                <Link href="/sample/changeTheme">
                    <a>Change Theme</a>
                </Link>
            </li>
        </ul>
        <Link href="/">
            <a>Back to root page</a>
        </Link>
    </div>
  )
}

export default SamplePage