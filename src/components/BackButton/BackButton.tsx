import Link from 'next/link'
const BackButton = () => {
  return (
    <Link data-testid='back-button' href={'/'}>
      {' '}
      ← Back to Albums
    </Link>
  )
}

export default BackButton
