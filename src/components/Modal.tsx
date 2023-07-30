import { Button, Modal } from 'flowbite-react';
import { Card } from './Cards';
import { Cinzel } from "next/font/google"

const cinzel = Cinzel({ subsets: ["latin"] })

export function DefaultModal({ card, openModal, closeModal }: any) {
  console.log({
    card, openModal, closeModal
  });

  return (
    <>
      {openModal === 'default' && (
        <Modal show={true} onClose={closeModal} className='z-50'>
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
            <div className="p-6 bg-black bg-opacity-50 rounded-lg max-w-lg overflow-y-auto">
              <Modal.Header></Modal.Header>
              <Modal.Body>
                <p className={`text-lg text-white text-center ${cinzel.className}`}>Click me pls.</p>
                <br></br>
                <div>
                  <Card card={card} />
                </div>
                <br></br>
                <p className={`text-lg text-white text-center ${cinzel.className} text-2xl text-bold`}>{card.name}</p>
              </Modal.Body>
              <Modal.Footer>
              </Modal.Footer>
            </div>
          </div>
        </Modal>
      )}
    </>
  )
}