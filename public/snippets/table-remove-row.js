class ViewManager {
    connectEventHandlers() {
        
        document.getElementById('btn-nuke-first-row')
            .addEventListener('click',
                this.onClick.bind(this));
    }

    onClick(event) {
        document.querySelector("data-table").deleteRow(0);
    }

}

const viewManager = new ViewManager();
viewManager.connectEventHandlers();