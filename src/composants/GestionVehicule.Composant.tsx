import React, {useState } from 'react';
import '../App.css';

const Vehicule = () => {

    const [marque, setMarque] = useState("")
    const handleChangeMarque = (event: React.ChangeEvent<HTMLInputElement>) => {
        setMarque(event.target.value)
    }

    const [modele, setModele] = useState("")
    const handleChangeModele = (event: React.ChangeEvent<HTMLInputElement>) => {
        setModele(event.target.value)
    }

    return (
        <div className="divGestionLocataire">
            <form className="divFormulaire">
                <div className="divLocataires">
                    Gestion des Véhicules
                </div>
                <p>Ajout d'un nouveau Véhicule</p>
                <div className="divPrincipale">
                    <div className="divNouveauVehicule">
                        <a>
                            <p>Marque du Véhicule</p>
                        </a>
                        <input
                        id="marqueVehicule" 
                        name='marque'
                        type='text'
                        value={marque}
                        onChange={(event) =>handleChangeMarque(event)}
                        />

                        <a>
                            <p>Modèle du Véhicule</p>
                        </a>
                        <input
                        name='modele'
                        type='text'
                        value={modele}
                        onChange={(event) =>handleChangeModele(event)}
                        />

                            <p>Immatriculation du Véhicule</p>
                        
                            <p>Etat du Véhicule</p>
                            <p>Prix de location à la journée du Véhicule</p>

                    </div>
                    <div className="divBoutton">
                        <input type="submit" className="divBoutton"/>
                    </div>

                </div>
                <p>Liste des Locataire</p>
                <div className="divSecondaire">
                    
                    <a>
                    </a>
                    <div className="divBoutonVehicules">
                        <a href="#" className="boutonModifier">Modifier</a>
                        <a href="#" className="boutonSupprimer">Supprimer</a>
                    </div>
                </div>
            </form>
        </div >
    )
}

export default Vehicule;

