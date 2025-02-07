

const Navbar = () => {
  return (
    <div className="flex justify-between items-center text-black">
        <div className="">
            <h1 className="font-medium text-3xl">CryptoLogo</h1>
        </div>

        <div>
            <ul className="flex gap-4 items-center">
                <li>Home</li>
                <li>Features</li>
                <li>Pricing</li>
                <li>Blog</li>
            </ul>
        </div>

        <div>
            <select>
                <option value="usd">USD</option>
                <option value="eur">EUR</option>
                <option value="bdt">BDT</option>
            </select>
        </div>
    </div>
  )
}

export default Navbar