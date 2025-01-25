// Populate the sidebar
//
// This is a script, and not included directly in the page, to control the total size of the book.
// The TOC contains an entry for each page, so if each page includes a copy of the TOC,
// the total size of the page becomes O(n**2).
class MDBookSidebarScrollbox extends HTMLElement {
    constructor() {
        super();
    }
    connectedCallback() {
        this.innerHTML = '<ol class="chapter"><li class="chapter-item expanded "><a href="problems/index.html"><strong aria-hidden="true">1.</strong> Problem</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="problems/01-flow-of-program.html"><strong aria-hidden="true">1.1.</strong> Flow of Program</a></li><li class="chapter-item expanded "><a href="problems/02-first-java.html"><strong aria-hidden="true">1.2.</strong> First Java Program</a></li><li class="chapter-item expanded "><a href="problems/03-conditionals-loops.html"><strong aria-hidden="true">1.3.</strong> Conditionals and Loops</a></li><li class="chapter-item expanded "><a href="problems/04-functions.html"><strong aria-hidden="true">1.4.</strong> Functions</a></li><li class="chapter-item expanded "><a href="problems/05-arrays.html"><strong aria-hidden="true">1.5.</strong> Arrays</a></li><li class="chapter-item expanded "><a href="problems/06-searching.html"><strong aria-hidden="true">1.6.</strong> Searching</a></li><li class="chapter-item expanded "><a href="problems/07-sorting.html"><strong aria-hidden="true">1.7.</strong> Sorting</a></li><li class="chapter-item expanded "><a href="problems/08-strings.html"><strong aria-hidden="true">1.8.</strong> Strings</a></li><li class="chapter-item expanded "><a href="problems/09-patterns.html"><strong aria-hidden="true">1.9.</strong> Patterns</a></li><li class="chapter-item expanded "><a href="problems/10-recursion.html"><strong aria-hidden="true">1.10.</strong> Recursion</a></li><li class="chapter-item expanded "><a href="problems/11-bitwise.html"><strong aria-hidden="true">1.11.</strong> Bitwise Operations</a></li><li class="chapter-item expanded "><a href="problems/12-math.html"><strong aria-hidden="true">1.12.</strong> Math</a></li><li class="chapter-item expanded "><a href="problems/13-complexities.html"><strong aria-hidden="true">1.13.</strong> Time and Space Complexities</a></li><li class="chapter-item expanded "><a href="problems/14-oop.html"><strong aria-hidden="true">1.14.</strong> Object-Oriented Programming)</a></li><li class="chapter-item expanded "><a href="problems/15-linkedlist.html"><strong aria-hidden="true">1.15.</strong> Linked List</a></li><li class="chapter-item expanded "><a href="problems/16-stack-queue.html"><strong aria-hidden="true">1.16.</strong> Stack and Queue</a></li><li class="chapter-item expanded "><a href="problems/17-trees.html"><strong aria-hidden="true">1.17.</strong> Trees</a></li><li class="chapter-item expanded "><a href="problems/18-heaps.html"><strong aria-hidden="true">1.18.</strong> Heaps</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.</strong> Cretia</div></li><li><ol class="section"><li class="chapter-item expanded "><div><strong aria-hidden="true">2.1.</strong> Contains Duplicate</div></li><li class="chapter-item expanded "><div><strong aria-hidden="true">2.2.</strong> Valid Anagram</div></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/two_sum.html"><strong aria-hidden="true">2.3.</strong> Two Sum</a></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/group-anagram.html"><strong aria-hidden="true">2.4.</strong> Group Anagrams</a></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/top-k-frequent-elements.html"><strong aria-hidden="true">2.5.</strong> Top K Frequent Elements</a></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/encode_and_decode_strings.html"><strong aria-hidden="true">2.6.</strong> Encode and Decode Strings</a></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/product-of-array-except-self.html"><strong aria-hidden="true">2.7.</strong> Product of Array Except Self</a></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/valid_sudoku.html"><strong aria-hidden="true">2.8.</strong> Valid Sudoku</a></li><li class="chapter-item expanded "><a href="neetcode_150/array_and_hashing/longest_consecutive_sequence.html"><strong aria-hidden="true">2.9.</strong> Longest Consecutive Sequence</a></li><li class="chapter-item expanded "><a href="neetcode_150/two_pointers/valid_palindrome.html"><strong aria-hidden="true">2.10.</strong> Valid Palindrome</a></li><li class="chapter-item expanded "><a href="neetcode_150/two_pointers/two_sum_II_input_array_s-sorted.html"><strong aria-hidden="true">2.11.</strong> Two Sum II Input Array Is Sorted</a></li><li class="chapter-item expanded "><a href="neetcode_150/two_pointers/3sum.html"><strong aria-hidden="true">2.12.</strong> 3Sum</a></li><li class="chapter-item expanded "><a href="neetcode_150/two_pointers/container_with_most_water.html"><strong aria-hidden="true">2.13.</strong> Container With Most Water</a></li><li class="chapter-item expanded "><a href="neetcode_150/two_pointers/trapping_rain_water.html"><strong aria-hidden="true">2.14.</strong> Trapping Rain Water</a></li></ol></li><li class="chapter-item expanded "><li class="spacer"></li><li class="chapter-item expanded "><a href="greedy_algorithm/index.html"><strong aria-hidden="true">3.</strong> Greedy Algorithm</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="greedy_algorithm/03-shortest-jpb-first.html"><strong aria-hidden="true">3.1.</strong> Shortest Job First (or SJF) CPU Scheduling</a></li><li class="chapter-item expanded "><a href="greedy_algorithm/04-jump-game-1.html"><strong aria-hidden="true">3.2.</strong> Jump Game - I</a></li></ol></li><li class="chapter-item expanded "><a href="dynamic_programming/index.html"><strong aria-hidden="true">4.</strong> Dynamic Programming</a></li><li><ol class="section"><li class="chapter-item expanded "><a href="dynamic_programming/index.html"><strong aria-hidden="true">4.1.</strong> introduction</a></li></ol></li></ol>';
        // Set the current, active page, and reveal it if it's hidden
        let current_page = document.location.href.toString();
        if (current_page.endsWith("/")) {
            current_page += "index.html";
        }
        var links = Array.prototype.slice.call(this.querySelectorAll("a"));
        var l = links.length;
        for (var i = 0; i < l; ++i) {
            var link = links[i];
            var href = link.getAttribute("href");
            if (href && !href.startsWith("#") && !/^(?:[a-z+]+:)?\/\//.test(href)) {
                link.href = path_to_root + href;
            }
            // The "index" page is supposed to alias the first chapter in the book.
            if (link.href === current_page || (i === 0 && path_to_root === "" && current_page.endsWith("/index.html"))) {
                link.classList.add("active");
                var parent = link.parentElement;
                if (parent && parent.classList.contains("chapter-item")) {
                    parent.classList.add("expanded");
                }
                while (parent) {
                    if (parent.tagName === "LI" && parent.previousElementSibling) {
                        if (parent.previousElementSibling.classList.contains("chapter-item")) {
                            parent.previousElementSibling.classList.add("expanded");
                        }
                    }
                    parent = parent.parentElement;
                }
            }
        }
        // Track and set sidebar scroll position
        this.addEventListener('click', function(e) {
            if (e.target.tagName === 'A') {
                sessionStorage.setItem('sidebar-scroll', this.scrollTop);
            }
        }, { passive: true });
        var sidebarScrollTop = sessionStorage.getItem('sidebar-scroll');
        sessionStorage.removeItem('sidebar-scroll');
        if (sidebarScrollTop) {
            // preserve sidebar scroll position when navigating via links within sidebar
            this.scrollTop = sidebarScrollTop;
        } else {
            // scroll sidebar to current active section when navigating via "next/previous chapter" buttons
            var activeSection = document.querySelector('#sidebar .active');
            if (activeSection) {
                activeSection.scrollIntoView({ block: 'center' });
            }
        }
        // Toggle buttons
        var sidebarAnchorToggles = document.querySelectorAll('#sidebar a.toggle');
        function toggleSection(ev) {
            ev.currentTarget.parentElement.classList.toggle('expanded');
        }
        Array.from(sidebarAnchorToggles).forEach(function (el) {
            el.addEventListener('click', toggleSection);
        });
    }
}
window.customElements.define("mdbook-sidebar-scrollbox", MDBookSidebarScrollbox);
