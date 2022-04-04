// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

export default function handler(req, res) {
  res
    .status(200)
    .json({ firstName: "John", lastName: "Doe", num: ~~(Math.random() * 10) });
}
