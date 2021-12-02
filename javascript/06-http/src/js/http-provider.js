const jokeUrl = 'https://api.chucknorris.io/jokes/random';
const urlUsuarios = 'https://reqres.in/api/users?page=2';

// Cloudinary
const cloudPreset = 'autwc6pa';
const cloudUrl    = 'https://api.cloudinary.com/v1_1/dx0pryfzn/upload';

const obtenerChiste = async () => {
    try {
        const resp = await fetch(jokeUrl);
        if (!resp.ok) throw 'No se pudo realizar';
        const { icon_url, id, value } = await resp.json();
        return {
            icon_url,
            id,
            value
        }
    } catch (err) {
        throw err;
    }

}

const obtenerUsuarios = async () => {
    try {
        const resp = await fetch(urlUsuarios);
        if (!resp.ok) throw 'No se pudo realizar';
        const { data: usuarios } = await resp.json();
        console.log("Entra aca");
        return usuarios
    } catch (err) {
        throw err;
    }


}
//archivoSubir:: File
const subirImagenes = async(archivoSubir) =>{
    const formData = new FormData();
    formData.append('upload_preset', cloudPreset);
    formData.append('file', archivoSubir);

    try{
        const resp = await fetch(cloudUrl, {
            method: 'POST',
            body: formData
        });

        if(resp.ok) {
            const cloudResp = await resp.json();
            console.log(cloudResp);
            return cloudResp.secure_url;
        }else{
            throw await resp.json();
        }
    }catch(err){
        throw err;
    }
}

export {
    obtenerChiste,
    obtenerUsuarios,
    subirImagenes
}