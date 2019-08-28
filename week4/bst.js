function BTNode(value) {
    this.val = value;
    this.left = null;
    this.right = null;
}
function BST() {
    this.root = null;
    
    this.add = function(value, runner){
        if(this.root == null){
            this.root = new BTNode(value)
            return this
        }
        else if(runner == null){
            console.log(runner)
            runner = new BTNode(value);
            return this
        } else {
            if(value > runner.value){
                let runner = runner.right
                this.add(value, runner)
            }
            else if (value <= runner.value){
                let runner = runner.left
                this.add(value, runner)
            }
        }
    }
}

let searchTree = new BST()

console.log(searchTree.add(4).add(7))
