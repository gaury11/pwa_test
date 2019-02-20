<template>
  <div class="main">
    <v-container grid-list-md>
        <h1>{{ title1 }}</h1>
        <v-layout wrap>
            <v-flex xs6>
                <v-select
                    label="URL 선택"
                    v-model="apiTargetInfo"
                    :items="apiTargetInfos"
                    item-text="targetName"
                    item-value="targetUrl"
                    persistent-hint
                    return-object
                    single-line
                ></v-select>
            </v-flex>
            <v-flex xs2>
                <v-btn color="primary" v-on:click="sendMsgApi" dark large>Request Msg Api</v-btn>
            </v-flex>
            <v-flex xs12>
                <h3>요청 URL = {{apiTargetInfo.targetUrl}} </h3>
            </v-flex>
            <v-flex xs12>               
                <tree-view :data="requestData" :options="{modifiable: false}" max-depth="4"></tree-view>
            </v-flex>
            
        </v-layout>
    </v-container>
    <v-container grid-list-md>
        <h1>{{ title2 }}</h1>
        <v-layout wrap>
            <v-flex xs10>
                <h3> 결과 = {{ result }}</h3>
            </v-flex>
            <!--
            <v-flex xs8>
                <v-textarea
                outline
                name="input-7-4"
                label="RESPONSE"
                auto-grow
                v-model="result"
                ></v-textarea>
            </v-flex>
            -->
        </v-layout>
    </v-container>
  </div>
</template>
<script>

export default {
  name: 'Main',
  data () {
    return {
      title1: 'Request',
      title2: 'Response',
      apiTargetInfos: [],
      apiTargetInfo: '',
      requestData: null,
      conn: {
          appKey: null,
          url: null,
          port: null,
          context: null
      },
      reqParam: null,
      reqConnectionUrl: this.title1,
      result: null,
      fcmItem:{
          serverKey: null,
          pushToken: null
      },
      apnsItem:{
          certName: null,
          pushToken: null
      }
    }
  },
  created: function(){
    this.getMsgApi()
  },
  methods: {
    getMsgApi: function(){
        console.log("getMsgApi")
        this.axios
            .get('http://192.168.0.197:9090/apiTarget')
            .then(response => {
                console.log(response.data)
                this.requestData = response.data
                this.apiTargetInfos = response.data
            })
    },
    clickBtn: function(){
        this.axios
            //.get('https://api.myjson.com/bins/74l63')
            .get('http://localhost:8081/codeInfo/list')
            .then(response => {
                console.log(response.data)
            })
    },
    sendMsgApi: function(){
        console.log('url : ' +  this.apiTargetInfo.targetUrl + 'ping')
        this.axios
            .get('http://192.168.0.197:9090/api/ping')
            //.get(this.apiTargetInfo.targetUrl + 'ping')
            .then(response => {
                console.log(response.data)
                this.result = response.data
                
            })
            .catch(error => {
                if (error.response) {
                    // The request was made and the server responded with a status code
                    // that falls out of the range of 2xx
                    console.log(error.response.data);
                    console.log(error.response.status);
                    console.log(error.response.headers);
                } else if (error.request) {
                    // The request was made but no response was received
                    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
                    // http.ClientRequest in node.js
                    console.log(error.request);
                } else {
                    // Something happened in setting up the request that triggered an Error
                    console.log('Error', error.message);
                }
                console.log(error.config);
            })
    }
  }
}
</script>