using System;

namespace Persistencia.DapperConexion.Instructor
{
    public class InstructorModel
    {
        public Guid InstructorId;
        public string Nombre {get; set;}
        public string Apellidos {get; set;}
        public string Titulo {get; set;}
    }
}