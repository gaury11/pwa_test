<template>
    <v-container grid-list-md>
    <form>
        <v-flex xs6>
        <v-select
        v-model="select"
        :items="items"

        label="Select"
        data-vv-name="select"
        required
        ></v-select>
        </v-flex>
        
        <v-text-field 
        v-model="name"
        :counter="50"
        label="Name"
        ></v-text-field>

        <v-text-field
        v-model="email"
        v-validate="'required|email'"
        
        label="E-mail"
        data-vv-name="email"
        required
        ></v-text-field>
        

        <v-btn @click="submit">submit</v-btn>
        <v-btn @click="clear">clear</v-btn>
    </form>
    </v-container>
</template>
<script>

  export default {

    data: () => ({
      name: '',
      email: '',
      select: null,
      items: [
        'Item 1',
        'Item 2',
        'Item 3',
        'Item 4'
      ],
      checkbox: null,
      dictionary: {
        attributes: {
          email: 'E-mail Address'
          // custom attributes
        },
        custom: {
          name: {
            required: () => 'Name can not be empty',
            max: 'The name field may not be greater than 10 characters'
            // custom messages
          },
          select: {
            required: 'Select field is required'
          }
        }
      }
    }),


    methods: {
      submit () {
       
      },
      clear () {
        this.name = ''
        this.email = ''
        this.select = null
        this.checkbox = null
        this.$validator.reset()
      }
    }
  }
</script>

