function zodErrorMap (zodError) {
    return zodError.issues.map((issue) => {
        return { [issue.path[0]]: issue.massage }
    });
}

export { zodErrorMap };