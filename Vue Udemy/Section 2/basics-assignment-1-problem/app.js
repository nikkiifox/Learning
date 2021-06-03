const app = Vue.createApp({
    data() {
        return {
            name: 'Nikkii',
            age: 32,
            imageURL: 'https://www.officialsavings.com/wp-content/uploads/2020/05/ibotta.png'
        };
    },
    methods: {
        calculateAge() {
            return this.age + 5;
        },

        favoriteNumberGen() {
            const favoriteNumber = Math.random();
            return favoriteNumber;
        },

        image() {
            return '<img src="https://d2enyzngr1a9pt.cloudfront.net/images/img_fb-share-ibotta-logo-07d37882c31bae716c1552344ac80282.png" style="width:47%">';
        }
    }
});

app.mount('#assignment');