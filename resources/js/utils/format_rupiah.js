function formatRupiah(number) {
    let rupiahFormat = new Intl.NumberFormat('id-ID', {
        style: 'currency',
        currency: 'IDR',
        maximumFractionDigits: 0
    }).format(parseInt(number));

    if (rupiahFormat == 'RpNaN') {
        return 'Rp. 0'
    }

    return rupiahFormat;
}

export { formatRupiah }
