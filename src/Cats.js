import React, { useState, useEffect, useCallback } from 'react'

const header = {
    'x-api-key': '76366cfb-761e-45b5-8bf1-81518d61b143',
}


function Cats() {

    const [breeds, setBreeds] = useState()
    const [selectedBreedId, setSelectedBreedId] = useState()
    const [imageUrl, setImageUrl] = useState()

    useEffect(() => {
        async function f() {
            const response = await fetch('https://api.thecatapi.com/v1/breeds', header)
            const breeds = await response.json()
            setBreeds(breeds)
            setSelectedBreedId(breeds[0].id)
        }
        f()
    }, [])

    const getRandomCatImage = useCallback(async () => {
        if (selectedBreedId) {
            const response = await fetch(`https://api.thecatapi.com/v1/images/search?breed_id=${selectedBreedId}`, header)
            const cats = await response.json()
            setImageUrl(cats[0].url)
        }
    }, [selectedBreedId])

    useEffect(() => {
        getRandomCatImage()
    }, [selectedBreedId])

    return (
        <div>
            <h1>
                Cats!
            </h1>

            {breeds
                ?
                <>
                    <select onChange={e => setSelectedBreedId(e.target.value)}>
                        {breeds.map(breed => (
                            <option value={breed.id} key={breed.id}>
                                {breed.name}
                            </option>
                        ))}
                    </select>
                    <button onClick={getRandomCatImage}>
                        get a new image
                    </button>
                </>
                :
                <p>loading....</p>
            }


            {imageUrl &&
                <img src={imageUrl} style={{ width: "300px" }} />
            }

        </div>
    )
}

export default Cats