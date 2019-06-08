describe("About Arrays", function() {

  // We shall contemplate truth by testing reality, via spec expectations.  
  it("should create arrays", function() {
    let emptyArray = [];
    expect(typeof(emptyArray)).toBe('object'); // A mistake?-- http:javascript.crockford.com/remedial.html
    expect(emptyArray.length).toBe(0);

    let multiTypeArray = [0, 1, "two", function() { return 3; }, {value1: 4, value2: 5}, [6, 7]];
    expect(multiTypeArray[0]).toBe(0);
    expect(multiTypeArray[2]).toBe('two');
    expect(multiTypeArray[3]()).toBe(3);
    expect(multiTypeArray[4].value1).toBe(4);
    expect(multiTypeArray[4]["value2"]).toBe(5);
    expect(multiTypeArray[5][0]).toBe(6);
    expect(multiTypeArray[5][1]).toBe(7);
  });

  it("should understand array literals", function() {
    let array = [];
    expect(array).toEqual([]);
    
    array[0] = 1;
    expect(array).toEqual([1]);
    
    array[1] = 2;
    expect(array).toEqual([1, 2]);
    
    array.push(3);
    expect(array).toEqual([1, 2, 3]);
  });

  it("should understand array length", function() {
    let fourNumberArray = [1, 2, 3, 4];

    expect(fourNumberArray.length).toBe(4);
    fourNumberArray.push(5, 6);
    expect(fourNumberArray.length).toBe(6);

    let tenEmptyElementArray = new Array(10); 
    expect(tenEmptyElementArray.length).toBe(10);

    tenEmptyElementArray.length = 5;
    expect(tenEmptyElementArray.length).toBe(5);
  });

  it("should slice arrays", function() {
    let array = ["peanut", "butter", "and", "jelly"];
    
    expect(array.slice(0, 1)).toEqual(['peanut']);
    expect(array.slice(0, 2)).toEqual(['peanut', 'butter']);
    expect(array.slice(2, 2)).toEqual([]);
    expect(array.slice(2, 20)).toEqual(['and','jelly']);
    expect(array.slice(3, 0)).toEqual([]);
    expect(array.slice(3, 100)).toEqual(['jelly']);
    expect(array.slice(5, 1)).toEqual([]);
  });

  it("should know array references", function() {
    let array = [ "zero", "one", "two", "three", "four", "five" ];

    function passedByReference(refArray) {
      refArray[1] = "changed in function";
    }
    passedByReference(array);
    expect(array[1]).toBe('changed in function');

    let assignedArray = array;
    assignedArray[5] = "changed in assignedArray";
    expect(array[5]).toBe('changed in assignedArray');

    let copyOfArray = array.slice();
    copyOfArray[3] = "changed in copyOfArray";
    expect(array[3]).toBe('three');
  });

  it("should push and pop", function() {
    let array = [1, 2];
    array.push(3);

    expect(array).toEqual([1,2,3]);
    
    let poppedValue = array.pop();
    expect(poppedValue).toBe(3);
    expect(array).toEqual([1, 2]);
  });

  it("should know about shifting arrays", function() {
    let array = [1, 2];

    array.unshift(3);
    expect(array).toEqual([3, 1, 2]);
    
    let shiftedValue = array.shift();
    expect(shiftedValue).toEqual(3);
    expect(array).toEqual([1, 2]);
  });  
});
