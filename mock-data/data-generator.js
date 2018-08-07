const fs = require('fs');
const faker = require('faker');


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

const makeAboutDataCassandra = () => {
 	let sectionType = ['paragraph', 'bold_text', 'image'];
  let writer = fs.createWriteStream(`abouts_cass.csv`, {flag: 'a'});

  //write header
  writer.write(`project_id,section_id,section_type,section_content\n`, 'utf-8');

  //write records
	let i = 0;
	let sectionId = 0;
	let write = () => {
		let ok = true;
		do {
			i++;
			if(i%1000000 === 0) console.log(i);
			let projectId = i;
			let sectionCount = randomInt(1, 4);
			let data = '';
			for (let j = 1; j <= sectionCount; j++ ) {
				sectionId += 1;
				data += `${projectId},${sectionId},title,SECTION HEADING\n`;
				let typeIndex = randomInt(0,2);
				let content = '';
				if (typeIndex === 0) content = 'Lorem ipsum paragraph. ' + i + ' Lorem ipsum paragraph. ' + j;
			  if (typeIndex === 1) content = 'Emphatic lorem impsum!';
				if (typeIndex === 2) content = 'https://picsum.photos/400/400/?random';
				sectionId +=1;
				data += `${projectId},${sectionId},${sectionType[typeIndex]},${content}\n`;
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

	//write header
  writer.write(`project_id,reward,description,base_pledge_amount,delivery_date,ship_to,reward_quantity\n`, 'utf-8');
	
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
				let delivery = faker.date.future().toISOString().substring(0, 10);
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

const makePledgeData =() => {
	let writer = fs.createWriteStream('pledges.csv', {flag: 'a'});

	//write header
	writer.write(`user_id,tier_id,pledge_amount,ship_to\n`, 'utf-8');

	//write records
	let i = 0;
	let write = () => {
		let ok = true;
		do {
			i++;
			if (i%100000 === 0) console.log(i);
			let tierId = i;
			let pledgeCount = randomInt(0, 10);
			let data = '';
			for (let j = 1; j<= pledgeCount; j++){
				let userId = randomInt(1, 1000000);
				let amount = randomInt(50,150);
				let countryCode = randomInt(23424770, 23425005);
				data += `${userId},${tierId},${amount},${countryCode}\n`;
			}
			if (i === 25000000) {
				writer.write(data, 'utf-8', () => console.log('done'));
			} else {
				ok = writer.write(data, 'utf-8');
			}
		} while (i < 25000000 && ok);
		if(i < 25000000){
			writer.once('drain', write);
		}
	}
	write();
}

//makeProjectData();
//makeAboutData();
//makeTierData();
//makePledgeData();
makeAboutDataCassandra();
