var app = new Vue({
    el: '#app',
    data: {
        nome: '',
        tarefas: [],
        dataAtual: new Date().toLocaleDateString("pt-BR")
    },

    mounted () {
        axios
          .get('http://localhost:8080/tarefas')
          .then(res => {
              console.log(res.data)
              this.tarefas = res.data
          })
    },

    methods: {
        adicionar: function() {
            console.log(this.nome)
            axios.post('http://localhost:8080/tarefas', {nome: this.nome, pronto: false})
                 .then(res => {this.tarefas = res.data; this.nome = ''})
        },
        deletar: function(id) {
            axios.delete('http://localhost:8080/tarefas/' + id)
                 .then(res => this.tarefas = res.data)
        },
        checked: function(id) {
            axios.get("http://localhost:8080/tarefas/pronta/" + id)
                 .then(res => this.tarefas = res.data)
        }
    }
    
})