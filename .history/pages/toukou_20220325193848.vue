<template>
    <v-app>
         <v-card width='90%' class="mx-auto mt-5">
            <v-card-title>
                <h2 class='display-1 item--center'>Post</h2>
            </v-card-title>
            <v-card-text>
            <v-form>
                <v-text-field id='title'
                              label='マインドマップのテーマ'
                              v-model='title'
                              type='text'/>
                <v-textarea id='comment'
                              label='マインドマップの詳細'
                              v-model='comment'/>
            <input type="file" name="image"  @change="selectFile">
            </v-form>
            </v-card-text>

            <v-card-actions>
                <v-btn class='info item--center' @click='createMap'>投稿</v-btn>
            </v-card-actions>
        </v-card>
    </v-app>
</template>

<script>
import { db } from '../main'
import moment from  'moment'


export default {
    data(){
        return{
            //ユーザー名とユーザー固有のID
            displayName: null,
            userUID: null,
            //メール・Mapのタイトル・コメント・日時・画像URL
            email: null,
            title: null,
            comment: null,
            moment: null,
            imageURL: null,
            maps: {},
        }
    },
    computed: {
        //iDTokenはログインしていないと投稿できないシステムに
        idToken: function() {
            return this.$store.getters.idToken;
            },
　　　　　//現在のユーザーを取得
        getUser: function() {
            return this.$store.getters.displayName;
            }
        },
    methods: {
        //選択したファイルを保存
        selectFile(e){
            this.$store.dispatch('selectFile',e)     
        },
        //思考マップのタイトル・コメント・日時・画像ファイルをアップロード
        createMap () {
　　　　　　　//stores/modules/comments.jsのupload actionを動作
            this.$store.dispatch('upload')
            this.moment = moment().format('YYYY-MM-DD')
            console.log(this);
            db.collection('comments').add({
                name: this.title,
                comment: this.comment,
                user: this.email,
                uid: this.userUID,
                moment: this.moment,
                //stores/modules/comments.jsのimageURLを取得
                imageURl: this.$store.getters.imageURL
            })
            .then(function (docRef){
                console.log(this);
                console.log("Document written with ID: ", docRef.id);
                this.$store.dispatch('initialize');

            })
            .catch(function (error) {
                console.log("error", error);
            })
        }
    } 
}
</script>