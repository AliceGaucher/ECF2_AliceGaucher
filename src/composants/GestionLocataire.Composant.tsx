import React, { useEffect, useState } from 'react';
import '../App.css';

const Locataire = () => {

    //Récupértion de l'input du nom
    const [nom, setNom] = useState("")
    const handleChangeNom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNom(event.target.value)
    }

    //Récupértion de l'input du prenom
    const [prenom, setPrenom] = useState("")
    const handleChangePrenom = (event: React.ChangeEvent<HTMLInputElement>) => {
        setPrenom(event.target.value)
    }

    //Récupértion de l'input du naissance
    const [naissance, setNaissance] = useState("")
    const handleChangeNaissance = (event: React.ChangeEvent<HTMLInputElement>) => {
        setNaissance(event.target.value)
    }

    //Récupértion de l'input du telephone
    const [telephone, setTelephone] = useState("")
    const handleChangeTelephone = (event: React.ChangeEvent<HTMLInputElement>) => {
        setTelephone(event.target.value)
    }

    //Récupértion de l'input du email
    const [email, setEmail] = useState("")
    const handleChangeEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
        setEmail(event.target.value)
    }
    return (
        <div className="divGestionLocataire">
            {/* Formulaire de création d'un nouveau Locataire */}
            <form className="divFormulaire">
                <div className="divLocataires">
                    Gestion des Locataires
                </div>
                <p>Ajout d'un nouveau Locataire</p>
                <div className="divPrincipale">
                    <div className="divNouveauLocataire">
                        <a>
                            <p>Nom du Locataire</p>
                        </a>
                        <input
                        id="nomLocataire" 
                        name='nom'
                        type='text'
                        value={nom}
                        onChange={(event) =>handleChangeNom(event)}
                        />

                        <a>
                            <p>Prénom du Locataire</p>
                        </a>
                        <input
                        name='prenom'
                        type='text'
                        value={prenom}
                        onChange={(event) =>handleChangePrenom(event)}
                        />

                        <a>
                            <p>Date de naissance du Locataire</p>
                        </a>
                        <input
                        name='naissance'
                        type='text'
                        value={naissance}
                        onChange={(event) =>handleChangeNaissance(event)}
                        />
                        
                        <a>
                            <p>Email du Locataire</p>
                        </a>
                        <input
                        name='email'
                        type='email'
                        value={email}
                        onChange={(event) =>handleChangeEmail(event)}
                        />

                        <a>
                            <p>Numéro de téléphone du Locataire</p>
                        </a>
                        <input
                        name='telephone'
                        type='number'
                        value={telephone}
                        onChange={(event) =>handleChangeTelephone(event)}
                        />

                    </div>
                    <div className="divBoutton">
                        <input type="submit" className="divBoutton"/>
                    </div>

                </div>
                {/* Liste des Locataire existant et des nouveaux ajouter */}
                <p>Liste des Locataire</p>
                <div className="divSecondaire">
                    <div className="divListeLocataires">
                        {/* Confirmation des données récupérées */}
                        <p>Premier Colocataire : Nom: {nom}, Prenom: {prenom}, Date de Naissance: {naissance}, Email: {email}, Téléphone: {telephone} </p>
                    </div>
                    <a>
                    </a>
                    <div className="divBoutonLocataires">
                        <a href="#" className="boutonModifier">Modifier</a>
                        <a href="#" className="boutonSupprimer">Supprimer</a>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Locataire;

