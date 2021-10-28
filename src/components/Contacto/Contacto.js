import { Box, CloseButton, Modal, ModalFooter, useDisclosure } from "@chakra-ui/react";
import { Formik } from "formik";
import {
    InputControl,
    SubmitButton,
    TextareaControl
} from "formik-chakra-ui";

import * as React from "react";
import { Link } from "react-router-dom";
import * as Yup from "yup";

const sleep = (ms) => new Promise((resolve) => setTimeout(resolve, ms));

const onSubmit = (values) => {
    sleep(300).then(() => {
        window.alert(JSON.stringify(values, null, 2));
    });
};

const initialValues = {
    name: "",


    notes: "",

};
const validationSchema = Yup.object({
    name: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),
    lastName: Yup.string()
        .min(2, 'Demasiado Corto')
        .max(50, 'Demasiado Largo!')
        .required('Requerido'),
    email: Yup.string().email('Mail Invalido').required('Requerido'),

});

const Contacto = () => {
    const { onOpen, onClose } = useDisclosure()
    return (
        <Modal isOpen={onOpen} onClose={onClose}>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={validationSchema}
            >
                {({ handleSubmit, values, errors }) => (
                    <Box
                        borderWidth="1px"
                        rounded="lg"
                        shadow="1px 1px 3px rgba(0,0,0,0.3)"
                        maxWidth={800}
                        p={6}
                        m="10px auto"
                        as="form"
                        onSubmit={handleSubmit}
                    >
                        <InputControl marginY={3} name="name" label="Nombre" />
                        <InputControl marginY={3} name="email" label="Email" />
                        <TextareaControl marginY={3} name="notes" label="Mensaje" />
                        <ModalFooter>
                            <SubmitButton marginY={8}>Enviar</SubmitButton>
                            <Link ml={8} href="https://www.gabiten.ga" isExternal>
                                <CloseButton size="sm" />
                            </Link>
                        </ModalFooter>

                    </Box>
                )}
            </Formik>

        </Modal>
    );
};

export default Contacto;
