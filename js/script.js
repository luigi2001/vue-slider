
const app = new Vue(
    {
        el: '#app',
        data:{
            contatore: 0,
            foto: [
                'https://i.pinimg.com/originals/29/de/14/29de14bab319fa5fe9c62241003e14d2.png',
                'https://stody0yci3-flywheel.netdna-ssl.com/wp-content/uploads/edd/2019/06/euro-07-02.jpg',
                'https://i.pinimg.com/originals/f0/b9/8c/f0b98cb2fd9e466687acaf516b3fb19e.png',
                'https://stody0yci3-flywheel.netdna-ssl.com/wp-content/uploads/edd/2019/06/euro-08-02.jpg',
                'https://i.pinimg.com/originals/bd/4c/5f/bd4c5fac71936ed02f275b2fe5fb465d.png',
                'https://stody0yci3-flywheel.netdna-ssl.com/wp-content/uploads/edd/2019/06/euro-06-02.jpg',
                'https://i.pinimg.com/originals/10/b1/8f/10b18fd66cb038879fd92c3a0c03e638.png',
                'https://stody0yci3-flywheel.netdna-ssl.com/wp-content/uploads/edd/2019/06/euro-09-02.jpg',
            ]
        },
        methods:{
            avanti(){
                this.contatore == this.foto.length - 1 ? this.contatore = 0 : this.contatore++;
            },
            indietro(){
                this.contatore == 0 ? this.contatore.length : this.contatore--;
            },
            fotoaclick(index){
                this.contatore = index;
            }
        }
    }

);
