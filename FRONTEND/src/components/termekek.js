import React, {useState, useEffect} from 'react';
import TermekekService from '../services/TermekekService';

export default function Termekek(){
    const[data, setData]=useState([]);

    function frissit(){
        TermekekService.getAll()
        .then(response=>{
            setData(response.data);
        })
        .catch(error=>console.log(error));

    }
    useEffect(()=>{
        frissit();
    },[]);
    return(
        <>
        <table>
            <tr>
                <th>id</th>
                <th>Termék Neve</th>
                <th>Kategória neve</th>
                <th>Mennyiség</th>
                <th>Mértékegység</th>
                <th>Termék Ár</th>
            </tr>
            {
                data.map(termekek=>(
                    <tr>
                        <td>{termekek.termek_id}</td>
                        <td>{termekek.termek_nev}</td>
                        <td>{termekek.kateg_nev}</td>
                        <td>{termekek.mennyiség}</td>
                        <td>{termekek.mertek_nev}</td>
                        <td>{termekek.termek_ar}</td>
                    </tr>
                ))
            }
        </table>
        </>
    );
}