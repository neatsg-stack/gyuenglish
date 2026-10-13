import fs from 'node:fs'
const regions=fs.readFileSync('data/regions.ts','utf8')
const slugs=[...regions.matchAll(/slug:\s*'([^']+)'/g)].map(m=>m[1])
const names=[...regions.matchAll(/name:\s*'([^']+)'/g)].map(m=>m[1])
const dup=a=>a.filter((v,i)=>a.indexOf(v)!==i)
if(dup(slugs).length) throw new Error(`Duplicate slugs: ${dup(slugs).join(', ')}`)
console.log(`regions=${slugs.length}; uniqueSlugs=${new Set(slugs).size}; duplicateNames=${new Set(dup(names)).size}`)
const priority=fs.readFileSync('data/region-priority.ts','utf8')
const core=(priority.match(/const CORE = new Set\(\[([\s\S]*?)\]\)/)||[])[1]||''
const growth=(priority.match(/const GROWTH = new Set\(\[([\s\S]*?)\]\)/)||[])[1]||''
const count=x=>(x.match(/'[^']+'/g)||[]).length
console.log(`core=${count(core)}; growth=${count(growth)}; longtail=${slugs.length-count(core)-count(growth)}`)
