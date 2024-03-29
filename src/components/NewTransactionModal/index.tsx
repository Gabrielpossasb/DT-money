import Modal from "react-modal";
import { FormEvent, useState } from "react";
import { Container, RadioBox, TransactionTypeContainer } from "./styles";


import closeImg from "../../assets/fecharImg.svg"
import entradaImg from "../../assets/entradaImg.svg"
import saidaImg from "../../assets/saidaImg.svg"
import { useTransactions } from "../../hooks/useTransactions";



interface NewTransactionModalProps {
   isOpen: boolean;
   onRequestClose: () => void;
}



export function NewTransactionModal({ isOpen, onRequestClose }: NewTransactionModalProps) {
   const { createTransaction } = useTransactions();

   const [ title, setTitle ] = useState('');
   const [ amount, setAmount ] = useState(0);
   const [ category, setCategory ] = useState('');
   const [ type, setType ] = useState('deposit');

   async function handleCreateNewTransaction(event: FormEvent) {
      event.preventDefault();     
      
      await createTransaction({
         title,
         amount,
         category,
         type
      })


      setTitle('');
      setCategory('');
      setAmount(0);
      setType('deposit');
      onRequestClose();
      console.log('clicado');
   }

   return (
      <Modal
         isOpen={isOpen}
         onRequestClose={onRequestClose}
         overlayClassName="react-modal-overlay"
         className="react-modal-content"
      >
         <button
            type="button"
            onClick={onRequestClose}
            className="react-modal-close"
         >
            <img src={closeImg} alt="Fechar modal"/>
         </button>

         <Container>
            <h2>Cadastrar Transação</h2>

            <input
               placeholder="Título"
               value={title}
               onChange={event =>setTitle(event.target.value)}
            />

            <input 
               type="number"
               placeholder="Valor"
               value={amount}
               onChange={event =>setAmount(Number(event.target.value))}
            />

            <TransactionTypeContainer>
               <RadioBox
                  type="button"
                  onClick={() => { setType('deposit'); }}
                  isActive={type === 'deposit'}
                  activeColor="green"
               >
                  <img src={entradaImg} alt="Entrada"/>
                  <span>Entrada</span>
               </RadioBox>

               <RadioBox
                  type="button"
                  onClick={() => { setType('withdraw'); }}
                  isActive={type === 'withdraw'}
                  activeColor="red"
               >
                  <img src={saidaImg} alt="Saída"/>
                  <span>Saída</span>
               </RadioBox>
            </TransactionTypeContainer>

            <input 
               placeholder="Categoria"
               value={category}
               onChange={event =>setCategory(event.target.value)}
            />

            <button 
               type="submit"
               onClick={handleCreateNewTransaction}
            >
               Cadastrar
            </button>
        
         </Container>
      </Modal>
  );
}