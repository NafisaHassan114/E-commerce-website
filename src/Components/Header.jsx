import { useState } from "react"
function Header(){

    const [isOpen, setIsOpen] = useState(false)

    const HandleOpen = ()=>{
        setIsOpen(true)
    }

    const HandleClose = ()=>{
        setIsOpen(false)
    }
    return <div className="bg-[#AF2655] flex justify-between p-6">
        <h1 style={{position: isOpen == true ? "fixed" : ""}} className="text-white sm:text-3xl text-2xl font-bold">E-commerce</h1>
        <i onClick={HandleOpen} style={{display: isOpen == true ? "none" : ""}} class="fa-solid fa-bars text-white text-2xl sm:hidden absolute right-5"></i>
        <i onClick={HandleClose} style={{display: isOpen == true ? "block" : "none"}} class="fa-solid fa-xmark text-white text-2xl absolute right-5 hidden"></i>
        <ul style={{display: isOpen == true ? "block" : ""}} className="sm:flex sm:flex-row sm:mt-0 mt-10 gap-7 flex-col ml-[200px] sm:ml-0 hidden  text-white text-2xl">
            <li>Home</li>
            <li>About</li>
            <li>Services</li>
            <li>Contact us</li>
        </ul>
        <ul className="text-white text-2xl">
            <li><i class="fa-solid fa-cart-shopping mr-20"></i></li>
        </ul>
    </div>
}

export default Header