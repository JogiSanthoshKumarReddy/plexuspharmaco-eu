// plexus-init.js - Global initialization for Plexuspharmaco Next.js port
// Guard flags to prevent duplicate listener registration
var _plexusGlobalListenersRegistered = false;
var _plexusRouteObserver = null;

// Register route-change observer ONCE
if (typeof window !== 'undefined' && !_plexusRouteObserver) {
    var lastUrl = window.location.href;
    _plexusRouteObserver = new MutationObserver(function() {
        var url = window.location.href;
        if (url !== lastUrl) {
            lastUrl = url;
            setTimeout(initPlexus, 150);
        }
    });
    _plexusRouteObserver.observe(document, { subtree: true, childList: true });
}

document.addEventListener('DOMContentLoaded', function() {
    initPlexus();
});

function initPlexus() {
    // 1. Background images with data-bg (from inline scripts)
    var bgAreas = document.querySelectorAll('.bg-background-area, [data-bg]');
    bgAreas.forEach(function(el) {
        if (el.getAttribute('data-bg')) {
            el.style.background = 'url(' + el.getAttribute('data-bg') + ')';
            el.style.backgroundSize = 'cover';
            el.style.backgroundPosition = 'center center';
            el.style.backgroundRepeat = 'no-repeat';
        }
    });

    // 2. Fix WOW visibility
    document.querySelectorAll('.wow').forEach(function(el) {
        el.style.visibility = 'visible';
    });

    // 3. Register global click listeners ONCE (not on every route change)
    if (!_plexusGlobalListenersRegistered) {
        _plexusGlobalListenersRegistered = true;

        // Mobile Menu Toggler
        document.body.addEventListener('click', function(e) {
            if (e.target.closest('.mobile-nav__toggler')) {
                e.preventDefault();
                var wrapper = document.querySelector('.mobile-nav__wrapper');
                if (wrapper) {
                    wrapper.classList.toggle('expanded');
                    document.body.classList.toggle('locked');
                }
            }
        });

        // Team card close button (delegated)
        document.addEventListener('click', function(e) {
            var closeBtn = e.target.closest('.team-close');
            if (!closeBtn) return;

            var card = closeBtn.closest('.team-card');
            if (!card) return;

            card.classList.remove('active');

            // Restore original position
            if (card._originalParent) {
                if (card._originalNextSibling) {
                    card._originalParent.insertBefore(card, card._originalNextSibling);
                } else {
                    card._originalParent.appendChild(card);
                }
            }

            // Cleanup
            delete card._originalParent;
            delete card._originalNextSibling;
            delete card.dataset.moved;
        });

        // Service Areas / Therapeutics Areas Toggle (delegated)
        document.addEventListener('click', function(e) {
            var imgTrigger = e.target.closest('.single-service-style2 .img-box');
            var plusTrigger = e.target.closest('.single-service-style2 .toggle-info');
            if (!imgTrigger && !plusTrigger) return;

            if (plusTrigger) {
                e.preventDefault();
                e.stopPropagation();
            }

            var card = (imgTrigger || plusTrigger).closest('.single-service-style2');
            if (card) toggleCard(card);
        });
    }

    // 4. Team Card Slide Panel Logic (re-bind on route change, clean up old listeners via cloning)
    document.querySelectorAll('.team-trigger').forEach(function(trigger) {
        var newTrigger = trigger.cloneNode(true);
        trigger.parentNode.replaceChild(newTrigger, trigger);

        newTrigger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();

            var clickedCard = this.closest('.team-card');
            var teamRow = document.querySelector('.team-row');
            if (!teamRow) return;
            var cards = Array.from(teamRow.children);

            var cardsPerRow = 3;
            var clickedIndex = cards.indexOf(clickedCard);
            var rowNumber = Math.floor(clickedIndex / cardsPerRow);
            var rowStartIndex = rowNumber * cardsPerRow;
            var rowStartCard = cards[rowStartIndex];

            // Close all open cards
            document.querySelectorAll('.team-card.active').forEach(function(c) {
                c.classList.remove('active');
            });

            // Store original position ONCE
            if (!clickedCard.dataset.moved) {
                clickedCard._originalParent = teamRow;
                clickedCard._originalNextSibling = clickedCard.nextElementSibling;
                clickedCard.dataset.moved = 'true';
            }

            // Move clicked card ONLY on desktop
            if (window.innerWidth > 768) {
                if (rowStartCard && rowStartCard !== clickedCard) {
                    teamRow.insertBefore(clickedCard, rowStartCard);
                }
            }

            // Fill panel content
            var panel = clickedCard.querySelector('.team-info-panel');
            if (panel) {
                var nameEl = panel.querySelector('.team-name');
                var designationEl = panel.querySelector('.team-designation');
                var companyEl = panel.querySelector('.team-company');
                var descEl = panel.querySelector('.team-description');
                if (nameEl) nameEl.innerText = this.dataset.name || '';
                if (designationEl) designationEl.innerHTML = this.dataset.designation || '';
                if (companyEl) companyEl.innerHTML = this.dataset.company || '';
                if (descEl) descEl.innerHTML = this.dataset.description || '';
            }

            clickedCard.classList.add('active');
        });
    });
}

function toggleCard(activeCard) {
    document.querySelectorAll('.single-service-style2').forEach(function(card) {
        if (card !== activeCard) card.classList.remove('active');
    });
    activeCard.classList.toggle('active');
}

// Run immediately in case script is loaded after DOM
if (document.readyState === 'loading') {
    // Already registered DOMContentLoaded above, skip
} else {
    initPlexus();
}

// Global functions for inline onclick handlers
window.editForm = function(event, id, file) {
    event.preventDefault();

    var form = document.createElement('form');
    form.action = file;
    form.method = 'post';

    var input = document.createElement('input');
    input.type = 'hidden';
    input.name = 'id';
    input.value = id;

    form.appendChild(input);
    document.body.appendChild(form);
    form.submit();
};

window.submitForm1 = function(event, slug, name, file) {
    event.preventDefault();

    var sanitizedName = name.replace(/[\s/]+/g, '-');
    var friendlyURL = file + '/' + slug;

    var form = document.createElement('form');
    form.action = friendlyURL;
    form.method = 'post';

    var idInput = document.createElement('input');
    idInput.type = 'hidden';
    idInput.name = 'slug';
    idInput.value = slug;

    var nameInput = document.createElement('input');
    nameInput.type = 'hidden';
    nameInput.name = 'name';
    nameInput.value = sanitizedName;

    form.appendChild(idInput);
    form.appendChild(nameInput);

    document.body.appendChild(form);
    form.submit();
};
