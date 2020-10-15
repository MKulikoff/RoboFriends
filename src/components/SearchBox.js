import React from 'react'; 

const SearchBox = ({searchfield, searchChange}) => {
	return (
		<div className='pa3'>
			<input 
				className='bg-white tc ba bw2 b--light-green grow f3 pa2'
				type='search' 
				placeholder='Search' 
				onChange={searchChange}
			/>
		</div>
	);
}

export default SearchBox; 