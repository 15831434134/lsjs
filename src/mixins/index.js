export const Mixins = {
    data(){
        return {
            message:123
        }
    },

    created(){
        console.log(this.message)
    }
}