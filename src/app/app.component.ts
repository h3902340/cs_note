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
            },]
        },
        {
            name: '演算法',
            terms: []
        },
        {
            name: '計組',
            terms: []
        },
        {
            name: '計結',
            terms: []
        },
        {
            name: 'OS',
            terms: []
        },
    ];

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
}
