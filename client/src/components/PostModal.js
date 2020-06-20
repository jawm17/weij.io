import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-awesome-modal';
import PostPhotoService from '../services/PostPhotoService';
import { AuthContext } from '../context/AuthContext';
import './PostModalStyle.css'

export default function PostModal(props) {
    const [newPostSrc, setNewPostSrc] = useState("");
    const [newPostPrice, setNewPostPrice] = useState("");
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
        if (e.target.name === "imgSrc") {
            setNewPostSrc(e.target.value);
            setError(false);
            setMessage("");
        } else if (e.target.name === "price" && !isNaN(e.target.value)){
            console.log(e.target.value)
            setNewPostPrice(e.target.value)
        }
    }

    const postPhoto = (e) => {
        e.preventDefault();
        if (!error) {
            PostPhotoService.postPhoto({ "imgSrc": newPostSrc, "user": props.username, "userImg": props.userImg, "color": props.color, "price": newPostPrice}).then(data => {
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
        setNewPostSrc("");
        setNewPostPrice("");
    }

    const onError = () => {
        setError(true);
    }

    return (
        <section>
            <button onClick={() => openModal()}> Post Photo </button>
            <Modal
                visible={visible}
                width="520"
                height="500"
                effect="fadeInDown"
            >
                <div className="postModal">
                    <div className="inputArea">
                        <h1>Post an Image</h1>
                            <h4 className="label">Image URL: </h4>
                            <input
                                className="imgUrlInput"
                                name="imgSrc"
                                id="imgSrc"
                                onChange={onChange}
                                value={newPostSrc}
                            />
                            <br></br>
                            <h4 className="label">Price (optional): </h4>
                            <input
                                className="priceInput"
                                name="price"
                                id="price"
                                onChange={onChange}
                                value={newPostPrice}
                            />
                            <br></br>
                            <button onClick={postPhoto}
                                type="submit"
                                className="submitBtn"
                            >
                                Post Photo
                            </button>
                            <button onClick={() => closeModal()}>Cancel</button>
                        {message ? <div className="alert"> {message} </div> : null}
                    </div>
                    <br></br>
                    <div className="imgArea">
                        <img className="sampleImg" style={{borderColor: "#2F8FED"}} src={error ? "https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png" : newPostSrc} onError={() => onError()} alt="sample post"></img>
                    </div>
                </div>
            </Modal>
        </section>
    );
}