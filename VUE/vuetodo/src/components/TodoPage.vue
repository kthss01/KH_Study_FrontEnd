<template>
    <div class="container">
        <h2>Todo List</h2>
        <div class="input-group" style="margin-bottom:10px;">
            <input type="text" class="form-control" 
                placeholder="할일을 입력하세요" 
                v-model="name" 
                v-on:keyup.enter="createTodo(name)">
            <span class="input-group-btn">
                <button class="btn btn-default" type="button" 
                @click="createTodo(name)">추가</button>
            </span>
        </div>
        <ul class="list-group">
            <li :key="index" class="list-group-item" v-for="(todo, index) in todos">
             {{todo.name}} 	


            <div class="btn-group pull-right" 
                style="font-size: 12px; line-height: 1;">
              
            
                 
                <!-- <a href="#" @click="deleteTodo(index)">삭제</a> -->
                <a href="#" @click="deleteTodo(todo,index)">삭제</a>
            </div>
          
            </li>
        </ul>
    </div>
</template>

<script>

export default {

    data() {
        return {
            name : '',
            todos : [
                // {
                //     name : 'vue 수업'
                // },
                // {
                //     name : 'bootstarp 수업'
                // },
                // {
                //     name : 'servlet 수업'
                // },
                // {
                //     name : 'jsp 수업'
                // }
            ]
        }
    },
    mounted() {
        this.getTodos();
    },
    methods : {
        // deleteTodo(i) {
        //     this.todos.splice(i, 1)
        // },
        deleteTodo(todo, i) {
            this.$ax.delete('http://localhost:3000/data/' + todo.id)
            .then((result) => {
                this.todos.splice(i, 1);
                console.log(result);
            })
        },
        createTodo(name) {
            // if (name !== null) {
            //     this.todos.push({name:name});
            //     this.name = null;
            // }

            if (name !== null) {
                // json 파일 주고받을때는 application/json이라고 명시해야한다고 함
                this.$ax.defaults.headers.post['Content-Type'] = 'application/json';
                // id값은 숫자라 안넣으면 자동으로 증감되서 들어간다고함
                this.$ax.post('http://localhost:3000/data', {
                    name : name
                }).then((result) => {
                    this.todos.push(result.data);
                });

                this.name = null;
            }
        },
        getTodos() {
            this.$ax.get('http://localhost:3000/data')
            .then((result) => {
                this.todos = result.data;
                console.log(result);
                console.log(result.data);
            })
        }
    }
}
</script>
