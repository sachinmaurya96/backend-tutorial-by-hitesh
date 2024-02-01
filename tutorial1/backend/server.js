import express from "express";

const app = express();
// app.get("/", (req, res) => {
//   res.send("server is ready");
// });

//get a list of 5 jokes
app.get("/api/quote",(req,res)=>{
    const qutoes = [
        {
          id: 1,
          quote:
            "Your heart is the size of an ocean. Go find yourself in its hidden depths.",
          author: "Rumi",
        },
        {
          id: 2,
          quote:
            "The Bay of Bengal is hit frequently by cyclones. The months of November and May, in particular, are dangerous in this regard.",
          author: "Abdul Kalam",
        },
        {
          id: 3,
          quote:
            "Thinking is the capital, Enterprise is the way, Hard Work is the solution.",
          author: "Abdul Kalam",
        },
        {
          id: 4,
          quote: "If You Can'T Make It Good, At Least Make It Look Good.",
          author: "Bill Gates",
        },
        {
          id: 5,
          quote:
            "Heart be brave. If you cannot be brave, just go. Love's glory is not a small thing.",
          author: "Rumi",
        },
      ];
      res.send(qutoes)
})



const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`aerver at http://localhost:${port}`);
});
