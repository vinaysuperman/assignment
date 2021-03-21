// Shopping cart modal

import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import React, { useState } from 'react';
import {useSelector,useDispatch} from 'react-redux';
import Card from 'react-bootstrap/Card';
import { RemoveCart1 } from '../../Container/Store/Action/Action';
import style from './Modal.module.css';
import img from '../../assets/delete.png'

const Example = (props) => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const dispatch = useDispatch();
    const removeHandler=(data)=>{
        dispatch(RemoveCart1(data));
    }
    const state = useSelector(state => state.reducer1);
    const a=state.map((p,index)=>{
        return {s:p.DataR,
            i:index}
    })
    const b=a.map(p=>{ //cart body detail
        return ( 
            <Card key={p.i} onClick={()=>{removeHandler(p.i)}} style={{cursor:"pointer"}}>
                <Card.Body>
                    <p><span className={style.fontW}>Name of Product: </span>{p.s.name}</p>
                    <p><span  className={style.fontW}>Price of Product: </span>Rs. {p.s.price}</p>
                    <div className={style.modalImagediv}><Card.Img className={style.modalImage} 
                    variant="top" src={p.s.img} alt="image" /></div>
                    <p className={style.delete}><img src={img} alt="delete" /></p>
                </Card.Body>
            </Card>
        )
    });
    const c=a.map(p=>+p.s.price);
    let d=c.reduce((acc, cur)=> {  //addiing price
            return acc + cur;
        },0)
    return (
        <>

            <div onClick={handleShow} className={style.cartS}>
                <span style={{ zIndex: "10" }}>{props.length}</span>
                <img src="data:image/svg+xml;base64,PHN2ZyBoZWlnaHQ9Ij
              UxMnB0IiB2aWV3Qm94PSIwIC0zMSA1MTIuMDAwMjYgNTEyIiB3aWR0aD0iNTEycHQiIHhtbG5zPSJodHRwOi8vd
              3d3LnczLm9yZy8yMDAwL3N2ZyI+PHBhdGggZD0ibTE2NC45NjA5MzggMzAwLjAwMzkwNmguMDIzNDM3Yy4wMTk1MzEgMCAu
              MDM5MDYzLS4wMDM5MDYuMDU4NTk0LS4wMDM5MDZoMjcxLjk1NzAzMWM2LjY5NTMxMiAwIDEyLjU4MjAzMS00LjQ0MTQwNiAxN
              C40MjE4NzUtMTAuODc4OTA2bDYwLTIxMGMxLjI5Mjk2OS00LjUyNzM0NC4zODY3MTktOS4zOTQ1MzItMi40NDUzMTMtMTMuMTUyMzQ0LTIuODM1OTM3LTMuNzU3ODEyLTc
              uMjY5NTMxLTUuOTY4NzUtMTEuOTc2NTYyLTUuOTY4NzVoLTM2Ni42MzI4MTJsLTEwLjcyMjY1Ny00OC4yNTM5MDZjLTEuNTI3MzQzLTYuODYzMjgyLTcuNjEzMjgxLTExLjc0N
              jA5NC0xNC42NDQ1MzEtMTEuNzQ2MDk0aC05MGMtOC4yODUxNTYgMC0xNSA2LjcxNDg0NC0xNSAxNXM2LjcxNDg0NCAxNSAxNSAxNWg3Ny45Njg3NWMxLjg5ODQzOCA4LjU1MDc4MS
              A1MS4zMTI1IDIzMC45MTc5NjkgNTQuMTU2MjUgMjQzLjcxMDkzOC0xNS45NDE0MDYgNi45Mjk2ODctMjcuMTI1IDIyLjgyNDIxOC0yNy4xMjUgNDEuMjg5MDYyIDAgMjQuODEyNSAyM
              C4xODc1IDQ1IDQ1IDQ1aDI3MmM4LjI4NTE1NiAwIDE1LTYuNzE0ODQ0IDE1LTE1cy02LjcxNDg0NC0xNS0xNS0xNWgtMjcyYy04LjI2OTUzMSAwLTE1LTYuNzMwNDY5LTE1LTE1IDAtOC4
              yNTc4MTIgNi43MDcwMzEtMTQuOTc2NTYyIDE0Ljk2MDkzOC0xNC45OTYwOTR6bTMxMi4xNTIzNDMtMjEwLjAwMzkwNi01MS40Mjk2ODcgMTgwaC0yNDguNjUyMzQ0bC00MC0xODB6bTAgM
              CIvPjxwYXRoIGQ9Im0xNTAgNDA1YzAgMjQuODEyNSAyMC4xODc1IDQ1IDQ1IDQ1czQ1LTIwLjE4NzUgNDUtNDUtMjAuMTg3NS00NS00NS00NS00NSAyMC4xODc1LTQ1IDQ1em00NS0xNWM4L
              jI2OTUzMSAwIDE1IDYuNzMwNDY5IDE1IDE1cy02LjczMDQ2OSAxNS0xNSAxNS0xNS02LjczMDQ2OS0xNS0xNSA2LjczMDQ2OS0xNSAxNS0xNXptMCAwIi8+PHBhdGggZD0ibTM2MiA0MDVjMC
              AyNC44MTI1IDIwLjE4NzUgNDUgNDUgNDVzNDUtMjAuMTg3NSA0NS00NS0yMC4xODc1LTQ1LTQ1LTQ1LTQ1IDIwLjE4NzUtNDUgNDV6bTQ1LTE1YzguMjY5NTMxIDAgMTUgNi43MzA0NjkgMTUg
              MTVzLTYuNzMwNDY5IDE1LTE1IDE1LTE1LTYuNzMwNDY5LTE1LTE1IDYuNzMwNDY5LTE1IDE1LTE1em0wIDAiLz48L3N2Zz4="  alt="cart" style={{ width: "50%" }} />
            </div>

            <Modal show={show} onHide={handleClose} animation={false}>
                <div style={{overflow:"scroll",maxHeight:"600px"}}>
                <Modal.Header closeButton >
                    <Modal.Title>Shopping Cart</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                {b}
                </Modal.Body>
                <Modal.Footer>
                    <Button variant="secondary" onClick={handleClose}>
                        Close
            </Button>
                    <Button variant="primary">
                        Total Price: Rs. {d}
            </Button>
                </Modal.Footer>
                </div>
            </Modal>
        </>
    );
}

export default Example;