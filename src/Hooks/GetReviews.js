import { useEffect, useState } from "react"

const GetReviews = () => {

    const [review, setReview] = useState([])
    useEffect( () => {
        fetch('reviews.json')
        .then(response => response.json())
        .then(data => setReview(data))
    },[])
    return [review, setReview]

}
export default GetReviews