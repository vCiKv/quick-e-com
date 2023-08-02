import Link from 'next/link'
const Logo = () => {
    return (
      <div className='brand'>
        <h1 className="m-0">
          <Link passHref href="/finance">
            <img
              src={'/finance/logo.svg'}
              alt="O"
              width={32}
              height={32} />
          </Link>
        </h1>
      </div>
    );
}
export default Logo