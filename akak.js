class Node {
    constructor(value) {
      this.value = value;
      this.next = null;
    }
  }
   //  노드 생성

  class LinkedList {
    constructor() {
      this.head = null;
    }                           
    //   링크스리스트생성


    push(value) {
      const node = new Node(value);   
                // 푸시할 노드를 생성
  
      if (this.head === null) {
        this.head = node;
        return;
      }
                // 헤드에 첫 노드의 주소를 넣는다

      let cur = this.head;
  
      while (cur.next) {
        cur = cur.next;
      }
// 첫 노드의 주소가 들어가면 노드1.next -> 
// cur.next === 노드1.next.next
  
      cur.next = node;
      
    }
  }
  


  const LinkedList = new LinkedList();
  
  LinkedList.push(1);
  LinkedList.push(2);
  LinkedList.push(3);
  
  console.log
  