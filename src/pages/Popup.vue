<template>
    <!-- Страница с кнопкой -->
    <div>
        <button class="start-button" @click="showModal">Начать</button>
        <div class="content-data">{{ content }}</div>
    </div>

    <!-- Модальное окно -->
    <Modal v-model:show="modalVisibility">
            <div class="popup">
                <h2>Заголовок попапа</h2>
                <div class="form-row">
                    <input v-model="title" type="text" placeholder="title">
                    <input v-model="body" type="text" placeholder="body">
                    <input v-model="about" type="text" placeholder="about">
                    <input v-model="resume" type="text" placeholder="resume">
                    <input v-model="something" type="text" placeholder="something">
                </div>
                <button class="submit-button" @click="addContent">Отправить</button>
            </div>
    </Modal>
</template>

<script>
import Modal from'@/components/Modal.vue';
export default{
    components:{
        Modal
    },
    data(){
        return{
            modalVisibility:false,
            content:[]
        }
    },
    methods:{
        showModal(){
            this.modalVisibility=true;
        },
        addContent(){
            const newContent={
                title:this.title,
                body:this.body,
                about:this.about,
                resume:this.resume,
                something:this.something,
            }
            this.content.push(newContent);
            this.modalVisibility=false;
            
        }
    }
}
</script>

<style>

        .start-button {
            position: fixed;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            border-radius: 4px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        .popup {
            max-width: 500px;
            padding: 20px;
            background-color: white;
            border-radius: 4px;
            box-shadow: 0 0 10px rgba(0, 0, 0, 0.2);
        }
        .popup .form-row {
            display: flex;
            flex-wrap: wrap;
        }

        .popup .form-row > *:nth-child(n) {
            margin-bottom: 10px;
        }

        .popup .form-row > *:nth-child(odd) {
            margin-right: 10px;
        }

        .content-data{
            display: block;
            position: fixed;
            top: 10%;
            left:25%;
            text-align: center;
            max-width: 600px;
            font-size: 18px;
            border: #4CAF50 1px solid;
        }
        .submit-button {
            margin-top: 20px;
            padding: 10px 20px;
            font-size: 18px;
            border: none;
            border-radius: 4px;
            background-color: #4CAF50;
            color: white;
            cursor: pointer;
        }
        @media (max-width:768px) {

            .content-data{
                top:15%;
                left:5%;
                margin-left:auto;
                margin-right: auto;
                max-width: 90%;
            }
        }
</style>