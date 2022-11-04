const {createApp} = Vue;

createApp({
    data() {
        return {
            logoImg: `img/logo.png`,
            tasks: [
                {
                text: 'Prendere la mappa di Artù',
                do: 'false'      
            },
                {
                text: 'Studiare Vue',
                do: 'true'       
            },
                {
                text: 'Fare il bucato',
                do: 'false'     
            },
        ]
        }
    },

    methods:{
        // creo (nome) funzione e mi riprendo l'indice per andarlo a controllare
        toogleDone (index) {
            if (this.tasks[index].do){
                // specificare da dove partire tipo
                this.tasks.splice(index, 1);
            }
        }
    }

}).mount('#app');