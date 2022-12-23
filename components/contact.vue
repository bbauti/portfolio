<template>
    <div id="contactSection">
        <section
            style="margin-top:15vh; margin-bottom: 5vh; text-align: center;"
            data-aos="fade-in"
            class="subtitulo"
			id="contact">
			Contactame!
		</section>
        <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
            <div class="columns">
                <div class="column">
                    <section data-aos="zoom-in">
                        <div class="contact contact--up">
                            <div class="cuadrado">
                                <div class="field is-horizontal">
                                    <div class="field-body">
                                        <div class="field is-narrow">
                                            <div class="control">
                                                <input type="email" v-model="email" class="form-control" placeholder="Correo" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
			        </section>
                    <section data-aos="zoom-in" data-aos-delay="100">
                        <div class="contact contact--down">
                            <div class="cuadrado" style="margin-bottom:0;">
                                <div class="field is-horizontal">
                                    <div class="field-body">
                                        <div class="field is-narrow">
                                            <div class="control">
                                                <input type="text" v-model="name" class="form-control" placeholder="Nombre" required>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
			        </section>
                </div>
                <div class="column is-full-mobile">
                    <section data-aos="zoom-in" data-aos-delay="300" style="height:100%">
                        <div class="cuadrado" style="height: 100%;">
                        <div class="field">
                            <div class="field-body" style="height:100%;">
                                <div class="field">
                                    <div class="control" style="height:100%;">
                                        <textarea type="text" v-model="message" class="form-control" placeholder="Mensaje" required style="height:100%;" cols="24" rows="4" wrap="soft"></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
			        </section>
                </div>
            </div>
            <div class="columns">
                <div class="column">
                    <section data-aos="zoom-in" data-aos-delay="300"  data-aos-offset="-50">
                        <div class="contact" style="height: 100%;">
                            <div :class="{'enviar--submit': isSuccess, 'enviar': !isSuccess }">
                                <div class="success" v-if="isSuccess">Recibi tu consulta, gracias!</div>
                                <button type="submit" class="boton--enviar" v-if="!isSuccess">Enviar</button>
                            </div>
                        </div>
			        </section>
                </div>
            </div>
        </form>
    </div>
</template>

<script>
import axios from "axios";

export default {
    name: "Contact",
    props: {
        msg: String
    },
    data() {
        return {
            loading: true,
            name: "",
            email: "",
            message: "",
            isSuccess: false
        };
    },
    methods: {
        onSubmit() {
            let data = {
                name: this.name,
                email: this.email,
                message: this.message
            };
            axios
                .post("https://getform.io/f/445b5abf-53e1-4046-a7f9-49d4aadf0182", data, {
                    headers: {
                        Accept: "application/json"
                    }
                })
                .then(
                    response => {
                        this.isSuccess = response.data.success ? true : false;
                    },
                    response => {
                        // Error
                    }
                );
        }
    }
};
</script>
