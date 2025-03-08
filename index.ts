// exercício 1

interface Carro {
    marca: string;
    modelo: string;
    ano: number;
    motor?:  string;
}

const meuCarro: Carro = {
    marca: "mustang",
    modelo: "GT",
    ano: 2025,
    motor: "Aspirado"
} 

console.log(meuCarro)

// exercício 2

interface Multiplica {
    (a: number, b: number): number;
}

const multiplica: Multiplica = (a: number, b: number) => a*b

console.log(multiplica(10,20))
console.log(multiplica(11,21))

// exercício 3

function inverterArray<T>(array: T[]): T[] {
    return array.reverse();
  }
  
  const numeros = [1, 2, 3, 4, 5];
  const numerosInvertidos = inverterArray(numeros);
  console.log(numerosInvertidos);
  
  const strings = ['a', 'b', 'c', 'd'];
  const stringsInvertidas = inverterArray(strings);
  console.log(stringsInvertidas);


// exercício 4

interface Repositorio<T> {
    salvar(dado: T): void;
    obterTodos(): T[];
  }

  
interface Usuario {
    nome: string;
    email: string;
  }
  
  class RepositorioDeUsuarios implements Repositorio<Usuario> {
    private usuarios: Usuario[] = [];
  
    salvar(dado: Usuario): void {
      this.usuarios.push(dado);
    }
  
    obterTodos(): Usuario[] {
      return this.usuarios;
    }
  }

const repositorio = new RepositorioDeUsuarios();

repositorio.salvar({ nome: 'João', email: 'joao@example.com' });
repositorio.salvar({ nome: 'Maria', email: 'maria@example.com' });
repositorio.salvar({ nome: 'Carlos', email: 'carlos@example.com' });

const usuarios = repositorio.obterTodos();
console.log(usuarios);

// exercício 5

type RespostaServidor = string | boolean;

function processarResposta(resposta: RespostaServidor): void {
  if (typeof resposta === 'string') {
    console.log(`A resposta do servidor é uma mensagem: ${resposta}`);
  } else if (typeof resposta === 'boolean') {
    if (resposta) {
      console.log('A resposta do servidor é positiva (verdadeira).');
    } else {
      console.log('A resposta do servidor é negativa (falsa).');
    }
  }
}

processarResposta("Erro ao conectar ao servidor.");

processarResposta(true);

processarResposta(false);

// exercício 6

interface Estudante {
    nome: string;
    curso: string;
  }
  
  interface Trabalhador {
    empresa: string;
    cargo: string;
  }
  
  type EstudanteTrabalhador = Estudante & Trabalhador;
  
  const estudanteTrabalhador: EstudanteTrabalhador = {
    nome: 'João Silva',
    curso: 'Engenharia de Software',
    empresa: 'Tech Solutions',
    cargo: 'Desenvolvedor Júnior'
  };
  
  console.log(estudanteTrabalhador);
  