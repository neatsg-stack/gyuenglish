import fs from 'node:fs'
const regions=fs.readFileSync(new URL('../data/regions.ts',import.meta.url),'utf8')
const priority=fs.readFileSync(new URL('../data/region-priority.ts',import.meta.url),'utf8')
const pages=fs.readFileSync(new URL('../data/landing-pages.ts',import.meta.url),'utf8')
const content=fs.readFileSync(new URL('../data/landing-content.ts',import.meta.url),'utf8')
const regionCount=(regions.match(/\{slug:/g)||[]).length
const coreBlock=priority.match(/const CORE = new Set\(\[([\s\S]*?)\]\)/)?.[1]||''
const coreCount=(coreBlock.match(/'/g)||[]).length/2
const landingCount=(pages.match(/\{ region: '/g)||[]).length
const profiles=['opic','toeic-speaking','toeic','ielts','toefl','gtelp','english-writing','english-interview','international-school','study-abroad']
const missing=profiles.filter(x=>!content.includes(`${x}:`) && !content.includes(`'${x}':`))
console.log({regionCount,coreCount,landingCount,courseProfiles:profiles.length,missingProfiles:missing})
if(regionCount<390 || coreCount<100 || landingCount<1400 || missing.length) process.exit(1)
