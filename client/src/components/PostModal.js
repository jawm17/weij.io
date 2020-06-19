import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-awesome-modal';
import PostPhotoService from '../services/PostPhotoService';
import { AuthContext } from '../context/AuthContext';
import './PostModalStyle.css'

export default function PostModal(props) {
    const [newPost, setNewPost] = useState({ "imgSrc": "https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" });

    const [visible, setVisible] = useState(false);
    const authContext = useContext(AuthContext);
    const [error, setError] = useState(true);
    const [message, setMessage] = useState(null);

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
        props.refresh();
        emptyFields();
    }

    const onChange = (e) => {
        if (e.target.name === "imgSrc" && !e.target.value) {
            setNewPost({ "imgSrc": "https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" });
        }
        else {
            setNewPost({ [e.target.name]: e.target.value, "user": props.username, "userImg": props.userImg, "color": props.color });
            setError(false);
            setMessage("");
        }
    }

    const postPhoto = (e) => {
        e.preventDefault();
        if (!error) {
            PostPhotoService.postPhoto(newPost).then(data => {
                const { message } = data;
                if (message.msgBody === "Unauthorized") {
                    authContext.setUser({ username: "" });
                    authContext.setIsAuthenticated(false);
                } else {
                    closeModal();
                }
            });
        }
        else {
            setMessage("This is not a valid photo");
        }
    }

    const emptyFields = () => {

    }

    const onError = () => {
        setError(true);
        setNewPost({ "imgSrc": "https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" });
    }

    return (
        <section>
            <button onClick={() => openModal()}> Post Photo </button>
            <Modal
                visible={visible}
                width="520"
                height="70%"
                effect="fadeInDown"
            >
                <div className="postModal">
                    <div className="inputArea">
                        <h1>Post an Image</h1>
                        <form onSubmit={postPhoto}>
                            <h4 className="urlTitle">Image URL: </h4>
                            <input
                                className="imgUrlInput"
                                name="imgSrc"
                                id="imgSrc"
                                onChange={onChange}
                            />
                            <button
                                type="submit"
                                className="submitBtn"
                            >
                                Post Photo
                            </button>
                        </form>
                        {message ? <div className="alert"> {message} </div> : null}
                    </div>
                    <button onClick={() => closeModal()}>Close</button>
                    <br></br>
                    <div className="imgArea">
                        <img className="sampleImg" style={{borderColor: "#2F8FED"}} src={newPost.imgSrc} onError={() => onError()} alt="sample post"></img>
                    </div>
                </div>
            </Modal>
        </section>
    );
}