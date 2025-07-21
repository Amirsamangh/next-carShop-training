import Link from 'next/link'
 
export default function NotFound() {
  return (
    <div className='container error_page'>
      <h2>404! page not found</h2>
      <hr />
      <p>Could not find requested resource</p>
      <hr />
      <button className='btn btn-info'>
        <Link href="/">
        <span>Return Home</span>
        </Link>
      </button>
    </div>
  )
}