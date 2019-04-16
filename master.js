window.onload = function () { };

function fecharModalAL() {
    var body = document.querySelector('body');
    body.style.overflowY = '';
    body.classList.remove('startModal');

    var loading = document.querySelector("svg#loadingModal");
    if (loading) body.removeChild(loading);


    var modals = document.querySelectorAll("div[class='script-remover']");
    for (var i = 0; i < modals.length; i++) {
        body.removeChild(modals[i]);
    }
}


let startModal = (url) => {
    var modalUrl = url;

    console.log(modalUrl);

    if (!modalUrl || modalUrl === '') {
        console.error("URL do Modal nÃ£o especificada.")
        return;
    }

    if (window.carnage && window.carnage.translateUtmRules) {
        modalUrl = window.carnage.translateUtmRules(modalUrl);
    }

    if (detectMobile() && (window.innerWidth < 680)) {
        location.href = modalUrl;
    } else {
        var w = '660';
        var h = '510';
        var alturaModal = window.innerHeight,
            sombraModal = 'background-color: #414141;opacity:.5; height: ' + alturaModal + 'px; position: fixed; top: 0;left:0; width: 100%; z-index:314748363000',
            modal,
            botaoModal = '',
            iframeModal = `height: ${h}px !important; width: 100%;`;

        if (window.innerWidth < 680) {
            h = '300';
            w = '500';
            iframeModal = '';
            iframeModal = `height: ${h}px !important; width: ${w}px; border:none`;
            modal = 'background: white; position: fixed; left: 50%; top: 50%; transform: translate(-50%, 47%); min-width:810px; max-width:1030px; z-index: 314748364000; overflow:hidden;';
            botaoModal = 'background-color: #136FE0; box-sizing: border-box; display: block; font-size: 16px; height: auto; line-height: 16px; padding: 15px 30px; text-align: center !important; width: 100%;';
        }
        else if (window.innerWidth > 679 && window.innerWidth < 1040) {
            w = '700';
            h = '500';
            iframeModal = `height:${h}px; width:${w}px; overflow:hidden; border:none`;
            modal = 'background: white;position: fixed; top: 50%; left: 50%; transform: translate(-50%, 47%); min-height:650px; min-width: 810x; max-width:1030px; z-index: 314748364000;overflow:hidden;';
            botaoModal = 'background-color: #136FE0; box-sizing: border-box; display: block; font-size: 16px; height: auto; left: 0; line-height: 16px; padding: 15px 30px; text-align: center !important; width: 100%;';
        }
        else if (window.innerWidth > 1040) {
            w = '700';
            h = '500';
            iframeModal = `min-height:${h}px; min-width:${w}px; max-width:1030px; overflow:hidden; display:block; margin: 0 auto; border: none`;
            modal = `position: fixed; left: 50%; top: 50%; transform: translate(-50%, -47%); min-height:${h}px; min-width:${w}px; max-width:1030px; z-index: 314748364000;overflow:hidden;cursor:pointer`;
            botaoModal = 'background-color: #136FE0; transition: All .3s ease';
        }

        document.body.insertAdjacentHTML('beforeend', '<div id=\'sombraModal\' class=\'script-remover\' style=\'' + sombraModal + '\'></div>');
        document.body.insertAdjacentHTML('beforeend', '<style>.loader { position: fixed;left: 50%;top: 50%;transform: translate(-50%, -50%);filter: drop-shadow(5px 5px 4px rgba(0, 0, 0, 0.2));width: 140px;z-index: 10000000000;} body.startModal > *:not(#modal):not(#loadingModal) {-webkit-filter: blur(8px);-moz-filter: blur(8px);-ms-filter: blur(8px);-o-filter: blur(8px);filter: blur(8px);}body.startModal > *:no(#modal):not(#loadingModal) {-webkit-filter: saturate(0%);-moz-filter: saturate(0%);-ms-filter: saturate(0%);-o-filter: saturate(0%);filter: saturate(0%);}</style>');
        document.body.insertAdjacentHTML('beforeend', '<svg id="loadingModal" class="loader script-remover" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" x="0px" y="0px" width="24px" height="30px" viewBox="0 0 24 30" style="enable-background:new 0 0 50 50;" xml:space="preserve"> <rect x="0" y="10" width="4" height="10" fill="#333" opacity="0.2"> <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="8" y="10" width="4" height="10" fill="#333"  opacity="0.2"> <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.15s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.15s" dur="0.6s" repeatCount="indefinite" /> </rect> <rect x="16" y="10" width="4" height="10" fill="#333"  opacity="0.2"> <animate attributeName="opacity" attributeType="XML" values="0.2; 1; .2" begin="0.3s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="height" attributeType="XML" values="10; 20; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /> <animate attributeName="y" attributeType="XML" values="10; 5; 10" begin="0.3s" dur="0.6s" repeatCount="indefinite" /> </rect> </svg>');
        document.body.insertAdjacentHTML('beforeend', '<div id=\'modal\' class=\'script-remover\' style=\'' + modal + '\'> <a id="btnFecharModal" class=\'script-remover\' onclick="fecharModalAL();" style="display: none; color: red; position: absolute;z-index: 9999999999999999999999999;right: 10px;top: 10px;color: #fff;text-decoration: none;font-family: sans-serif;">X</a> <iframe id=\'iframeModalCD\' scrolling=\'no\' marginwidth=\'100\' style=\'' + iframeModal + '\' src= \'' + modalUrl + '\' data-index=\'1\'></iframe></div>');

        document.body.style.overflowY = 'hidden';
        document.body.classList.add('startModal');

        var iframe = document.getElementById('iframeModalCD');

        iframe.addEventListener('load', function (event) {

            console.log("Modal Carregado!!!");

            var loading = document.getElementById('loadingModal');
            var modal = document.getElementById('modal');
            var btnFechar = document.getElementById('btnFecharModal');

            modal.style.display = 'block';
            loading.style.display = 'none';
            btnFechar.style.display = 'block';
            this.style.display = 'block';
        });
    }
}

function openModal(url, account_id) {

    if (validate_uuid(account_id)) {

        let urlModal = url;
        let urlAccount = "accounts/"+account_id+"/leads/new";
        let urlPrefixModal = 'https:' === document.location.protocol ? 'https://' : 'http://';
        let urlIframe = urlPrefixModal.concat(urlModal, '/', urlAccount);

        startModal(urlIframe);
    } else {
        alert("Conta nÃ£o encontrada");
    }

    
    return false;
}

function validate_uuid(uuid){
    let vali = /^[0-9a-f]{8}-[0-9a-f]{4}-[1-5][0-9a-f]{3}-[89ab][0-9a-f]{3}-[0-9a-f]{12}$/i

    return vali.test(uuid);
}



// AUXILIAR FUNCTIONS
let detectMobile = () => {
    var a = navigator.userAgent || navigator.vendor || window.opera;
    if (/android|avantgo|blackberry|blazer|compal|elaine|fennec|hiptop|ip(hone|od|ad)|iris|kindle|lge |maemo|midp|mmp|mobile|o2|opera m(ob|in)i|palm( os)?|p(ixi|re)\/|plucker|pocket|psp|smartphone|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce; (iemobile|ppc)|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|e\-|e\/|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(di|rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|xda(\-|2|g)|yas\-|your|zeto|zte\-/i.test(a))
        return true;

    return false;
}

let getQueryParameterByName = (name, url) => {
    name = name.replace(/[\[\]]/g, '\\$&');
    var regexPath = new RegExp('[?&]' + name + '(=([^&#]*)|&|#|$)'),
        resultados = regexPath.exec(url);
    if (!resultados) return null;
    if (!resultados[2]) return '';
    return decodeURIComponent(resultados[2].replace(/\+/g, ' '));
}