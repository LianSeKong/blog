import Mock from 'mockjs'
import querystring from 'querystring'

Mock.mock('/api/blogtype', 'get', {
    code: 200,
    msg: '',
    'data|10-20': [
        {
            'id|+1': 1,
            name: '分类@id',
            'articleCount|1-100': 1,
            "order|+1": 1
        },
    ]
})


Mock.mock(/^\/api\/blog(\?.+)?$/, 'get', function(options) {
    const q = querystring.parse(options.url)
    return Mock.mock({
        code: 200,
        msg: '',
        'data|10-20': {
            "total|2000-3000": 0,
            [`row|${q.limit || 10}`]: [
                {
                    id: '@guid',
                    title: '@ctitle(10, 50)',
                    description: '@cparagraph(1, 10)',
                    category: {
                        'id|1-10': 0,
                        name: '分类@id'
                    },
                    'scanNumber|0-3000': 0,
                    "commentNumber|0-300": 30,
                    thumb: Mock.Random.image('300x250', '#000', '#fff', 'random image' ),
                    createDate: `@date('T')`
                }
            ]
        }
    })
})

Mock.mock(/^\/api\/blog\/[^/]+$/, 'get', {
    code: 200,
    msg: '',
    data: {
        id: '@guid',
        title: 'CoRS跨域方案详解',
        category: {
            'id|1-10': 0,
            name: '分类@id'
        },
        'scanNumber|0-1000': 0,
        "commentNumber|0-100": 0,
        description: '@cparagraph(1, 10)',
        createDate: `@date('T')`,
        toc: [
            {name: '概述1', anchor: 't1'},
            {name: '概述2', anchor: 't2'},
        ],
        htmlContent: `
           
    
    <main class="main container-fluid" role="main"><div class="body-container container-fluid" data-spy="scroll" data-target="#toc">

    <h1 class="title">The Great Stanford Hash-Off</h1>
    
    <hr>
    
    <p class="attribution">
    
    </p>
    
    
        <div class="row">
            <div class="col-xs-12 col-md-10" id="content" <=""><!-- This boilerplate inserts formatted due date -->
    
    <!--  Boilerplate content for assignment index page -->
    
    <h2 id="due-friday-march-5-at-1130-am-pacific">Due Friday, March 5 at 11:30 am Pacific</h2>
    
    <ul>
      <li>Submissions received by due date receive a small <strong>on-time bonus</strong>.</li>
      <li>All students are granted a pre-approved extension or "grace period" of 48 hours after the due date. Late submissions are accepted during the grace period with no penalty.</li>
      <li>The <strong>grace period expires Sun, Mar 7 at 11:30 am Pacific</strong>, after which we cannot accept further late submissions.</li>
      <li>In this course, we express all date/times in <a href="https://www.timeanddate.com/worldclock/@5398563" title="Current time in Pacific">Pacific time GMT -8</a>. Our Paperless submission system also displays/records due dates and submission times in Pacific time.</li>
    </ul>
    
    <hr>
    
    <p>Hash tables are one of the most ubiquitous data structures in software engineering, and a lot of effort has been placed into getting them to work quickly and efficiently. In lecture, we coded up chained hashing. We also talked about two other hashing approaches:</p>
    
    <ul>
      <li><strong><em>Linear Probing:</em></strong> A hashing strategy where items can “leak out” of the slots they’re supposed to stay in. This strategy is surprisingly fast in practice!</li>
      <li><strong><em>Robin Hood Hashing:</em></strong> This slight modification on linear probing “smooths out” the cost of lookups in a linear probing table, which leads to some interesting consequences.</li>
    </ul>
    
    <p>Your task in this assignment is to code up these two hashing strategies and evaluate their performance against chained hashing. How do they hold up in practice? Which hash table implementations tend to work well in which scenarios?</p>
    
    <p><strong><em>Due Friday, March 5th at 11:30AM.</em></strong>
    <strong><em>You are welcome to work in pairs on this assignment.</em></strong></p>
    
    <p>As usual, we recommend making slow and steady progress on this assignment throughout the week rather than trying to do everything here in one sitting. Here’s our recommended timetable for this assignment:</p>
    
    <ul>
      <li>Aim to complete the enumeration warmup the day this assignment goes out.</li>
      <li>Aim to complete the Linear Probing Warmup the day this assignment goes out.</li>
      <li>Aim to complete the Linear Probing Coding component within three days.</li>
      <li>Aim to complete the Robin Hood Warmup within three days.</li>
      <li>Aim to complete the Robin Hood Coding component within six days.</li>
      <li>Aim to complete the Performance Analysis component within seven days.</li>
    </ul>
    
    <h2 id="problem-one-enumerations-warmup">Problem One: Enumerations Warmup</h2>
    <p>At a few points in this assignment, you’ll be asked to work with <strong><em>enumerated types</em></strong>, a form of custom C++ type representing one out of several different options. We haven’t used enumerated types before this assignment, so in this section we figured we’d give you the rundown. 😃</p>
    
    <p>To kick things off, consider the following C++ code:</p>
    <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">enum</span> <span class="k">class</span> <span class="nc">StudentType</span> <span class="p">{</span>
        <span class="n">FRESHMAN</span><span class="p">,</span>           
        <span class="n">SOPHOMORE</span><span class="p">,</span>          
        <span class="n">JUNIOR</span><span class="p">,</span>             
        <span class="n">SENIOR</span><span class="p">,</span>             
        <span class="n">SUPER_SENIOR</span><span class="p">,</span>       
        <span class="n">COTERM</span><span class="p">,</span>             
        <span class="n">MS_STUDENT</span><span class="p">,</span>         
        <span class="n">PHD_STUDENT</span><span class="p">,</span>        
        <span class="n">SCPD_STUDENT</span>        
    <span class="p">};</span>                      
    </code></pre></div></div>
    <p>This defines a new type called <code class="language-c++ highlighter-rouge"><span class="n">StudentType</span></code>. Each variable of type <code class="language-c++ highlighter-rouge"><span class="n">StudentType</span></code> can take on one of the values listed above. For example, we can write code like this:</p>
    <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">StudentType</span> <span class="n">mia</span>   <span class="o">=</span> <span class="n">StudentType</span><span class="o">::</span><span class="n">FRESHMAN</span><span class="p">;</span>   
    <span class="n">StudentType</span> <span class="n">chase</span> <span class="o">=</span> <span class="n">StudentType</span><span class="o">::</span><span class="n">COTERM</span><span class="p">;</span>     
    <span class="n">StudentType</span> <span class="n">erika</span> <span class="o">=</span> <span class="n">StudentType</span><span class="o">::</span><span class="n">PHD_STUDENT</span><span class="p">;</span>
    </code></pre></div></div>
    <p>You can compare two <code class="language-c++ highlighter-rouge"><span class="n">StudentTypes</span></code> against one another using the == operator, reassign them using =, etc.</p>
    
    <p>Enumerated types are useful for remembering which of many mutually exclusive options a particular object happens to be in. You’ll make use of them in your linear probing hash table to remember whether a slot is empty, full, or a tombstone.</p>
    
    <p class="keith-deliverables">There are no deliverables for this part of the assignment; just make sure you’ve read the above code and understand it. 😃</p>
    
    <h2 id="problem-two-linear-probing-warmup">Problem Two: Linear Probing Warmup</h2>
    <p>The linear probing hash strategy that we talked about in Wednesday’s class is very different from the style of hash table (<strong><em>chained hashing</em></strong>) that we saw on Monday. Here’s a few of the differences:</p>
    <ul>
      <li>Each slot in a chained hash table is a bucket that can store any number of elements. Each slot in a linear probing table is either empty or holds a single element.</li>
      <li>Every element in a chained hash table ends up in the slot corresponding to its hash code. Elements in a linear probing table can leak out of their initial slots and end up elsewhere in the table.</li>
      <li>Deletions in a linear probing table use tombstones; deletions in chained hashing don’t require tombstones.
    Before moving on, we’d like you to answer a few short answer questions to make sure that you’re comfortable with linear probing as a collision resolution strategy.</li>
    </ul>
    
    <p>Before moving on, we’d like you to answer a few short answer questions to make sure that you’re comfortable with linear probing as a collision resolution strategy.</p>
    
    <div class="keith-deliverables numbered-questions">
      <p>Answer each of the following questions in the file <code class="language-c++ highlighter-rouge"><span class="n">ShortAnswers</span><span class="p">.</span><span class="n">txt</span><span class="p">.</span></code></p>
    
      <p>We have a linear probing table containing ten slots, numbered 0, 1, 2, …, and 9. For the sake of simplicity, we’ll assume that we’re hashing integers and that our hash function works by taking the input integer and returning its last digit. (This is a <em>terrible</em> hash function, by the way, and no one would actually do this. It’s just for the sake of exposition).</p>
    
      <ol>
        <li>
          <p>Draw the linear probing table formed by inserting 31, 41, 59, 26, 53, 58, 97, and 93, in that order, into an initially empty table with ten slots. Write out your table by writing out the contents of the slots, in order, marking empty slots with a period (.) character.</p>
        </li>
        <li>
          <p>Draw a <em>different</em> linear probing table that could be formed by inserting the same elements given above into an empty, ten-slot table in a different order than the one given above, or tell us that it’s not possible to do this. Assume that you’re using the same hash function.</p>
        </li>
        <li>
          <p>Which slots do you have to look at to see if the table from Q1 – the one formed by inserting the elements in the specific order we gave to you – contains the number 72?</p>
        </li>
        <li>
          <p>Which slots do you have to look at to see if the table from Q1 contains the number 137?</p>
        </li>
        <li>
          <p>Suppose you remove 41 and 53 from the linear probing table from Q1 using the tombstone deletion strategy described in class. Draw the resulting table, marking each tombstone slot with the letter T.</p>
        </li>
        <li>
          <p>Draw the table formed by starting with the table you came up with in Q5 and the inserting the elements 106, 107, and 110, in that order. Don’t forget to replace tombstones with newly-inserted values.</p>
        </li>
      </ol>
    </div>
    
    <h2 id="problem-three-implementing-linear-probing">Problem Three: Implementing Linear Probing</h2>
    <p>Your task in this part of the assignment is to implement the <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> type. Here’s the interface for that type, as given in the header file:</p>
    <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">LinearProbingHashTable</span> <span class="p">{</span>
    <span class="nl">public:</span>
        <span class="n">LinearProbingHashTable</span><span class="p">(</span><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&gt;</span> <span class="n">hashFn</span><span class="p">);</span>
        <span class="o">~</span><span class="n">LinearProbingHashTable</span><span class="p">();</span>
    
        <span class="kt">bool</span> <span class="n">contains</span><span class="p">(</span><span class="k">const</span> <span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&amp;</span> <span class="n">key</span><span class="p">)</span> <span class="k">const</span><span class="p">;</span>
    
        <span class="kt">bool</span> <span class="n">insert</span><span class="p">(</span><span class="k">const</span> <span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&amp;</span> <span class="n">key</span><span class="p">);</span>
        <span class="kt">bool</span> <span class="n">remove</span><span class="p">(</span><span class="k">const</span> <span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&amp;</span> <span class="n">key</span><span class="p">);</span>
    
        <span class="kt">bool</span> <span class="n">isEmpty</span><span class="p">()</span> <span class="k">const</span><span class="p">;</span>
        <span class="kt">int</span>  <span class="n">size</span><span class="p">()</span> <span class="k">const</span><span class="p">;</span>
    
        <span class="kt">void</span> <span class="n">printDebugInfo</span><span class="p">();</span>
    
    <span class="nl">private:</span>
        <span class="k">enum</span> <span class="k">class</span> <span class="nc">SlotType</span> <span class="p">{</span>
            <span class="n">TOMBSTONE</span><span class="p">,</span> <span class="n">EMPTY</span><span class="p">,</span> <span class="n">FILLED</span>
        <span class="p">};</span>
    
        <span class="k">struct</span> <span class="nc">Slot</span> <span class="p">{</span>
            <span class="n">std</span><span class="o">::</span><span class="n">string</span> <span class="n">value</span><span class="p">;</span>
            <span class="n">SlotType</span> <span class="n">type</span><span class="p">;</span>
        <span class="p">};</span>
    
        <span class="n">Slot</span><span class="o">*</span> <span class="n">elems</span><span class="p">;</span>
    
        <span class="cm">/* The rest is up to you to decide; see below */</span>
    <span class="p">};</span>
    </code></pre></div></div>
    
    <div class="keith-bbox">
      <p class="text-center"><strong><em>Endearing C++ Quirks, Part 1: <code class="language-c++ highlighter-rouge"><span class="n">string</span></code> versus <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">string</span></code></em></strong></p>
    
      <p>Inside header files, you have to refer to the string type as <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">string</span></code> rather than just string. Turns out that what we’ve been calling string is really named <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">string</span></code>. The line <code class="language-c++ highlighter-rouge"><span class="k">using</span> <span class="k">namespace</span> <span class="n">std</span><span class="p">;</span></code> that you’ve placed at the top of all your .cpp files essentially says “I’d like to be able to refer to things like <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">string</span></code>, <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">cout</span></code>, etc. using their shorter names <code class="language-c++ highlighter-rouge"><span class="n">string</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">cout</span></code>.” The convention in C++ is to not include the using namespace line in header files, so in the header we have to use the full name <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">string</span></code>.
    Think of it like being really polite. Imagine that the string type is a Supreme Court justice, a professor, a doctor, or some other job with a cool honorific, and she happens to be your sister. At home (in your <code class="language-c++ highlighter-rouge"><span class="p">.</span><span class="n">cpp</span></code> file), you call just call her string, but in public (in the <code class="language-c++ highlighter-rouge"><span class="p">.</span><span class="n">h</span></code> file), you’re supposed to refer to her as <code class="language-c++ highlighter-rouge"><span class="n">std</span><span class="o">::</span><span class="n">string</span></code>, the same way you’d call her Dr. <code class="language-c++ highlighter-rouge"><span class="n">string</span></code>, Prof. <code class="language-c++ highlighter-rouge"><span class="n">string</span></code>, Justice <code class="language-c++ highlighter-rouge"><span class="n">string</span></code>, or whatever other title would be appropriate.</p>
    </div>
    
    <p>The <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> type is analogous to <code class="language-c++ highlighter-rouge"><span class="n">Set</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> in that it stores a collection of strings with no duplicate elements allowed. However, it differs in a few key ways:</p>
    <ol>
      <li>The <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> type has its hash function provided to it when it’s created. In practice, a hash table should choose a hash function internally. This is both to make it easier to test things (we can construct tests where we know exactly where each element is going to land).</li>
      <li>The <code class="language-c++ highlighter-rouge"><span class="n">Set</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> type has no upper bound to how big it can get. For reasons that we’ll discuss later, the <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> type you’ll be implementing is built to have a fixed number of slots, which is specified in the constructor. (Specifically, you’re given a particular <code class="language-c++ highlighter-rouge"><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code>, and that <code class="language-c++ highlighter-rouge"><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> is built to work with a specific number of slots.) This means that there’s a maximum number of elements that can be stored in the table, since a linear probing table can’t store more than one element per slot.</li>
    </ol>
    
    <p>In terms of the internal representation of the <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code>: as with the <code class="language-c++ highlighter-rouge"><span class="n">HeapPQueue</span></code>, you also need to do all your own memory management, though we suspect this will be easier than the <code class="language-c++ highlighter-rouge"><span class="n">HeapPQueue</span></code> because the size of your hash table never changes. You should represent the hash table as an array of objects of the type Slot, where Slot is the struct type defined in <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code>. Each slot consists of a string, along with a variable of the enumerated type <code class="language-c++ highlighter-rouge"><span class="n">SlotType</span></code> indicating whether the slot is empty, full, or a tombstone. If the slot is empty or a tombstone, you should completely ignore the string value, since we’re pretending the slot is empty in that case. If the slot is not empty, the string value tells you what’s stored in that particular slot.</p>
    
    <p>We’ve provided you with a fairly extensive set of automated tests you can use to validate that your implementation works correctly. To assist you with testing, we’ve also provided an “Interactive Linear Probing” environment akin to Assignment 6’s “Interactive PQueue” button that lets you issue individual commands to a linear probing table to see what happens.</p>
    
    <div class="keith-deliverables">
      <p>Here’s our recommendation for how to complete this assignment:
    Implement the <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> type in <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span><span class="p">.</span><span class="n">h</span><span class="o">/</span><span class="p">.</span><span class="n">cpp</span></code>. To do so:</p>
      <ol>
        <li>Read over <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span><span class="p">.</span><span class="n">h</span></code> to make sure you understand what all the functions you’ll be writing are supposed to do.</li>
        <li>Add some member variables to <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span><span class="p">.</span><span class="n">h</span></code> so that you can, at a bare minimum, remember the hash function given to you in the constructor. (You’ll may or many not need more member variables later; we’re going to leave that up to you.) Remember that you need to do all your own memory management.</li>
        <li>Implement the constructor, which should create a table filled with empty slots and store the hash function for later use. You can determine how many slots your table should have by calling the <code class="language-c++ highlighter-rouge"><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">T</span><span class="o">&gt;::</span><span class="n">numSlots</span><span class="p">()</span></code> member function on <code class="language-c++ highlighter-rouge"><span class="n">hashFn</span></code>, which returns the number of slots that the hash function was constructed to work with.</li>
        <li>Implement the <code class="language-c++ highlighter-rouge"><span class="n">size</span><span class="p">()</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">isEmpty</span><span class="p">()</span></code> functions, along with the destructor. Both functions should run in time O(1). The <code class="language-c++ highlighter-rouge"><span class="n">size</span><span class="p">()</span></code> member function should return the number of elements currently in the table, rather than the number of slots in the table. (Do you see the distinction?) We also strongly recommend implementing <code class="language-c++ highlighter-rouge"><span class="n">printDebugInfo</span><span class="p">()</span></code> in a way that prints out the contents of the table, marking which slots are empty and which are nonempty. This will help you later on.</li>
        <li>Implement <code class="language-c++ highlighter-rouge"><span class="n">contains</span><span class="p">()</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">insert</span><span class="p">()</span></code>. For now, don’t worry about tombstones or removing elements. You should aim to get the basic linear probing algorithm working correctly.</li>
        <li>Confirm that you pass all the tests that don’t involve removing elements from the table, including the stress tests, which should take at most a couple of seconds each to complete. Don’t forget that, if you aren’t passing a test, you can set a breakpoint in the test and then run your code in the debugger to step through what’s going on. You can also use the Interactive Linear Probing option to explore your table in an interactive environment – preferably with the debugger engaged.</li>
        <li>Implement the <code class="language-c++ highlighter-rouge"><span class="n">remove</span><span class="p">()</span></code> function. You should use the tombstone deletion algorithm described in lecture. This may require you to change the code you’ve written so far:</li>
        <li>You may – or may not – need to change your code for <code class="language-c++ highlighter-rouge"><span class="n">contains</span><span class="p">()</span></code> to handle tombstones. It depends on how you implemented <code class="language-c++ highlighter-rouge"><span class="n">contains</span><span class="p">()</span></code>.</li>
        <li>You may – or may not – need to change your code for <code class="language-c++ highlighter-rouge"><span class="n">insert</span><span class="p">()</span></code> to handle tombstones. Remember to place elements in the first empty or tombstone slot that you find. (And make sure not to insert an element into the table if it’s already there!)</li>
        <li>Confirm that you pass all the provided tests, including the stress tests.</li>
      </ol>
    </div>
    
    <p>Some notes on this problem:</p>
    <ul>
      <li><strong><em>Do not implement contains, remove, or insert recursively.</em></strong> Some of the stress tests we’ll be subjecting your code to in the time tests will involve working with extremely full tables, and you can easily get a stack overflow this way because the call stack won’t be big enough to hold space for all the stack frames.</li>
      <li>Make sure you store the hash function that we provide you in the constructor and use that hash function throughout the table. Variables of type <code class="language-c++ highlighter-rouge"><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> are like other types of variables; you can assign them by writing code to the effect of <code class="language-c++ highlighter-rouge"><span class="n">hashFn1</span> <span class="o">=</span> <span class="n">hashFn2</span><span class="p">;</span></code>.</li>
      <li>If you have a variable of type <code class="language-c++ highlighter-rouge"><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> named <code class="language-c++ highlighter-rouge"><span class="n">hasnFn</span></code> and an element to hash named <code class="language-c++ highlighter-rouge"><span class="n">elem</span></code>, you can compute the hash code of <code class="language-c++ highlighter-rouge"><span class="n">elem</span></code> by writing <code class="language-c++ highlighter-rouge"><span class="n">hasnFn</span><span class="p">(</span><span class="n">elem</span><span class="p">)</span></code>.</li>
      <li>Remember that, like the <code class="language-c++ highlighter-rouge"><span class="n">Set</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> type, your <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> should not allow for duplicate elements. If the user wants to insert a string that’s already present, you should not insert a second copy.</li>
      <li>A common mistake in implementing this hash table is to try to set the element field of a <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> to <code class="language-c++ highlighter-rouge"><span class="nb">nullptr</span></code> when removing a string from the hash table, with the idea of saying “this string doesn’t exist any more.” That, unfortunately, doesn’t work. Remember that in C++, a string represents an honest-to-goodness string object, so you can’t have a “null string” the same way you can’t have a “null integer.” Unfortunately, it is legal C++ code to assign <code class="language-c++ highlighter-rouge"><span class="nb">nullptr</span></code> to a string, which C++ interprets as “please crash my program as soon as I get here” rather than “make a null string.” Instead, just change the type field to indicate that although there is technically a string in the slot, that string isn’t meaningful.</li>
      <li>Make sure not to read the contents of a string in a <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> if that <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> is empty. If the slot is empty, it means that the string value there isn’t meaningful. There are a lot of bugs that can arise if you accidentally read the string in a <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> when the slot is empty.</li>
      <li>Your table should be able to store any strings that the user wants to store, including the empty string.</li>
      <li>The <code class="language-c++ highlighter-rouge"><span class="n">contains</span></code>, <code class="language-c++ highlighter-rouge"><span class="n">insert</span></code>, and <code class="language-c++ highlighter-rouge"><span class="n">remove</span></code> functions need to function correctly even if the table is full. Specifically, <code class="language-c++ highlighter-rouge"><span class="n">insert</span></code> should return false because there is no more space, and <code class="language-c++ highlighter-rouge"><span class="n">remove</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">contains</span></code> should operate as usual. You may need to special-case the logic here – do you see why?</li>
      <li>You are encouraged to add private helper functions, especially if you find yourself writing the same code over and over again. Just don’t change the signatures of any of the existing functions. If you do define any helper functions, think about whether they should be marked <code class="language-c++ highlighter-rouge"><span class="k">const</span></code>. Specifically, helper functions that don’t change the hash table should be marked <code class="language-c++ highlighter-rouge"><span class="k">const</span></code>, while helper functions that do make changes to the table should not be <code class="language-c++ highlighter-rouge"><span class="k">const</span></code>.</li>
      <li>You are likely to run into some interesting bugs in the course of coding this one up, and when you do, don’t forget how powerful a tool the debugger is! Feel free to set breakpoints in the different test cases so that you can see exactly what your code is doing when it works and when it doesn’t work. Inspect the contents of your array of slots and make sure that it’s consistent with what you expect to see. Once you’ve identified the bug – and no sooner – edit your code to fix the underlying problem.</li>
      <li>You <strong><em>must not</em></strong> use any of the container types (e.g. <code class="language-c++ highlighter-rouge"><span class="n">Vector</span></code>, <code class="language-c++ highlighter-rouge"><span class="n">Set</span></code>, etc.) when solving this problem. Part of the purpose of this assignment is to let you see how you’d build all the containers up from scratch.</li>
    </ul>
    
    <div class="keith-bbox">
      <p class="text-center"><strong><em>Endearing C++ Quirks, Part 2: Returning Nested Types</em></strong></p>
    
      <p>There’s another charming personality trait of C++ that pops up when implementing member functions that return nested types. For example, suppose that you want to write a helper function in your <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> that returns a pointer to a <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code>, like this:</p>
      <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nl">private:</span>                    
        <span class="n">Slot</span><span class="o">*</span> <span class="nf">hsAreCute</span><span class="p">();</span>
    </code></pre></div>  </div>
    
      <p>In the <code class="language-c++ highlighter-rouge"><span class="p">.</span><span class="n">cpp</span></code> file, when you’re implementing this function, you need to give the full name of the <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> type when specifying the return type:</p>
      <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">LinearProbingHashTable</span><span class="o">::</span><span class="n">Slot</span><span class="o">*</span> <span class="n">LinearProbingHashTable</span><span class="o">::</span><span class="n">hsAreCute</span><span class="p">()</span> <span class="p">{</span>
        <span class="c1">// Wow, this pun lost a lot in translation.                    </span>
    <span class="p">}</span>                                          
    </code></pre></div>  </div>
    
      <p>While you need to use the full name <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span><span class="o">::</span><span class="n">Slot</span></code> in the return type of an implementation of a helper function, you don’t need to do this anywhere else. For example, this code is perfectly legal:</p>
      <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="n">LinearProbingHashTable</span><span class="o">::</span><span class="n">Slot</span><span class="o">*</span> <span class="n">LinearProbingHashTable</span><span class="o">::</span><span class="n">hsAreCute</span><span class="p">()</span> <span class="p">{</span>
        <span class="n">Slot</span><span class="o">*</span> <span class="n">h</span> <span class="o">=</span> <span class="k">new</span> <span class="n">Slot</span><span class="p">[</span><span class="mi">137</span><span class="p">];</span> <span class="c1">// Totally fine!                      </span>
        <span class="k">return</span> <span class="n">h</span><span class="p">;</span>                                                      
    <span class="p">}</span>                                                                  
    </code></pre></div>  </div>
    
      <p>Similarly, you don’t need to do this if the function takes a <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> as a parameter. For example, imagine you have this member function:</p>
      <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="nl">private:</span>                            
        <span class="kt">void</span> <span class="nf">iLostMoneyToA</span><span class="p">(</span><span class="n">Slot</span><span class="o">*</span> <span class="n">machine</span><span class="p">);</span>
    </code></pre></div>  </div>
    
      <p>You could implement this function without issue as</p>
      <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kt">void</span> <span class="n">LinearProbingHashTable</span><span class="o">::</span><span class="n">iLostMoneyToA</span><span class="p">(</span><span class="n">Slot</span><span class="o">*</span> <span class="n">machine</span><span class="p">)</span> <span class="p">{</span>
        <span class="c1">// Don't make the same mistake as me!                  </span>
    <span class="p">}</span>                                                          
    </code></pre></div>  </div>
    </div>
    
    <h2 id="problem-three-robin-hood-warmup">Problem Three: Robin Hood Warmup</h2>
    <p>Robin Hood hashing is a clever variation on linear probing that reduces the variance in the costs of insertions, deletions, and lookups. As a reminder, Robin Hood hashing is based on linear probing, but differs in the following ways:</p>
    <ol>
      <li>Each element in a Robin Hood hash table is annotated with the distance it is from its home slot. This distance is measured by the number of steps backwards you have to take, starting at that element, to get the index of its home slot. (As in linear probing, we wrap around the ends of the table if we reach that point.)</li>
      <li>Lookups in a Robin Hood hash table can stop early. Specifically, if the element we’re looking for is further from home than the currently-scanned table element, we know that the element we’re looking for isn’t in the table and can stop our search. (Do you see why the element can’t be there?)</li>
      <li>When inserting an element into a Robin Hood hash table, if the element being inserted is further from home than the element in the table slot being scanner, we displace the element in the table at that index, place the element we wanted to insert there, then continue onward as if we were inserting the displaced element all along. (We do not do anything if the distances are tied.)</li>
      <li>There are no tombstones in a Robin Hood hash table. Instead, when deleting an element, we use <strong><em>backwards-shift deletion</em></strong>: we shift elements back one spot in the table until we either (1) find an empty slot or (2) find an element in its natural home spot.</li>
    </ol>
    
    <p>Before coding up a Robin Hood hash table, few minutes to work through some quick short answer questions.</p>
    
    <div class="keith-deliverables numbered-questions">
      <p>Answer each of the following questions in the file <code class="language-c++ highlighter-rouge"><span class="n">ShortAnswers</span><span class="p">.</span><span class="n">txt</span></code>.</p>
    
      <p>We have a Robin Hood hash table containing ten slots, numbered 0, 1, 2, …, and 9. For the sake of simplicity, we’ll assume that we’re hashing integers and that our hash function works by taking the input integer and returning its last digit. (As before, this is a <em>terrible</em> hash function, and we’re doing this just for the sake of simplicity.)</p>
    
      <ol>
        <li>Draw the Robin Hood table formed by inserting 106, 107, 246, 145, 151, 103, 245, 108, and 221, in that order, into an initially empty table with ten slots. Write out your table by writing out the contents of the slots, in order, marking empty slots with a period (.) character. Below each table slot, indicate the distance it is from its home position, marking empty slots distances with a dash (-) character.</li>
        <li>Draw a <em>different</em> Robin Hood table that could be formed by inserting the same elements given above into an empty, ten-slot table in a different order than the one given above, or tell us that it’s not possible to do this. Assume that you’re using the same hash function.</li>
        <li>Which slots do you have to look at to see if the table from Q7 – the one formed by inserting the elements in the specific order we gave to you – contains the number 345? Remember that, with Robin Hood hashing, you can cut off a search for an element if the element you’re currently looking at is further from home than the element you’re searching for.</li>
        <li>Which slots do you have to look at to see if the table from Q7 contains the number 300?</li>
        <li>Draw the Robin Hood table formed by removing 151 from the table you drew in Q7. Use backward-shift deletion.</li>
        <li>Draw the Robin Hood table formed by removing 145 from the table you drew in Q11.</li>
      </ol>
    </div>
    
    <h2 id="problem-four-robin-hood-hashing">Problem Four: Robin Hood Hashing</h2>
    <p>Your next task is to implement the <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span></code> type, which represents a hash table implemented using Robin Hood hashing, as described in lecture. Here’s what we’ve provided you:</p>
    <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="k">class</span> <span class="nc">RobinHoodHashTable</span> <span class="p">{</span>
    <span class="nl">public:</span>
        <span class="n">RobinHoodHashTable</span><span class="p">(</span><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&gt;</span> <span class="n">hashFn</span><span class="p">);</span>
        <span class="o">~</span><span class="n">RobinHoodHashTable</span><span class="p">();</span>
    
        <span class="kt">bool</span> <span class="n">contains</span><span class="p">(</span><span class="k">const</span> <span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&amp;</span> <span class="n">key</span><span class="p">)</span> <span class="k">const</span><span class="p">;</span>
    
        <span class="kt">bool</span> <span class="n">insert</span><span class="p">(</span><span class="k">const</span> <span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&amp;</span> <span class="n">key</span><span class="p">);</span>
        <span class="kt">bool</span> <span class="n">remove</span><span class="p">(</span><span class="k">const</span> <span class="n">std</span><span class="o">::</span><span class="n">string</span><span class="o">&amp;</span> <span class="n">key</span><span class="p">);</span>
    
        <span class="kt">bool</span> <span class="n">isEmpty</span><span class="p">()</span> <span class="k">const</span><span class="p">;</span>
        <span class="kt">int</span>  <span class="n">size</span><span class="p">()</span> <span class="k">const</span><span class="p">;</span>
    
        <span class="kt">void</span> <span class="n">printDebugInfo</span><span class="p">();</span>
    
    <span class="nl">private:</span>
        <span class="k">static</span> <span class="k">const</span> <span class="kt">int</span> <span class="n">EMPTY_SLOT</span> <span class="o">=</span> <span class="cm">/* something */</span><span class="p">;</span>
    
        <span class="k">struct</span> <span class="nc">Slot</span> <span class="p">{</span>
            <span class="n">std</span><span class="o">::</span><span class="n">string</span> <span class="n">value</span><span class="p">;</span>
            <span class="kt">int</span> <span class="n">distance</span><span class="p">;</span>
        <span class="p">};</span>
    
        <span class="n">Slot</span><span class="o">*</span> <span class="n">elems</span><span class="p">;</span>
    
        <span class="cm">/* The rest is up to you to decide; see below */</span>
    <span class="p">};</span>
    </code></pre></div></div>
    
    <p>In many ways, what we’ve given you for <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span></code> is the same as that for the <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code>: the constructor takes in a <code class="language-c++ highlighter-rouge"><span class="n">HashFunction</span><span class="o">&lt;</span><span class="n">string</span><span class="o">&gt;</span></code> that lets you know how many slots to use, you need to support insert, contains, and remove, the table never grows, etc.</p>
    
    <p>There are, however, some notable differences. First, note that there’s no longer a <code class="language-c++ highlighter-rouge"><span class="n">SlotType</span></code> enumerated type. That’s because there are only two options for each table slot – either the slot is empty, or the slot is filled and the item there is some distance from home. <strong><em>You should mark slots empty by setting their distance value to the constant <code class="language-c++ highlighter-rouge"><span class="n">EMPTY_SLOT</span></code>.</em></strong> Any slot whose distance is not the value <code class="language-c++ highlighter-rouge"><span class="n">EMPTY_SLOT</span></code> is assumed to be full and to be the indicated number of spots away from home.</p>
    
    <p>Second, as the name suggests, this class should be implemented using Robin Hood hashing rather that linear probing. You may find parts of your <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> useful as starting points for your design of the <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span></code>, but the differences between the two table types (tracking elements’ distances from their home, displacing elements on insertions, cutting off searches early, backward-shift deletion, the lack of tombstones, and the different <code class="language-c++ highlighter-rouge"><span class="n">Slot</span></code> representation) will require you to rewrite each of the core functions (<code class="language-c++ highlighter-rouge"><span class="n">contains</span></code>, <code class="language-c++ highlighter-rouge"><span class="n">insert</span></code>, and <code class="language-c++ highlighter-rouge"><span class="n">remove</span></code>) to some degree.</p>
    
    <p>Here’s what you need to do:</p>
    
    <div class="keith-deliverables">
      <p>Implement the <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span></code> type in <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span><span class="p">.</span><span class="n">h</span><span class="o">/</span><span class="p">.</span><span class="n">cpp</span></code>. To do so:</p>
      <ol>
        <li>Add a member variable to <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span><span class="p">.</span><span class="n">h</span></code> to remember the hash function given to you in the constructor. You may need to add more data members later. Remember that you need to do all your own memory management.</li>
        <li>Implement the constructor, which should create an empty table and store the hash function for later use.</li>
        <li>Implement the <code class="language-c++ highlighter-rouge"><span class="n">size</span><span class="p">()</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">isEmpty</span><span class="p">()</span></code> functions, along with the destructor. The <code class="language-c++ highlighter-rouge"><span class="n">size</span><span class="p">()</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">isEmpty</span><span class="p">()</span></code> functions should run in time O(1). The <code class="language-c++ highlighter-rouge"><span class="n">size</span><span class="p">()</span></code> member function should return the number of elements currently the table, rather than the number slots in the table. We recommend implementing <code class="language-c++ highlighter-rouge"><span class="n">printDebugInfo</span><span class="p">()</span></code> in a way that prints out the contents of the table, which slots are empty, and how far away from home each element is.</li>
        <li>Implement <code class="language-c++ highlighter-rouge"><span class="n">contains</span><span class="p">()</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">insert</span><span class="p">()</span></code>. Remember that <code class="language-c++ highlighter-rouge"><span class="n">insert</span></code> may move elements and that <code class="language-c++ highlighter-rouge"><span class="n">contains</span></code> should cut off searches early when the element in question is too far from home.</li>
        <li>Confirm that you pass all the tests that don’t involve removing elements from the table, including the stress tests, which should take at most a couple of seconds each to complete. Feel free to use the “Interactive Robin Hood” option to test your code.</li>
        <li>Implement <code class="language-c++ highlighter-rouge"><span class="n">remove</span><span class="p">()</span></code>. You should use backward shift deletion to accomplish this, which should not require you to change the implementations of contains or insert.</li>
        <li>Confirm that you pass all the provided tests, including the stress tests.</li>
      </ol>
    </div>
    
    <p>Some notes on this problem:</p>
    <ul>
      <li>Do not implement <code class="language-c++ highlighter-rouge"><span class="n">contains</span></code>, <code class="language-c++ highlighter-rouge"><span class="n">insert</span></code>, or <code class="language-c++ highlighter-rouge"><span class="n">remove</span></code> recursively; this may cause stack overflows when working with large tables.</li>
      <li>You might find the <code class="language-c++ highlighter-rouge"><span class="n">swap</span></code> function, defined in <code class="language-c++ highlighter-rouge"><span class="o">&lt;</span><span class="n">algorithm</span><span class="o">&gt;</span></code>, useful here. It takes in two arguments and swaps them with one another. For example:
        <div class="language-c++ highlighter-rouge"><div class="highlight"><pre class="highlight"><code><span class="kt">int</span> <span class="n">x</span> <span class="o">=</span> <span class="mi">137</span><span class="p">,</span> <span class="n">y</span> <span class="o">=</span> <span class="mi">42</span><span class="p">;</span>               
    <span class="n">swap</span><span class="p">(</span><span class="n">x</span><span class="p">,</span> <span class="n">y</span><span class="p">);</span> <span class="c1">// Now x = 42, y = 137.</span>
    </code></pre></div>    </div>
      </li>
      <li>As with linear probing, make sure not to read the element field of a slot until you’ve checked that the slot isn’t empty. Otherwise, you’ll read a string that may or may not be in the table.</li>
      <li>When inserting an element, you should only displace an element if it is <em>strictly</em> closer to its home than the inserted element is to its home. For example, if the element you’re inserting is two steps from home and the currently-scanned element is two steps from home as well, you should not displace that element.</li>
      <li>When removing an item from the table, you’ll need some way to refer to “the slot after the current one, wrapping around.” It’s easy to remember the “slot after the current one” bit, and easy to forget the “wrapping around” part. 😃</li>
      <li>You <strong><em>must not</em></strong> use any of the container types (e.g. <code class="language-c++ highlighter-rouge"><span class="n">Vector</span></code>, <code class="language-c++ highlighter-rouge"><span class="n">Set</span></code>, etc.) when solving this problem. Part of the purpose of this assignment is to let you see how you’d build all the containers up from scratch.</li>
    </ul>
    
    <h2 id="problem-five-performance-analysis">Problem Five: Performance Analysis</h2>
    <p>We implemented chained hashing in class, and we’ve included a <code class="language-c++ highlighter-rouge"><span class="n">ChainedHashTable</span></code> type in the <code class="language-c++ highlighter-rouge"><span class="n">Demos</span><span class="o">/</span></code> directory along the lines of the two hash tables you built here. You just implemented a linear probing table and a Robin Hood hash table. The question then is – how do they stack up against one another?</p>
    
    <p>Choose the “Performance Analysis” button from the main menu. This option will run the following workflow on each of the three table types:</p>
    <ul>
      <li>Insert all words in the file <code class="language-c++ highlighter-rouge"><span class="n">EnglishWords</span><span class="p">.</span><span class="n">txt</span></code> into an empty hash table, measuring the average cost of each successful insertion.</li>
      <li>Insert those words again in random order, measuring the cost of each unsuccessful insertion. (These insertions will fail because these hash tables don’t support duplicates.)</li>
      <li>Look up each word in <code class="language-c++ highlighter-rouge"><span class="n">EnglishWords</span><span class="p">.</span><span class="n">txt</span></code> in that hash table, measuring the average cost of each successful lookup.</li>
      <li>Look up the capitalized version of each word in that hash table. Since all the words in <code class="language-c++ highlighter-rouge"><span class="n">EnglishWords</span><span class="p">.</span><span class="n">txt</span></code> are stored in lower-case, this measures the average cost of each unsuccessful lookup.</li>
      <li>Remove the capitalized versions of each word in the hash table. This measures the average cost of unsuccessful deletions, since none of those words are present.</li>
      <li>Remove the lower-case versions of each word in the hash table. This measures the average cost of successful deletions.</li>
    </ul>
    
    <p>The provided starter code will run this workflow across a variety of different load factors α (ratios of numbers of elements in the table to the number of slots in the table), reporting the times back to you. <strong><em>This may take a while to complete;</em></strong> it’s okay if it takes about five or ten minutes to finish running.</p>
    
    <p>As a note, <strong><em>the timing numbers you get will be sensitive to what else is running on your computer.</em></strong> If you leave your program running time tests in the background while, say, watching a YouTube video, the overhead of your computer switching back and forth between different processes can skew the numbers you’ll get back. We recommend that once you click the “Performance Analysis” button, you walk away from your computer for a while, stretch a bit, and return once all the time trials have finished.</p>
    
    <p>Once you have the data, review the numbers that you’re seeing. Look vertically to see how the times for a particular hash table compare across load factors, and horizontally to see how the different tables compare against one another.</p>
    
    <div class="keith-deliverables numbered-questions">
      <p>Answer each of the following questions in the file <code class="language-c++ highlighter-rouge"><span class="n">ShortAnswers</span><span class="p">.</span><span class="n">txt</span></code>.</p>
    
      <ol>
        <li>Look at the numbers for chained hashing. Compare the cost of successful and unsuccessful insertions across a variety of load factors. What trends do you see? Offer the best explanation you can for why those numbers are the way they are. Then, repeat this for lookup times and removal times.</li>
        <li>Repeat the above exercise for linear probing.</li>
        <li>Repeat the above exercise for Robin Hood hashing.</li>
        <li>Both linear probing hash tables and Robin Hood hash tables slow down when α, the load factor, gets large. For each of the six timing numbers reported back (successful insert, unsuccessful insert, etc.), tell us which of linear probing and Robin Hood hashing is faster for large α, and, importantly, explain why that’s the case.</li>
        <li>Both linear probing and Robin Hood hash tables run faster with smaller choices of α. Why would it not be a good idea to set α = 0.01 when working with these hash tables?</li>
        <li>If you had to pick a single hash table and a single α to use as a hash table in all the programs you were going to write from this point forward, which would you pick, and why?</li>
      </ol>
    </div>
    
    <h2 id="optional-problem-six-extensions">(Optional) Problem Six: Extensions</h2>
    <p>You’ve just implemented two hash tables! If that isn’t enough for you, or if you want to take things a step further, you’re welcome to build on the base assignment and do whatever cool and exciting things seem most interesting to you!</p>
    
    <p>If you’d like to implement a more complex hash table than the ones you did here, please edit the file <code class="language-c++ highlighter-rouge"><span class="n">MyOptionalHashTable</span><span class="p">.</span><span class="n">h</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">MyOptionalHashTable</span><span class="p">.</span><span class="n">cpp</span></code> with your implementations, while leaving your <code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span></code> and <code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span></code> types unmodified. You can then integrate your type into the performance analyzer by editing the file <code class="language-c++ highlighter-rouge"><span class="n">Demos</span><span class="o">/</span><span class="n">TimeTestConfig</span><span class="p">.</span><span class="n">h</span></code>. There are instructions there about how to edit that file.</p>
    
    <p>Here are some suggestions of things to try out:</p>
    <ul>
      <li>The hash tables we’ve defined here are fixed-sized and don’t grow when they start to fill up. In practice, you’d pick some load factor and rehash the tables whenever that load factor was reached. Write code that lets you rehash the tables once they exceed some load factor of your choosing. Tinker around to see what the optimal load factor appears to be!</li>
      <li>Tombstone deletion has a major drawback: if you fill a linear probing table up, then delete most of its elements, the cost of doing a lookup will be way higher than if you had just built a brand new table and filled it in with just those elements. (Do you see why?) Some implementations of these hash tables will keep track of how many deleted elements there are, and when that exceeds some threshold, they’ll rebuild the table from scratch to clean out the tombstones. Experiment with this and see what you can come up with!</li>
      <li>There are many other hashing strategies you can use. Quadratic probing and double hashing, for example, are variations on linear probing that cap the number of elements that can be in a slot at one, but choose a different set of follow-up slots to then look at when finding the next place to look. Cuckoo hashing is based on a totally different idea: it uses two separate hash functions and places each element into one of two tables, always ensuring that the elements are either at the spot in the first table given by the first hash function or the spot in the second table given by the second hash function. Hopscotch hashing is like linear probing, but ensures that elements are never “too far” away from their home location. FKS hashing is like chained hashing, but uses a two-layer hashing scheme to ensure that each element can be found in at most two probes. Read up on one of these strategies – or another of your choosing – and code them up. How quickly do they run? You can add your own hash table type to the performance analysis by editing <code class="language-c++ highlighter-rouge"><span class="n">AllHashTables</span></code> in the file <code class="language-c++ highlighter-rouge"><span class="n">Demos</span><span class="o">/</span><span class="n">PerformanceGUI</span><span class="p">.</span><span class="n">cpp</span></code>.</li>
      <li>We provide the hash functions in this assignment, but there’s no reason to suspect that our hash functions are the “best” hash functions and you can change which hash function to use. Research other hash functions, code them up, and update the performance test (it’s the timeTest function in the files <code class="language-c++ highlighter-rouge"><span class="n">Demos</span><span class="o">/</span><span class="n">PerformanceGUI</span><span class="p">.</span><span class="n">cpp</span></code>) to use your new hash function. How does your new hash function compare with ours?</li>
    </ul>
    
    <h2 id="submission-instructions">Submission Instructions</h2>
    <p>Once you’ve autoindented your code so that it looks beautiful and worked through the Assignment Submission Checklist, submit the following files on Paperless, plus any other files you modified when writing up extensions:</p>
    <ul>
      <li><code class="language-c++ highlighter-rouge"><span class="n">ShortAnswers</span><span class="p">.</span><span class="n">txt</span></code>. <strong><em>(Don’t forget this one, even though there’s no code in it!)</em></strong></li>
      <li><code class="language-c++ highlighter-rouge"><span class="n">LinearProbingHashTable</span><span class="p">.</span><span class="n">h</span><span class="o">/</span><span class="p">.</span><span class="n">cpp</span></code>. <strong><em>(Remember to submit both of these files!)</em></strong></li>
      <li><code class="language-c++ highlighter-rouge"><span class="n">RobinHoodHashTable</span><span class="p">.</span><span class="n">h</span><span class="o">/</span><span class="p">.</span><span class="n">cpp</span></code>. <strong><em>(Remember to submit both of these files!)</em></strong></li>
    </ul>
    
    <p>And that’s it! You’re done! You’ve just explored how to engineer a hash table and are now an expert at dynamic arrays.</p>
    
    <p><strong><em>Good luck, and have fun!</em></strong></p>
    </div>
            <div class="col-xs-hidden col-md-2"><nav class="fixed-top-right toc" id="toc"></nav></div>
        </div>
        </div></main>
        `
    }
})


Mock.mock(/^\/api\/comment(\?.+)?$/, 'get', function(options) {
    const q = querystring.parse(options.url)
    return Mock.mock({
        code: 200,
        msg: '',
        'data|10-20': {
            "total|50-300": 0,
            [`row|${q.limit || 10}`]: [
                {
                    id: '@guid',
                    title: '@ctitle(10, 50)',
                    description: '@cparagraph(1, 10)',
                    category: {
                        'id|1-10': 0,
                        name: '分类@id'
                    },
                    'scanNumber|0-3000': 0,
                    "commentNumber|0-300": 30,
                    thumb: Mock.Random.image('300x250', '#000', '#fff', 'random image' ),
                    createDate: `@date('T')`
                }
            ]
        }
    })
})

Mock.mock('/api/comment', 'post', {
    code: 200,
    msg: '',
    data: {
        id: '@guid',
        nickname: '@cname',
        content: '@cparagraph(1, 10)',
        createDate: Date.now(),
        'avatar|1': [
            'https://w.wallhaven.cc/full/we/wallhaven-werq3x.jpg',
            'https://w.wallhaven.cc/full/3l/wallhaven-3le9vd.jpg',
            'https://img.icons8.com/pastel-glyph/64/sun--v2.png',
            'https://img.icons8.com/material-outlined/24/pokemon.png',
            'https://img.icons8.com/dusk/64/pokemon.png',
            'https://img.icons8.com/stickers/100/mana.png'
        ]
    }
})