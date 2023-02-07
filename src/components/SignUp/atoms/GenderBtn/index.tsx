import { GenderBtnProps } from "../../../../types"

const GenderBtn = ({gender,myGender,onClick}:GenderBtnProps) => (
      <>
        <input 
          defaultChecked={gender === myGender} 
          type="radio" id={myGender} 
          name="category" 
          onClick={onClick}
        />
        <label htmlFor={myGender}>
          {myGender}
        </label>
      </>
)

export default GenderBtn;