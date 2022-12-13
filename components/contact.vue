<template>
    <div id="contactSection">
        <section style="margin-top:15vh; margin-bottom: 1vh; text-align: center;" data-aos="fade-in" class="subtitulo"
			id="contact">
			Contactame!
		</section>
        <form accept-charset="UTF-8" v-on:submit.prevent="onSubmit()" method="POST">
            <div class="columns">
                <div class="column">
                    <div class="contact contact--up">
                        <div class="cuadrado">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Correo</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <input type="email" v-model="email" class="form-control input" placeholder="Correo" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div class="contact contact--down">
                        <div class="cuadrado" style="margin-bottom:0;">
                            <div class="field is-horizontal">
                                <div class="field-label is-normal">
                                    <label class="label">Nombre</label>
                                </div>
                                <div class="field-body">
                                    <div class="field is-narrow">
                                        <div class="control">
                                            <input type="text" v-model="name" class="form-control input" placeholder="Nombre" required>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="column is-full-mobile">
                    <div class="cuadrado" style="height: 100%;">
                        <div class="field" style="width:100%; height:100%;">
                            <div class="field-label is-normal">
                                <label class="label has-text-centered">Mensaje</label>
                            </div>
                            <div class="field-body">
                                <div class="field">
                                    <div class="control">
                                        <textarea type="text" v-model="message" class="form-control textarea" placeholder="Mensaje" required></textarea>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <hr>
            <div class="success" v-if="isSuccess">We received your submission, thank you!</div>
            <button type="submit">Submit</button>
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
