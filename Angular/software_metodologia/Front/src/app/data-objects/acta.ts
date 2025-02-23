import { UsuarioActa }                    from 'app/data-objects/usuarioActa';


export class Acta {
  constructor(

    public id: string,
    public numeroActa:string,

    public fecha: string,
    public lugar: string,
    public ciudad : string,

    public integrantes:UsuarioActa[],
    public finMenteGral: string,
    public temas : string[],

    public paso : string,

    public comentarioAdicionales : string,
    public seCumpliofinEnMente : string,
    public elTiempoFueSuficiente : string,
    public huboInconvenientes : string,
    public tieneSugerencias : string,
    public redaccionDeTareasOk : string,

    public horaInicio: string,
    public horaFinal: string,
    public fechaReunion: string,

    public huboInconvenientesTexto : string,
    public tieneSugerenciasTexto : string,

  ) { }
}



