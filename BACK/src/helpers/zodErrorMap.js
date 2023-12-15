function zodErrorMap (zodError) {
    const objetoErrores = {};
    zodError.issues.forEach((issue) => {
        objetoErrores[issue.path[0]] = issue.message
    });
    return objetoErrores;
}

export { zodErrorMap };