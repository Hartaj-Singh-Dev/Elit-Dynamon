import React from 'react'
import { useRouter } from 'next/router'

const Search = () => {
	const router = useRouter()
	const {
		query: { id },
	      } = router
	console.log(id)

	return(
		<>
		Searched {id}
		</>
	)

}

export default Search
