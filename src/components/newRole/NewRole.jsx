import { useState } from "react";
import { useNavigate } from "react-router-dom";
import SignInFoto from "../../assets/image/SignInFoto.jpg";
import imagenHome from "../../assets/image/LOGO_DOS.png";
import señora2 from "../../assets/image/señora2.jpg";
import señora3 from "../../assets/image/señora3.jpg";
import señoraCrespa from "../../assets/image/señoraCrespa.jpg";

const NewRole = () => {
  const [selectedRole, setSelectedRole] = useState("");
  const navigate = useNavigate();

  const handleRoleSelection = (role) => {
    setSelectedRole(role);
    // Redirigir según el rol seleccionado
    if (role === "author") {
      navigate("/newAuthor"); // Redirigir a la página de autor
    } else if (role === "company") {
      navigate("/newCompany"); // Redirigir a la página de empresa
    }
  };

  return (
    <div className="flex flex-col md:flex-row w-full min-h-screen bg-gray-100">
      {/* Sección principal */}
      <div className="flex w-full md:w-1/2 items-center justify-center bg-gray-50 px-6 py-8 min-h-screen">
        {/* Contenedor del formulario */}
        <div className="w-full max-w-md">
          {/* Encabezado */}
          <div className="text-center mb-6">
            <h2 className="text-2xl font-bold text-orange-500">Change role to</h2>
            <img className="mx-auto w-24 h-16" src={imagenHome} alt="Minga Logo" />
          </div>

          {/* Opciones de Rol */}
          <div className="space-y-4">
            {/* Opción de Autor */}
            <div
              className={`grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 border rounded-lg cursor-pointer ${selectedRole === "author" ? "border-orange-500 bg-orange-100" : "border-gray-300"
                }`}
              onClick={() => handleRoleSelection("author")}
            >
              <div className="flex items-center">
                <img
                  src={señoraCrespa}
                  alt="Author 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src={señora3}
                  alt="Author 2"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-4"
                />
                <img
                  src={señora2}
                  alt="Author 3"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-4"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-orange-700 font-medium">Join as an Author!</p>
                <p className="text-sm text-orange-500">I'm a reader writing a manga</p>
              </div>
              {selectedRole === "author" && (
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>

            {/* Opción de Empresa */}
            <div
              className={`grid grid-cols-[auto_1fr_auto] gap-4 px-4 py-3 border rounded-lg cursor-pointer ${selectedRole === "company" ? "border-orange-500 bg-orange-100" : "border-gray-300"
                }`}
              onClick={() => handleRoleSelection("company")}
            >
              <div className="flex items-center">
                <img
                  src={señoraCrespa}
                  alt="Company 1"
                  className="w-10 h-10 rounded-full border-2 border-white"
                />
                <img
                  src={señora3}
                  alt="Company 2"
                  className="w-12 h-12 rounded-full border-2 border-white -ml-4"
                />
                <img
                  src={señora2}
                  alt="Company 3"
                  className="w-10 h-10 rounded-full border-2 border-white -ml-4"
                />
              </div>
              <div className="flex flex-col justify-center">
                <p className="text-orange-700 font-medium">Join as a Company!</p>
                <p className="text-sm text-orange-500">I'm a company and I want to publish my comics</p>
              </div>
              {selectedRole === "company" && (
                <div className="flex items-center justify-center">
                  <div className="w-8 h-8 flex items-center justify-center rounded-full bg-orange-500">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="white"
                      className="w-5 h-5"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="m4.5 12.75 6 6 9-13.5"
                      />
                    </svg>
                  </div>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* Imagen lateral con texto superpuesto */}
      <div className="hidden md:flex w-1/2 relative items-center justify-center bg-gray-50">
        <img className="w-full h-[100vh] object-cover" src={SignInFoto} alt="SignIn" />
        <div className="absolute inset-0 flex flex-col items-center justify-start p-10 bg-black/50 text-white gap-4">
          <p className="w-[70%] mt-24 text-lg text-center">Minga.com is the best place to find manga reviews. We've been super impressed by the quality of applicants.</p>
          <p className="w-[70%] text-sm font-light text-left">- Ignacio Borraz</p>
        </div>
      </div>
    </div>
  );
};

export default NewRole;
