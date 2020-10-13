var app = new Vue({
    el: "#app",
    data: {
        image: 'assets/img/lillydoo-testpaket-10.jpg',
        variants: [
            {
                variantId: 1,
                variantSize: '(2-5KG)',
                variantImage: "assets/img/lillydoo-testpaket-10.jpg"
            },
            {
                variantId: 2,
                variantSize: '(4-8KG)',
                variantImage: "assets/img/lillydoo-testpaket-20.jpg"
            },
            {
                variantId: 3,
                variantSize: '(6-10KG)',
                variantImage: "assets/img/lillydoo-testpaket-30.jpg"
            },
            {
                variantId: 4,
                variantSize: '(9-14KG)',
                variantImage: "assets/img/lillydoo-testpaket-40.jpg"
            },
            {
                variantId: 5,
                variantSize: '(11-16KG)',
                variantImage: "assets/img/lillydoo-testpaket-50.jpg"
            }
        ]
    },
    methods: {
        updateImage(variantImage) {
            this.image = variantImage
        }
    }
});