import './home.css';
import './post.css'
import back from '../../images/background.png';
import Navbar from '../navbar/navbar';
import Footer from '../footer/footer';
import card1 from '../../images/card1.png';
// import Posts from '../posts/posts';
import axios from 'axios';
import { useEffect, useState } from "react";
function Home() {
    const [posts, setPosts] = useState([]);
    useEffect(() => {
        axios
            .get('http://127.0.0.1:4000/post/allpost')
            .then((response) => {
                setPosts(response.data.data);
                console.log(response.data, "Res Data")
            })
            .catch((error) => {
                console.error('Error fetching posts:', error);
            });
    }, [])
    return (
        <div>
            <Navbar />
            <div class="home">
                <div class="background">
                    <div class="background-text">
                        <span class="quotes">Explore.. Express.. Inspire..</span>
                    </div>
                    <img class="back-img" src={back} alt="Bad Connection" />
                </div>
                <div className='wrapping'>
                    <div className="post">
                        {posts.map((post) => (
                            <div key={post._id}>
                                <img className="postImg" src={card1} alt="" />
                                <div className="postInfo" >
                                    <div className="postCats">
                                        <span className="postCat">
                                            Music
                                        </span>
                                        <span className="postCat">
                                            Life
                                        </span>
                                    </div>
                                    <span className="postTitle">
                                        {post.title}
                                    </span>
                                    <hr />
                                    <span className="postDate">{new Date(post.createdAt).toDateString()}</span>
                                    <p className="postDesc">
                                        {post.desc}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div >
                </div>
            </div>
            <Footer />
        </div>
    )
};
export default Home;