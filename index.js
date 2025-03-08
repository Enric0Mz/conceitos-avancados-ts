// exercício 1
var meuCarro = {
    marca: "mustang",
    modelo: "GT",
    ano: 2025,
    motor: "Aspirado"
};
console.log(meuCarro);
var multiplica = function (a, b) { return a * b; };
console.log(multiplica(10, 20));
console.log(multiplica(11, 21));
// exercício 3
function inverterArray(array) {
    return array.reverse();
}
var numeros = [1, 2, 3, 4, 5];
var numerosInvertidos = inverterArray(numeros);
console.log(numerosInvertidos);
var strings = ['a', 'b', 'c', 'd'];
var stringsInvertidas = inverterArray(strings);
console.log(stringsInvertidas);
var RepositorioDeUsuarios = /** @class */ (function () {
    function RepositorioDeUsuarios() {
        this.usuarios = [];
    }
    RepositorioDeUsuarios.prototype.salvar = function (dado) {
        this.usuarios.push(dado);
    };
    RepositorioDeUsuarios.prototype.obterTodos = function () {
        return this.usuarios;
    };
    return RepositorioDeUsuarios;
}());
var repositorio = new RepositorioDeUsuarios();
repositorio.salvar({ nome: 'João', email: 'joao@example.com' });
repositorio.salvar({ nome: 'Maria', email: 'maria@example.com' });
repositorio.salvar({ nome: 'Carlos', email: 'carlos@example.com' });
var usuarios = repositorio.obterTodos();
console.log(usuarios);
function processarResposta(resposta) {
    if (typeof resposta === 'string') {
        console.log("A resposta do servidor \u00E9 uma mensagem: ".concat(resposta));
    }
    else if (typeof resposta === 'boolean') {
        if (resposta) {
            console.log('A resposta do servidor é positiva (verdadeira).');
        }
        else {
            console.log('A resposta do servidor é negativa (falsa).');
        }
    }
}
processarResposta("Erro ao conectar ao servidor.");
processarResposta(true);
processarResposta(false);
var estudanteTrabalhador = {
    nome: 'João Silva',
    curso: 'Engenharia de Software',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedor Júnior'
};
console.log(estudanteTrabalhador);
