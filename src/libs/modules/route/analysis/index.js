const analysis = (router) => {
    const { app, mode, currentRoute } = router;
    console.log(`${app}, ${mode}, ${currentRoute}`);
};

export default analysis;