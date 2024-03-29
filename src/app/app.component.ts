import { Component, OnInit } from '@angular/core';

interface Subject {
    name: string;
    terms: {
        name: string,
        definition: string,
        citation: string,
        isConflict: boolean,
        summary: {
            name: string,
            description: string,
            citation: string,
            isConflict: boolean,
        }[]
    }[];
}

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
    public title = 'cs_note';
    public isShowCitations: boolean = false;
    private isShowCitationsKey: string = 'isShowCitations';
    public subjects: Subject[] = [
        {
            name: '線代',
            terms: []
        },
        {
            name: '離散',
            terms: []
        },
        {
            name: '資結',
            terms: [{
                name: 'Ordered (Linear) List',
                definition: '有順序的list',
                citation: 'Horowitz P.64',
                isConflict: false,
                summary: []
            }, {
                name: 'Sparse Matrix',
                definition: '有很多零的matrix。用linked list實作。',
                citation: 'Horowitz P.72',
                isConflict: false,
                summary: []
            }, {
                name: 'Stack',
                definition: 'First In Last Out',
                citation: 'Horowitz P.107',
                isConflict: false,
                summary: []
            }, {
                name: 'Queue',
                definition: 'First In First Out',
                citation: 'Horowitz P.114',
                isConflict: false,
                summary: []
            }, {
                name: 'Tree',
                definition: '不可為空。',
                citation: 'Horowitz P.192',
                isConflict: false,
                summary: [
                    {
                        name: 'Level of a Node (Horowitz)',
                        description: 'root定為level = 1，往下level越大，該點所在level即為該點的level。',
                        citation: 'Horowitz P.193',
                        isConflict: true,
                    },
                    {
                        name: 'Depth of a Node (楓葉)',
                        description: '從root至該點所需經過的edge數。root定為depth = 0。',
                        citation: '楓葉 P.1177',
                        isConflict: true,
                    },
                    {
                        name: 'Height of a Node (楓葉)',
                        description: '從該點往下至最遠的leaf所需經過的edge數。若該點即為leaf，則為零。',
                        citation: '楓葉 P.1177',
                        isConflict: false,
                    },
                    {
                        name: 'Height (Depth) of a Tree (Horowitz)',
                        description: 'tree的所有node當中最大的level',
                        citation: 'Horowitz P.194',
                        isConflict: true,
                    },
                    {
                        name: 'Height of a Tree (楓葉)',
                        description: 'root的height',
                        citation: '楓葉 P.1177',
                        isConflict: true,
                    },
                    {
                        name: '"A" Level of a Tree (楓葉)',
                        description: '一個tree的level包含所有擁有相同depth的點。',
                        citation: '楓葉 P.1177',
                        isConflict: false,
                    },
                ]
            }, {
                name: 'Free Tree',
                definition: 'A connected, acyclic, undirected graph。沒有root node。',
                citation: '楓葉 P.1172',
                isConflict: false,
                summary: []
            }, {
                name: 'Rooted Tree',
                definition: 'A connected, acyclic, undirected graph。其中一個node為root node。',
                citation: '楓葉 P.1176',
                isConflict: false,
                summary: []
            }, {
                name: 'Ordered Tree',
                definition: '需要考慮child順序的rooted tree',
                citation: '楓葉 P.1177',
                isConflict: false,
                summary: []
            }, {
                name: 'Binary Tree',
                definition: '可為空。（因為這樣才能套用binary tree的定義recursively。）',
                citation: 'Horowitz P.197',
                isConflict: false,
                summary: [
                    {
                        name: 'Full Binary Tree (Horowitz)',
                        description: '若tree的depth為k，則有2^k - 1個node。（node全滿）',
                        citation: 'Horowitz P.201',
                        isConflict: true,
                    },
                    {
                        name: 'Full Binary Tree (楓葉)',
                        description: 'binary tree內的每個node的child數不是0就是2。\n楓葉利用此定義解決child順序問題。當一個node只有一個child時，有可能child在左邊或右邊。可以插入第二個child，這個child沒有child。原本child下面也插入兩個無child的child。因此可以透過是否有child來判斷是左child還是右child。',
                        citation: '楓葉 P.1178',
                        isConflict: true,
                    }, {
                        name: 'Positional Tree (楓葉)',
                        description: '用label區分child的順序。可用來區分每個node有2個以上child的tree。',
                        citation: '楓葉 P.1178-1179',
                        isConflict: false,
                    },
                    {
                        name: 'Complete Binary Tree (Horowitz)',
                        description: '若tree的點數為n，depth為k，則此tree的n個點依序對應到一個depth為k的full binary tree的前n個點。（node可能不是滿的）',
                        citation: 'Horowitz P.201',
                        isConflict: true,
                    },
                    {
                        name: 'Complete k-ary Tree (楓葉)',
                        description: '所有leaf都有相同的depth，所有internal node的degree都為k。所以depth為h的complete binary tree有2^h - 1個node。',
                        citation: '楓葉 P.1179',
                        isConflict: true,
                    },
                ]
            }, {
                name: 'Threaded Binary Tree',
                definition: 'Binary Tree的leaf有很多null pointer。Threaded Binary Tree將左null pointer指向inorder的上一個node，將右null pointer指向inorder的下一個node。',
                citation: 'Horowitz P.216',
                isConflict: false,
                summary: []
            }, {
                name: 'Max Heap',
                definition: '一個complete binary tree且parent的key皆不小於child的key。',
                citation: 'Horowitz P.224',
                isConflict: false,
                summary: []
            }, {
                name: 'Binary Search Tree (Horowitz)',
                definition: '一個binary tree，並且滿足左子樹的node都小於root，右子樹的node都大於root。（Horowitz沒有禁止重複key，只是書上假設不重複。）',
                citation: 'Horowitz P.231-232',
                isConflict: true,
                summary: []
            }, {
                name: 'Binary Search Tree (楓葉)',
                definition: '一個binary tree，並且滿足左子樹的node都小於等於root，右子樹的node都大於等於root。',
                citation: '楓葉 P.287',
                isConflict: true,
                summary: []
            }, {
                name: 'Selection Tree',
                definition: '用來合併k個sorted array。',
                citation: 'Horowitz P.240',
                isConflict: false,
                summary: [
                    {
                        name: 'Winner Tree',
                        description: '把k個run的隊頭拿出來倆倆比較，贏的成為parent的key，贏的繼續往上比。直到得出總冠軍。',
                        citation: 'Horowitz P.241',
                        isConflict: false,
                    },
                    {
                        name: 'Loser Tree',
                        description: '把k個run的隊頭拿出來倆倆比較，輸的成為parent的key，贏的繼續往上比。直到得出總冠軍。root的key為冠軍賽的輸家。在root上面新增另一個node，紀錄總冠軍。當取出總冠軍後，要讀出下一個隊頭更新tree。Loser Tree比Winner少需要讀取sibling node。',
                        citation: 'Horowitz P.243',
                        isConflict: false,
                    }
                ]
            }, {
                name: 'Disjoint Sets',
                definition: '互相沒有交集的sets。每個set的每個node指向另一個node，無cycle。有Union、Find兩個函數。',
                citation: 'Horowitz P.255',
                isConflict: false,
                summary: [
                    {
                        name: 'simpleUnion',
                        description: '把函數參數第一個set的root指向第二個set的root。會產生skewed tree。',
                        citation: 'Horowitz P.248-249',
                        isConflict: false
                    },
                    {
                        name: 'simpleFind',
                        description: '沿著node至root的路徑找root。不做其他事。n個simpleUion + n個simpleFind的worst case為O(n^2)。',
                        citation: 'Horowitz P.250',
                        isConflict: false
                    },
                    {
                        name: 'weightedUnion',
                        description: '紀錄每個set的node數，將node數比較大的set的root設為node數比較小的set的root的parent。u個weightedUnion + f個simpleFind的worst case為O(u+flog(u))。',
                        citation: 'Horowitz P.252',
                        isConflict: false
                    },
                    {
                        name: 'collapsingFind',
                        description: '在尋找root的過程中，順便把沿途的node設為root的child。假設有n個set，且u>=n/2，則u個weightedUnion + f個collapsingFind的worst case為O(n+fα(f+n, n))。α為Ackerman反函數，增長速度非常小。',
                        citation: 'Horowitz P.253-255',
                        isConflict: false
                    }
                ]
            }, {
                name: 'Binary Tree的種數',
                definition: '若node數為n，則有C(2n,n)/(n+1)種。為Catalan Number。因為binary tree的左右子樹也為binary tree，與Catalan Number的遞迴定義相同。',
                citation: 'Horowitz P.259',
                isConflict: false,
                summary: []
            }, {
                name: 'Binary Tree的平均樹高',
                definition: '從空的binary tree隨機插入n個node，樹高的期望值為O(log(n))。',
                citation: '楓葉 P.299-303',
                isConflict: false,
                summary: []
            }, {
                name: 'Articulation Point',
                definition: '移除此點會導致圖變成有兩個以上的connected component。可以用DFS找出back edge(指向ancestor的edge)，算出dfn與low。如果有一個點的child的low比較大，則此點為articulation point。若root(DFS的起點)有兩個child以上，則root也為articulation point。',
                citation: 'Horowitz P.286',
                isConflict: false,
                summary: []
            }, {
                name: 'Biconnected Component',
                definition: '不存在articulation point的component。',
                citation: 'Horowitz P.286',
                isConflict: false,
                summary: []
            }, {
                name: 'Adjacency List',
                definition: '用來表示undirected graph。用一個陣列列出所有node，然後每個node各自指向一個列出鄰點的linked list。',
                citation: 'Horowitz P.281',
                isConflict: false,
                summary: [],
            }]
        },
        {
            name: '演算法',
            terms: [{
                name: 'Kruskal\'s Algorithm',
                definition: '一次選一條最小的且不會造成cycle的edge。最後可得到MST。time complexity：O(ElogE)',
                citation: 'Horowitz P.292-296 楓葉P.633 (time complexity)',
                isConflict: false,
                summary: [],
            }]
        },
        {
            name: '計組',
            terms: [{
                name: 'Desgin Principle',
                definition: 'There 4 design principle for hardware design.',
                citation: '',
                isConflict: false,
                summary: [{
                    name: 'Smaller is faster',
                    description: '越小越快',
                    citation: '',
                    isConflict: false,
                }, {
                    name: 'Good design demands compromise',
                    description: '綜合考慮',
                    citation: '',
                    isConflict: false,
                }, {
                    name: 'Make the common case fast',
                    description: '常用的要速度快',
                    citation: '',
                    isConflict: false,
                }]
            }, {
                name: 'jal',
                definition: 'Jump and Link. It saves the $ra automatically. Jump to the specified byte address.',
                citation: '',
                isConflict: false,
                summary: []
            }, {
                name: 'branch',
                definition: 'jump to the specified "relative" address byte with a condition. Need to add 1 before adding the relative address.',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Write-Through',
                definition: 'When the cache data is changed, the change is also written to the memory. Virtual memory doesn\'t have write-through, it\'s too slow.',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Write-Back',
                definition: 'When the cache changes, the change doesn\'t write to memory immediately.',
                citation: '',
                isConflict: false,
                summary: [],
            }]
        },
        {
            name: 'OS',
            terms: [{
                name: 'RAID 0',
                definition: 'block-level striping, no mirroring or parity',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 1',
                definition: 'mirroring, no parity or striping',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 2',
                definition: 'bit-level striping with Hamming-code parity',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 3',
                definition: 'byte-level striping, parity is in one disk',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 4',
                definition: 'block-level striping, parity is in one disk',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 5',
                definition: 'block-level striping, distributed parity',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 6',
                definition: 'block-level striping, double distributed parity',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 0+1',
                definition: 'create stripes from an array of disks, then mirror them',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'RAID 1+0',
                definition: 'mirror the disks, then create stripes from the mirrored disks',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Banker\'s Alogorithm',
                definition: 'Need: the "remaining" resouces needed for the thread',
                citation: '',
                isConflict: false,
                summary: [{
                    name: 'Safety Algorithm',
                    description: 'Set Finish to true if there are enough resources available to complete a process, retrieve the allocations from the process. ',
                    citation: '',
                    isConflict: false,
                }, {
                    name: 'Resource-Request Algorithm',
                    description: 'If there are enough resources and the resulting system is in a safe state, grant the request.',
                    citation: '',
                    isConflict: false,
                }, {
                    name: 'Memory-Mapped Files',
                    description: 'Map a file to memory to avoid disk I/O. Use mmap system call. Some system requires manually manage the memory-mapped files, they are mapped to user space. Solaris maps files to memory automatically, they\'re mapped to kernel space instead.',
                    citation: '',
                    isConflict: false,
                },],
            }, {
                name: 'Cache Miss Type',
                definition: 'There are 4 types of cahe misses according to pillar book.',
                citation: '',
                isConflict: false,
                summary: [
                    {
                        name: 'Compulsory',
                        description: 'Happen when the memory is referenced for the first time.',
                        citation: '',
                        isConflict: false,
                    },
                    {
                        name: 'Capacity',
                        description: 'Happen when the cache size is not enough to hold all data.',
                        citation: '',
                        isConflict: false,
                    },
                    {
                        name: 'Conflict',
                        description: 'Happen when the data was in the cache, but got evicted because there was a conflict and the data was replaced by another data.',
                        citation: '',
                        isConflict: false,
                    },
                    {
                        name: 'Coherency',
                        description: 'Happen when the data becomes invalid because the data has been changed by another processor.',
                        citation: '',
                        isConflict: false,
                    },
                ]
            }, {
                name: 'Copy-On-Write',
                definition: 'Copy the shared memory for the process that wants to write the data.',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'fork()',
                definition: 'fork() creates a child process and returns the pid of the child process. In the child process, it will return 0. fork() copies the current values of the variables and starts from the line of code where it is called.',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Hard Link vs Symbolic (Soft) Link',
                definition: 'Hard link points to the inode of the file. Symbolic link points to the file itself. When the file is delete, hard link still points to the inode, but symbolic link points to nothing. Files are store in an inode, which is a block of data on disk in a UNIX file system.',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Inverted Page Table',
                definition: '',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Hash-Based Page Table',
                definition: '',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'Multi-level Page Table',
                definition: '',
                citation: '',
                isConflict: false,
                summary: [],
            }, {
                name: 'File Allocation',
                definition: '',
                citation: '',
                isConflict: false,
                summary: [{
                    name: 'Contiguous Allocation',
                    description: 'Allocate contiguous blocks for the file. If the space is not enough, it can use "extent" to extend the space, link the file to another contiguous blocks of the storage.',
                    citation: '',
                    isConflict: false,
                }, {
                    name: 'Linked Allocation',
                    description: 'Allocate a linked list of blocks. Can use FAT (file allocation table) to speed up the random access time, FAT is stored in the beginning of the file, it\'s a linked link of block numbers. The read head only needs to read the FAT to know where to read, doesn\'t need to read ',
                    citation: '',
                    isConflict: false,
                }, {
                    name: 'Indexed Allocation',
                    description: '.',
                    citation: '',
                    isConflict: false,
                }],
            },]
        },
    ];
    private keyword: string = '';

    public ngOnInit(): void {
        let temp = localStorage.getItem(this.isShowCitationsKey);
        if (temp == 'true') {
            this.isShowCitations = true;
        } else if (temp == 'false') {
            this.isShowCitations = false;
        }
    }

    public onToggleCitation(event: any): void {
        this.isShowCitations = event.currentTarget.checked;
        localStorage.setItem(this.isShowCitationsKey, this.isShowCitations.toString());
    }

    public isMatchKeyword(name: string): boolean {
        if (this.keyword == '') return true;
        return name.toLowerCase().includes(this.keyword);
    }

    public onSearch(event: any): void {
        this.keyword = event.currentTarget.value.toLowerCase();
    }
}
