const Dropdwn = () => {
    return ( <div>
    <select name="category" id="category-select" className="bg-lightblue rounded-15 p-2 cursor-pointer text-background ml-5 mt-5" >
  <option value="kosmetik">Kosmetik</option>
  <option value="indretning">Indretning</option>
  <option value="mad">Mad</option>
</select>
    </div> );
}
 
export default Dropdwn;