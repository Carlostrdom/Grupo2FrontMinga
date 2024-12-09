import React, { useState } from "react";
import bgProfiles from "../../assets/image/bgProfiles.jpg";
import Switch from "react-switch";

const Author = () => {
    const [isNew, setIsNew] = useState(true);
    const [isOn, setIsOn] = useState(false);

    const toggleSwitch = () => {
        setIsOn(!isOn);
    };

    const goBack = () => {
        window.history.back();
    };

    return (
        <div className="min-h-screen p-4 flex flex-col items-center justify-center pt-20 transition-colors duration-300 bg-gray-100">

            {/* Sección del perfil con fondo */}
            <div className="relative w-full flex flex-col items-center justify-center mb-12 lg:w-2/3 lg:max-w-4xl rounded-lg shadow-lg  ">
                <div className="absolute inset-0 hidden md:block">
                    <img
                        src={bgProfiles}
                        alt="Background"
                        className="w-full h-full object-cover rounded-lg md:h-72 lg:h-96 "
                    />
                </div>
                <div className="relative flex flex-row items-center w-full px-4 py-8 text-left md:flex-col md:items-center md:justify-center md:py-12">
                    {/* Imagen del autor */}
                    <img
                        src="https://s3-alpha-sig.figma.com/img/d771/e8ee/4d516f000e29670bda6ceb5a6c836183?Expires=1734307200&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=TRB8FmOriCJyxjVdIa1fvNIW~oh~crxMLW~D0wz770m4mD7Q4v~l5XBiYu8GgPHk4623IdKHAZLSS4DN~WWQzOvQf6WrhpDp06uhV0g3HBt84-57IHvdICd56bXPBKrKNTnsE9SxYudT7ybVJiUyWyeeeW17CmWl3k56DKQ-puV4swXxB84Z~QTwQOXK3yqRA-yVFKM8cR26DnGSG5ag0CmLfZKxAl19TohkmKHd3ji8qyiJSTSwqTjdmN3BBc6dJpWUOJt3lO64JmNhfbSUqUvQA2a2bKuKkYG1syPEO~~fiGiZoe18JbFuzrhqNzNhzIlIJw223GC2nJONMnB2bA__"
                        alt="Author Avatar"
                        className="w-28 h-28 rounded-full object-cover border-4 border-white md:w-36 md:h-36 lg:w-44 lg:h-44"
                    />
                    {/* Texto del autor */}
                    <div className="flex-1 mt-4 md:mt-0 md:ml-6">
                        <h1 className="text-lg font-bold text-white  md:text-2xl lg:text-3xl">Lucas Ezequiel Silva</h1>
                        <p className="text-sm text-white flex items-center mt-2 md:text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-2 text-white md:w-6 md:h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M15 10.5a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                                />
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1 1 15 0Z"
                                />
                            </svg>
                            Caseros, Buenos Aires
                        </p>
                        <p className="text-sm text-white flex items-center mt-2 md:text-base">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                fill="none"
                                viewBox="0 0 24 24"
                                strokeWidth="1.5"
                                stroke="currentColor"
                                className="w-5 h-5 mr-2 text-white  md:w-6 md:h-6"
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8.25v-1.5m0 1.5c-1.355 0-2.697.056-4.024.166C6.845 8.51 6 9.473 6 10.608v2.513m6-4.871c1.355 0 2.697.056 4.024.166C17.155 8.51 18 9.473 18 10.608v2.513M15 8.25v-1.5m-6 1.5v-1.5m12 9.75-1.5.75a3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0 3.354 3.354 0 0 0-3 0 3.354 3.354 0 0 1-3 0L3 16.5m15-3.379a48.474 48.474 0 0 0-6-.371c-2.032 0-4.034.126-6 .371m12 0c.39.049.777.102 1.163.16 1.07.16 1.837 1.094 1.837 2.175v5.169c0 .621-.504 1.125-1.125 1.125H4.125A1.125 1.125 0 0 1 3 20.625v-5.17c0-1.08.768-2.014 1.837-2.174A47.78 47.78 0 0 1 6 13.12M12.265 3.11a.375.375 0 1 1-.53 0L12 2.845l.265.265Zm-3 0a.375.375 0 1 1-.53 0L9 2.845l.265.265Zm6 0a.375.375 0 1 1-.53 0L15 2.845l.265.265Z"
                                />
                            </svg>
                            16/02/2000
                        </p>
                    </div>
                    {/* Botón de editar */}
                    <button className="absolute top-4 right-4 md:static p-2 bg-gray-200 hover:bg-gray-300 text-black rounded-lg shadow">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                            strokeWidth="1.5"
                            stroke="currentColor"
                            className="w-6 h-6"
                        >
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="m16.862 4.487 1.687-1.688a1.875 1.875 0 1 1 2.652 2.652L10.582 16.07a4.5 4.5 0 0 1-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 0 1 1.13-1.897l8.932-8.931Zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0 1 15.75 21H5.25A2.25 2.25 0 0 1 3 18.75V8.25A2.25 2.25 0 0 1 5.25 6H10"
                            />
                        </svg>
                    </button>
                </div>
            </div>

            {/* Línea separadora */}
            <div className="w-full border-t border-gray-300 mb-6 lg:w-2/3"></div>

            {/* Toggle personalizado */}
            <div className="flex items-center my-4">
                <p className="text-sm font-medium mr-2">New</p>
                <Switch
                    checked={isNew}
                    onChange={toggleSwitch}
                    onColor="#FF6B2B"
                    offColor="#ccc"
                    checkedIcon={false}
                    uncheckedIcon={false}
                    height={24}
                    width={48}
                />
                <p className="text-sm font-medium ml-2">Old</p>
            </div>

            {/* Cards de mangas */}
            <div className="grid grid-cols-2 gap-4 w-full lg:grid-cols-4 lg:w-2/3">
                {[
                    { title: "Komi san Can't Communicate", img: "https://s3-alpha-sig.figma.com/img/f837/7253/645cdf89c843065d92f0198892d1faec?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=ZsmPoZ9ClmNPRqw-VD6cCUeGlTj1RT89oP1cq3Gb0gjGrncNhRu6d11KD4~~NldrLr4~utytitsaSNYlTQAZpfUw7pHsRN70cv~4LpXoipPw4hZ6bOrqSx8hDq47PLEhA64c8zhvhmpwHYLxS~DC4CUZJ50c7EC6HcUeNIuKeh3fy~jAa4VC3lsp71DOo8C28miRhYD3Nqsojf-Pf9e6AhIOHOG3S0bwUiWZGlHd10b91-xBS9l4~m~mu8iQrund00-0cBx0cQ-zuy4c5nbaWQuXgr6bR3bpen1DXP0H5qKYBt7UE~Ap8ArtgbVkniMiqRl2RtSKEwgZtxZcEpy-dw__" },
                    { title: "Boruto", img: "https://s3-alpha-sig.figma.com/img/4752/041f/cc793dcc52688d573a23d35008034950?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=lmy-Ll8SLnUMX2Yghv~rNwaVgK9~dxRtSr~Pb02wMR9axC27LlAcTscQrWYcCWEGU8~JVSiHBvEyrfs09i9aKrgtjk2d9weosMWIlSFnP8rfYW5BmiPgYQP3LKBO~A8MfAQM~-jBOk26psNyYjmpQcNtnCtPHqcxsQcmoYJHz1NGev7MaA2A3i-HFFm3EcnjEE9hwLHlAoE4YUpjYBulzTjgsCPL7xKcnDRvpxsvSwj9tvud-hWbOWT1~sqtZiDBO4e2xsa9Wi4kl0JvPdRU6QWeD3H0Te2QU91-5dYQ0t4B8xJf7V2~8Krguv2mmITtgPZeXVPohP9rONQ3pW7mHw__" },
                    { title: "Evangelion", img: "https://s3-alpha-sig.figma.com/img/300d/6335/966c0fc9b1513215c1a4f71556951932?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=Xe19cz30kWoo92IcqC~cvLH3ItjvOGHPZ6rk9p1sfy7AjtEE8GUYrIlmReSg483DI1Gxz8ZefBTtYJF6oydVOP0uP0Heo8TxKDO4TbM9oXyoP4jPlNCfE~PIoAKJHU7Tw0nZhVx3tzlDJ-jHtZHuZxlOjCALJ72aWC7jlJud50koObI6t~3xCtv79J7sl9842~O-KAw3rw5Je3O6mTt56qejY8bQknQXJ9AmldFSRxZy2prTGZnssoNc4Z2DiVlv6dvrozag2zX7m9hMTh0LyJxDNQihCTHkOg4gPZOwavcejEntBRM5Da3Pr~v7f7N2GlTGU4nmbIw~Xt1dFRHk5w__" },
                    { title: "Kaguya-sama: Love is war", img: "https://s3-alpha-sig.figma.com/img/0956/b289/ce446d132f775f7d46948fd643a81f14?Expires=1734912000&Key-Pair-Id=APKAQ4GOSFWCVNEHN3O4&Signature=YaWSUZk~hJLKULlpfqBLYlqromC23-P1XYSPiVZriCGg13YqlrhOWq~YoZ2kZ9oJEbJlayXO7XPavYDL-9T95AoFk5LucqeUHsF7JmzxdRTMoapSE0-AiRJSmYrBGpD~WnaCxvQjul0sLy2z2lgoNK5~AL5sYYkm3RJajiu9tpM6tqmirDfe9cHv4wO-TQrw-trXRBmOP4XT70t4YJ4~1lF5baoY~D4OeWxe5vGFQkzPEaJDdDXywg1FOzJxrqCC5LGtxZt7oxcJIghyROQqUnj4VL7v4y2EM~I2NOsvaxfGyE~PZ~lwSYairG8IsTS3g9Eh0diMuDclvhCt0-2-Vg__" },
                ].map((manga, index) => (
                    <div key={index} className="flex flex-col items-center">
                        <img
                            src={manga.img}
                            alt={manga.title}
                            className="w-full h-40 object-cover rounded-lg shadow-md lg:h-48"
                        />
                        <p className="text-sm mt-2 text-gray-800 lg:text-base">{manga.title}</p>
                    </div>
                ))}
            </div>

            {/* Botón Manage */}
            <div className="w-full mt-6 lg:w-2/3">
                <button
                    className={`w-full py-2 font-bold rounded-lg shadow-md transition-colors ${isOn ? "bg-green-500 text-white hover:bg-green-600" : "bg-orange-500 text-white hover:bg-orange-600"}`}
                    onClick={() => console.log("Redirigiendo...")}
                >
                    Manage!
                </button>
            </div>

            {/* Botón Regresar */}
            <div className="w-full mt-6 lg:w-2/3 flex justify-center">
                <button
                    onClick={goBack}
                    className={`px-4 py-2 border font-semibold rounded-lg shadow-md transition-colors ${isOn ? "border-green-500 text-green-500 hover:bg-green-500 hover:text-white" : "border-orange-500 text-orange-500 hover:bg-orange-500 hover:text-white"}`}
                >
                    ← Back
                </button>
            </div>
        </div>
    );
};

export default Author;