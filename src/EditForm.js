import { useState} from 'react';

export const EditForm = ({liffObject, isLogin}) => {
  const [formContent, setFormContent] = useState(undefined)

  if (!formContent) return;
  return <>
    <div className={'container'}>
      <div className='item'>
        <input
          type="text"
          value={formContent.title}
          onChange={(e) => {
            setFormContent({...formContent, title: e.target.value })
          }}
          placeholder="title"
        />
      </div>
      <div className='item'>
        <textarea
          value={formContent.content}
          onChange={(e) => {
            setFormContent({...formContent, content: e.target.value })
          }}
          rows={5}
          placeholder="content"
        />
      </div>
      <div className='item'>
        <button >
          submit
        </button>
      </div>
    </div>
  </>
}
