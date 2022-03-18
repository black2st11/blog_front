import path from 'path'
import matter from 'gray-matter'
import {remark} from 'remark'
import html from 'remark-html'
import axios from 'axios'
const postDirectory = path.join(process.cwd(), 'posts')
export function getSortedPostsData(){
    const fileNames = fs.readdirSync(postDirectory)
    const allPostsData = fileNames.map(fileName => {
        const id = fileName.replace(/\.html$/, '')

        const fullPath = path.join(postDirectory, fileName)
        const fileContents = fs.readFileSync(fullPath, 'utf8')
        const matterResult = matter(fileContents)

        return {
            id,
            ...matterResult.data
        }
    })

    return allPostsData.sort(({data : a}, {data : b})=>{
        if(a<b){
            return 1
        }else if (a>b){
            return -1
        }else {
            return 0
        }
    })
}

export async function getAllPostIds(){
    
    return fileNames.map(fileName => {
        return {
            params : {
                id : fileName.replace(/\.html$/, '')
            }
        }
    })
}

export async function getPostData(id) {

    let res = await axios({
        url : 'http://localhost:8000/post/2'
    })
    
    let file = await axios({
        url : res.data.file
    })

    return {
        fileContents :  file.data,
        title : res.data.title,
        tag : res.data.tag,
        created_at : res.data.created_at
    }
    const matterResult = matter(fileContents)
    const processedContent = await remark()
    .use(html)
    .process(matterResult.content)

    const contentHtml = processedContent.toString()
    return {
        id,
        contentHtml,
        ...matterResult.data
    }
}
