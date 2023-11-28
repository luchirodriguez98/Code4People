function error404 (req, res) {
    res.status(404).send({
        message: 'Ruta no encontrada'
    })
}

export { error404 };