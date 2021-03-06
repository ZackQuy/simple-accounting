import moment from 'moment'

const mixin = {
    data() {
        return {
            action: {
                choose(callback) {
                    swal({
                        title: 'Choose your action',
                        text: null,
                        type: null,
                        showCancelButton: true,
                        cancelButtonColor: '#54B0F3',
                        cancelButtonText: 'Edit',
                        confirmButtonColor: '#D43F3A',
                        confirmButtonText: 'Delete',
                        closeOnConfirm: false,
                        customClass: 'action__choose'
                    }, callback)
                }
            },

            alert: {
                confirm(title, text, type, callback) {
                    swal({
                        title: title,
                        text: text,
                        type: type,
                        showCancelButton: true,
                        cancelButtonColor: '#DBDFEA',
                        cancelButtonText: 'No',
                        confirmButtonColor: '#54B0F3',
                        confirmButtonText: 'Yes',
                        closeOnConfirm: false
                    }, callback)
                },

                info(title, callback) {
                    swal({
                        title: title,
                        confirmButtonColor: '#54B0F3',
                        confirmButtonText: 'Ok'
                    }, callback);
                }
            },

            helper: {
                date: {
                    format(date) {
                        return moment(date).format('DD/MM/YY')
                    }
                }
            }
        }
    },

    methods: {
        go(page) {
            this.$router.push(page)
        },

        transactionError() {
            alert('Transaksi gagal')
        }
    }
}

export default {
    install (Vue, options) {
        Vue.mixin(mixin)
    }
}
