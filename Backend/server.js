import app from "./app.js";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Server listening at port ${port}`);
});
