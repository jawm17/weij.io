import React, { useEffect, useState, useContext } from 'react';
import Modal from 'react-awesome-modal';
import UpdateUserService from '../services/UpdateUserService';
import AuthService from '../services/AuthService';
import UserService from "../services/UserService";
import { AuthContext } from '../context/AuthContext';
import './SettingsModalStyle.css'

export default function SettingsModal(props) {
    const [visible, setVisible] = useState(false);
    const [bio, setBio] = useState("");
    const [color, setColor] = useState("");
    const [error, setError] = useState(true);
    const [message, setMessage] = useState(null);
    const [profileImg, setProfileImg] = useState();
    const [selected, setSelected] = useState(false);
    const { setIsAuthenticated, setUser } = useContext(AuthContext);
    const authContext = useContext(AuthContext);

    // color stuff (should be more semantic xD)
    const [violetSelected, setVioletSelected] = useState(false);
    const [indigoSelected, setIndigoSelected] = useState(false);
    const [blueSelected, setBlueSelected] = useState(false);
    const [greenSelected, setGreenSelected] = useState(false);
    const [yellowSelected, setYellowSelected] = useState(false);
    const [orangeSelected, setOrangeSelected] = useState(false);
    const [redSelected, setRedSelected] = useState(false);
    const [pinkSelected, setPinkSelected] = useState(false);

    useEffect(() => {
        getUserInfo();
    }, []);

    const openModal = () => {
        setVisible(true);
    }

    const closeModal = () => {
        setVisible(false);
    }

    const getUserInfo = () => {
        UserService.getUserInfo().then(data => {
            const { message } = data;
            if (!message) {
                setBio(data.bio);
                switch (data.color) {
                    case "color-violet":
                        setVioletSelected(true);
                        break;
                    case "color-indigo":
                        setIndigoSelected(true);
                        break;
                    case "color-blue":
                        setBlueSelected(true);
                        break;
                    case "color-green":
                        setGreenSelected(true);
                        break;
                    case "color-yellow":
                        setYellowSelected(true);
                        break;
                    case "color-orange":
                        setOrangeSelected(true);
                        break;
                    case "color-red":
                        setRedSelected(true);
                        break;
                    case "color-pink":
                        setPinkSelected(true);
                        break;
                }
                setColor(data.color);
                setProfileImg(data.profileImgSrc);
            }
        });
    }

    const onError = () => {
        setError(true);
        setProfileImg("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
    }

    const onChangeImg = (e) => {
        if (e.target.name === "imgSrc" && !e.target.value) {
            setProfileImg("https://northcliftonestates.ca/wp-content/uploads/2019/06/placeholder-images-image_large.png");
        }
        else {
            setProfileImg(e.target.value);
            setError(false);
            setMessage("");
        }
    }

    const onChangeBio = (e) => {
        setBio(e.target.value);
    }

    const saveSettings = (e) => {
        UpdateUserService.updateBio(bio).then(data => {
            const { message } = data;
            if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
        UpdateUserService.updateColor(color).then(data => {
            const { message } = data;
            if (message.msgBody === "Unauthorized") {
                authContext.setUser({ username: "" });
                authContext.setIsAuthenticated(false);
            }
        });
        if (!error) {
            UpdateUserService.updateProfileImg(profileImg).then(data => {
                const { message } = data;
                if (message.msgBody === "Unauthorized") {
                    authContext.setUser({ username: "" });
                    authContext.setIsAuthenticated(false);
                }
            });
        }
        props.refresh();
        closeModal();
    }

    const changeColor = (e) => {
        setVioletSelected(false);
        setIndigoSelected(false);
        setBlueSelected(false);
        setGreenSelected(false);
        setYellowSelected(false);
        setOrangeSelected(false);
        setRedSelected(false);
        setPinkSelected(false);
        switch (e.target.name) {
            case "color-violet":
                setVioletSelected(true);
                break;
            case "color-indigo":
                setIndigoSelected(true);
                break;
            case "color-blue":
                setBlueSelected(true);
                break;
            case "color-green":
                setGreenSelected(true);
                break;
            case "color-yellow":
                setYellowSelected(true);
                break;
            case "color-orange":
                setOrangeSelected(true);
                break;
            case "color-red":
                setRedSelected(true);
                break;
            case "color-pink":
                setPinkSelected(true);
                break;
        }
        setColor(e.target.name);
    }

        const onClickLogoutHandler = () => {
        AuthService.logout().then(data => {
            if (data.success) {
                setUser(data.user);
                setIsAuthenticated(false);
            }
        });
    }

    return (
        <section>
            <button onClick={() => openModal()}> Settings </button>
            <Modal
                visible={visible}
                width="540"
                height="600"
                effect="fadeInDown"
            >
                <div className="settingsArea">
                    <div className="settingsAreaLeft">
                        <h1>Settings</h1>
                        <form onSubmit={saveSettings}>
                            <h3 className="bioLabel">Bio</h3>
                            <textarea
                                name="message"
                                rows="5" cols="60"
                                onChange={onChangeBio}
                                value={bio}
                            />
                        </form>
                        <h3 className="colorLabel">Color</h3>
                        <div className="colorRow">
                            <button className={`color-violet colorBtn ${violetSelected ? "selected" : " "}`} name="color-violet" onClick={changeColor}></button>
                            <button className={`color-indigo colorBtn ${indigoSelected ? "selected" : " "}`} name="color-indigo" onClick={changeColor}></button>
                            <button className={`color-blue colorBtn ${blueSelected ? "selected" : " "}`} name="color-blue" onClick={changeColor}></button>
                            <button className={`color-green colorBtn ${greenSelected ? "selected" : " "}`} name="color-green" onClick={changeColor}></button>
                            <button className={`color-yellow colorBtn ${yellowSelected ? "selected" : " "}`} name="color-yellow" onClick={changeColor}></button>
                            <button className={`color-orange colorBtn ${orangeSelected ? "selected" : " "}`} name="color-orange" onClick={changeColor}></button>
                            <button className={`color-red colorBtn ${redSelected ? "selected" : " "}`} name="color-red" onClick={changeColor}></button>
                            <button className={`color-pink colorBtn ${pinkSelected ? "selected" : " "}`} name="color-pink" onClick={changeColor}></button>
                        </div>
                    </div>
                    <div className="settingsImgArea">
                        <img className="profileImgPreview" src={profileImg} onError={() => onError()} alt="Profile Pic Preview"></img>
                        <br></br>
                        <input
                            className="settingsImgUrlInput"
                            name="imgSrc"
                            id="imgSrc"
                            placeholder="Image URL"
                            onChange={onChangeImg}
                        />
                        <br></br>
                        <br></br>
                        <br></br>
                        <button onClick={() => saveSettings()}>Save Settings</button>
                        <button onClick={() => onClickLogoutHandler()}>Logout</button>
                    </div>
                </div>
            </Modal>
        </section>
    );
}