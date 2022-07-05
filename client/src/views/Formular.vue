<template>
    <div class="formular">
        <h1>Kontaktieren Sie uns</h1>
        <form @submit="sendForm" class="Form">
            <div class="form-teil">
                <label for="name">Name</label>
                <input type="text" class="form-control" id="name" name="name" placeholder="Name eingeben" />
            </div>
            <div class="form-teil">
                <label for="email">Email</label>
                <input type="email" class="form-control" id="email" name="email" placeholder="Email eingeben" />
            </div>
          <div class="form-teil">
            <label for="bday">Sternzeichen</label>
            <input type="text" class="form-control" id="bday" name="bday" placeholder="Sternzeichen eingeben" />
          </div>
            <div class="form-teil">
                <label for="nachricht">Nachricht</label>
                <textarea class="form-control" id="nachricht" name="nachricht" rows="3" placeholder="Nachricht eingeben"></textarea>
            </div>
            <button type="submit" class="btn btn-primary">Submit</button>
        </form>
    </div>
</template>
<script>
import validate from '../utils/validate';
export default {
    methods: {
        sendForm(e) {
            e.preventDefault();

            const name = e.target.name.value;
            const email = e.target.email.value;
            const bday = e.target.bday.value;
            const nachricht = e.target.nachricht.value;

            const errorMessage = validate(name, email, nachricht, bday);

            if (errorMessage) {
                alert(errorMessage);
                return;
            }


            alert('Nachricht versendet!');

        },
    },
};
</script>
