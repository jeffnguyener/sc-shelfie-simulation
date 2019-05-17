module.exports = {
    getAllproducts: (req, res) => {
        const db = req.app.get('db')
        db.get_products().then((products) => {
            console.log(products)
            res.status(200).send(products)
        })
        .catch(error => {
            if (error) throw error;
        });
    },

    addProduct: (req, res) => {
        const {name, price, img} = req.body
        const db = req.app.get('db')
        db.add_product({name, price, img}).then((product) => {res.status(200).send("product added")})
        .catch(error => {
            if (error) throw error;
        });
    },

    updateProduct: (req, res) => {
        const db = req.app.get('db')
        const { params, query } = req
        db.update_product(params.id, query.desc).then(() => {res.status(200).send("product updated")})
        .catch(error => {
            if (error) throw error;
        });
    },

    deleteProduct: (req, res) => {
        const db = req.app.get('db')
        const { id } = req.params
        db.delete_product(id).then((product) => {
            res.status(200).send("product deleted")
        })
        .catch(error => {
            if (error) throw error;
        });
    }
}