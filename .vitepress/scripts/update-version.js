import fs from 'node:fs'

const versionJsonPath = './package.json'
const versionJson = JSON.parse(fs.readFileSync(versionJsonPath, 'utf8'))

// 自动递增版本号
const currentVersion = versionJson.version
const newVersion = incrementalVersion(currentVersion)

// 修改 version 字段
versionJson.version = newVersion

// 将修改后的内容写入 version.json 文件
fs.writeFileSync(versionJsonPath, JSON.stringify(versionJson, null, 2), 'utf8')

console.log(`版本号已更新为: ${newVersion}`)

// 递增版本号
function incrementalVersion(version) {
  const versionParts = version.split('.')
  let major = Number.parseInt(versionParts[0]) // 主版本号
  let minor = Number.parseInt(versionParts[1]) // 次版本号
  let patch = Number.parseInt(versionParts[2]) // 修订版本号
  if (patch < 99) { // 最后一位数若大于99，patch变为0，则前一位（minor）➕1，
    patch += 1
  }
  else {
    patch = 0
    minor += 1
  }
  if (minor > 99) { // 同 patch一样
    major += 1
    minor = 0
  }

  return `${major}.${minor}.${patch}`
}
