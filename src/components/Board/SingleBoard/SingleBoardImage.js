const imageAddress = 'http://localhost:8080/shutterstock'

const SingleBoardImage = ({oneBoard}) => {
    return (
        <div className='bi__wrapper'>
            {console.log(oneBoard)}
            <img className='bi__image' src={`${imageAddress}${oneBoard.mainImage}`} alt="description" />
            <h3 className='bi__text'>{oneBoard.mood}</h3>
        </div>
    )
}

export default SingleBoardImage;