import React from "react";
import UserService from '../../services/UserService';
import { AuthContext } from '../../context/AuthContext';
import HeaderAccessed from '../../components2/headerAccessed';
import PostModal from '../../components2/postModal';
import "./newProfileStyle.css";

export default function Profile() {

    return (
        <div>
            <HeaderAccessed secured="t"/>
        </div>
    );
}