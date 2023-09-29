import axios from "axios";

const GenerList = async (list) => {
    const options = {
        method: "GET",
        headers: {
            "Content-Type": "application/json",
            Authorization: `Bearer ${process.env.REACT_APP_MOVIE_DB_TOKEN}`,
        },
    };
    let newlist = []
    return await axios.get(`${process.env.REACT_APP_MOVIE_BASE_URL}/3/genre/movie/list?language=en`, options).then(res => {
        res.data?.genres?.map(ele => {
            if (list.includes(ele.id)) {
                newlist.push(ele.name)
            }
        })
        return newlist
    }).catch(err => {
        console.log(err)
    })
}

export default GenerList;