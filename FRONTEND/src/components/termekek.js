import react, {useState, useEffect} from 'react';
import data from '../services/TermekekService';

export default function Termekek(){
    return(
        <>
        <thead>
            <tr>
                <th>id</th>
                <th>Termék Neve</th>
                <th>Kategória neve</th>
                <th>Mennyiség</th>
                <th>Mértékegység</th>
                <th>Termék Ár</th>
            </tr>
            {
                data.map((termekek)=>(
                    <tr>
                        <td>{termekek.termek_id}</td>
                        <td>{termekek.termek_nev}</td>
                        <td>{termekek.kateg_id}</td>
                        <td>{termekek.mennyiség}</td>
                        <td>{termekek.mertek_id}</td>
                        <td>{termekek.termak_ar}</td>
                    </tr>
                ))
            }
        </thead>
        </>
    )
}