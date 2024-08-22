import _ from 'lodash';

const mahasiswa = [
	{
		nama: 'Muhammad Bahrul Ilmi', email: 'kangealme@gmail.com', jurusan: 'TI'
	},
	{
		nama: 'Doddy Kuswono', email: 'dodykus@gmail.com', jurusan: 'SI',
	},
	{
		nama: 'Fries Sando', email: 'fries@gmail.com', jurusan: 'PSI',
	},
];

const mhs = _.find(mahasiswa, {nama: 'Muhammad Bahrul Ilmi'});

console.log(mhs);