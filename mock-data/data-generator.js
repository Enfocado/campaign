const fs = require('fs');
const faker = require('faker');
const csv = require('fast-csv');


const randomInt = (min, max) => Math.floor(Math.random() * (max-min + 1)) + min;

const makeProjectData = () => {

	let writer = fs.createWriteStream('projects.csv', {flag: 'a'});
	writer.write('name' + '\n', 'utf-8');
	for (let i = 1; i <= 10000000; i++) {
		writer.write('Project ' + i + '\n', 'utf-8');
	}
	writer.end();

}

const makeAboutData = () => {
 	let sectionType = ['paragraph', 'bold_text', 'image'];
  let writer = fs.createWriteStream(`abouts.csv`, {flag: 'a'});

  //write header
  writer.write(`project_id,section_type,section_content\n`, 'utf-8');

  //write records
	let i = 0;
	let write = () => {
		let ok = true;
		do {
			i++;
			if(i%1000000 === 0) console.log(i);
			let projectId = i;
			let sectionCount = randomInt(1, 4);
			let data = '';
			for (let j = 1; j <= sectionCount; j++ ) {
				data += `${projectId},title,SECTION HEADING\n`;
				let typeIndex = randomInt(0,2);
				let content = '';
				if (typeIndex === 0) content = 'Lorem ipsum paragraph. ' + i + ' Lorem ipsum paragraph. ' + j;
			  if (typeIndex === 1) content = 'Emphatic lorem impsum!';
				if (typeIndex === 2) content = 'https://picsum.photos/400/400/?random';
				data += `${projectId},${sectionType[typeIndex]},${content}\n`;
			}
			if (i === 10000000) {
				writer.write(data, 'utf-8', ()=> console.log('done'));
			} else {
				ok = writer.write(data, 'utf-8');
			}
		} while (i < 10000000 && ok);
		if (i < 10000000) {
			writer.once('drain', write);
		}
	}
	write();

}

const makeTierData = () => {
	let writer = fs.createWriteStream(`tiers.csv`, {flag: 'a'});

	//write body
  writer.write(`project_id, reward,description,base_pledge_amount,delivery_date,ship_to,reward_quantity\n`, 'utf-8');
	
  //write records
	let i = 0;
	let write = () => {
		let ok = true;
		do {
			i++;
			if(i%100000 === 0) console.log(i);
			let projectId = i;
			let tierCount = randomInt(1, 4);
			let data = '';
			for (let j = 1; j <= tierCount; j++) {
				let name = faker.commerce.productName();
				let description = faker.lorem.sentence();
				let base = randomInt(10,300);
				let delivery = faker.date.future();
				let destination = 'Anywhere';
				let max = randomInt(10,999);
				data += `${projectId},${name},${description},${base},${delivery},${destination},${max}\n`;
			}
			if (i === 10000000) {
				writer.write(data, 'utf-8', ()=> console.log('done'));
			} else {
				ok = writer.write(data, 'utf-8');
			}
		} while (i < 10000000 && ok);
		if (i < 10000000) {
			writer.once('drain', write);
		}
	}
	write();
}

makeProjectData();
//makeAboutData();
//makeTierData();
