class Node{
    constructor(val=undefined){
        this.val=val;
        this.left=null;
        this.right=null;
    }
}
class Stack{
    constructor(){
        this.st=[];
    }
    push(x){
        this.st.push(x);
    }
    pop(){
        if(!this.isEmpty())
        return this.st.pop()
        else
        return -1;
    }
    top(){
        return this.st[this.st.length-1];
    }
    isEmpty(){
        if(this.st.length===0)
        return 1;
        else
        return 0;
    }
}
class Bst{
    constructor(){
        this.root=new Node();
    }
    Insert(x){
        if(this.root.val===undefined){
            this.root.val=x;
        }
        else{
            let temp=this.root;
            while(true){
                if(x<=temp.val){
                    if(temp.left!=null){
                        temp=temp.left;
                    }
                    else{
                    let newnode= new Node(x);
                    temp.left=newnode;
                    break;
                    }   
                }
                else if(x>temp.val){
                    if(temp.right!=null){
                        temp=temp.right;
                    }
                    else{
                        let newnode= new Node(x);
                        temp.right=newnode;
                        break;
                    }
                }
            }
        }
    }
    
    Search(x){
        if(this.root.val===undefined)
        return -1;
        let temp=this.root;
        while(true){
            if(x===temp.val)
            return 1;
            else if(x<temp.val){
                if(temp.left!=null)
                temp=temp.left;
                else
                return -1;
            }
            else if(x>temp.val){
                if(temp.right!=null)
                temp=temp.right;
                else
                return -1
            }
        }

    }
    PreOrderRecursive(temp=this.root){
        if(temp==null||temp.val===undefined)
        return;
        console.log(temp.val);
        this.PreOrderRecursive(temp.left);
        this.PreOrderRecursive(temp.right);
    }
    PreOrderIterative(){
        let st=new Stack();
        if(this.root.val===undefined)
        return ;
        st.push(this.root);
        while(!st.isEmpty()){
            let temp=st.pop();
            console.log(temp.val);
            if(temp.right)
            st.push(temp.right);
            if(temp.left)
            st.push(temp.left);
        }

    }

}

let bst1=new Bst();
bst1.Insert(10);
bst1.Insert(5);
bst1.Insert(15);
bst1.Insert(7);
bst1.Insert(11);
bst1.Insert(16);
bst1.Insert(13);
bst1.Insert(2);
bst1.Insert(25);
bst1.Insert(6);
bst1.PreOrderRecursive();
bst1.PreOrderIterative();




