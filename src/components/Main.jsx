import React from "react";
import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  Button,
} from "@chakra-ui/react";

export default function Main() {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const labelStyle = "font-normal text-lg text-black";
  const inputStyle =
    "w-full resize-none font-normal text-base text-black rounded py-2.5 px-4 bg-gray-300 border-none placeholder:text-black placeholder:text-opacity-60 focus:outline-none";

  return (
    <>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Form Submition Fee</ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <img className="w-40 mx-auto" src="https://cdn.ttgtmedia.com/rms/misc/qr_code_barcode.jpg" alt="" />
            <div className="flex flex-col gap-2">
              <span><b>Address</b> : qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88</span>
              <span><b>Fee</b> : 0.00001 BCH</span>
              <span><b>Transaction Fee</b>: 0.0000001 BCH</span>
            </div>
            <div>
              <label className={labelStyle} htmlFor="Description">
                TRX ID
              </label>
              <textarea
                name="Description"
                id="Description"
                className={inputStyle}
              ></textarea>
            </div>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme="blue" mr={3} onClick={onClose}>
              Close
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>

      <div className="w-4/5 mx-auto my-14">
        <h1 className="text-3xl font-semibold">Submit Form</h1>
        <div className="grid grid-cols-12 w-full gap-4">
          <form className="col-span-9" action="">
            <div className="flex flex-col gap-2 my-5">
              <label className={labelStyle} htmlFor="keyword">
                Kywords
              </label>
              <input
                className={inputStyle}
                type="text"
                name="keyword"
                id="keyword"
                placeholder="BCH , BCH wallet"
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label className={labelStyle} htmlFor="name">
                Name
              </label>
              <input
                className={inputStyle}
                type="text"
                name="name"
                id="name"
                placeholder="Rabiya Nisar"
              />
            </div>
            <div className="hidden flex-col gap-2 my-5">
              <label className={labelStyle} htmlFor="Rank">
                Rank Address
              </label>
              <input
                className={inputStyle}
                type="text"
                name="rank"
                id="rank"
                placeholder="qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88"
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label className={labelStyle} htmlFor="cash">
                Cash Address
              </label>
              <input
                className={inputStyle}
                type="text"
                name="cash"
                id="cash"
                placeholder="qqeht8vnwag20yv8dvtcrd4ujx09fwxwsqqqw93w88"
              />
            </div>
            <div className="flex flex-col gap-2 my-5">
              <label className={labelStyle} htmlFor="link">
                Link
              </label>
              <input
                className={inputStyle}
                type="text"
                name="link"
                id="link"
                placeholder="https://bitcoincashaddress.com"
              />
            </div>

            <div>
              <label className={labelStyle} htmlFor="Description">
                Description
              </label>
              <textarea
                rows={5}
                name="Description"
                id="Description"
                className={inputStyle}
              ></textarea>
            </div>
            <div>
              <Button onClick={onOpen}>Submit</Button>

            </div>
          </form>
          <div className="col-span-3">
            <h2 className="text-lg font-semibold">Advertisers</h2>
            <div id="container-34a95c866aba4784009e8bedde18eee0"></div>
          </div>
        </div>
      </div>
    </>
  );
}
