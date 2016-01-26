import can from 'can/';
import 'can/map/define/';
import template from './template.stache!';
import './styles.less!';

let viewModel = can.Map.extend({
  define: {
    files: {
      value: []
    },

    /**
     * `multiple` works the same way as it does on any file input. If it's
     * present on the element, you'll be able to select more than one file.
     */
    multiple: {
      set(value){
        if (value === '' || value) {
          value = true;
        }
        return value;
      }
    },

    /**
     * `multiple` works the same way as it does on any file input. If it's
     * present on the element, you'll be able to select more than one file.
     */
    noUi: {
      set(value){
        if (value === '' || value) {
          value = true;
        }
        return value;
      }
    }
  },

  /**
   * This is a placeholder for the file input's DOM element as a cheap way of
   * accessing it within the component.  Not a recommended practice for MOST
   * components, but I'm making an exception since I can't find another way to
   * pull the FileList out of a file input.
   */
  fileInput: null,

  buttonClass: null,
  buttonLabel: null,

  /**
   * Performs a click action on the hidden file input, which opens the browser's
   * file picker UI.
   */
  selectFiles(){
    this.attr('fileInput').click();
  }
});

/**
 * The file-input-button provides a wrapper to perform one-way live binding on
 * file inputs (`input[type=file]`).
 */
can.Component.extend({
  tag:'file-input-button',
  viewModel,
  template,
  events: {
    /**
     * Puts the file input DOM element in the viewModel.
     */
    inserted: function(element){
      this.viewModel.attr('fileInput', element.find('input[type=file]'));
    },

    /**
     * When files are selected in the browser's file picker, push each one into
     * the viewModel's `files` list.
     */
    'input[type=file] change': function(){
      let files = this.viewModel.attr('files'),
        newlySelectedFiles = this.viewModel.attr('fileInput')[0].files;

      newlySelectedFiles.forEach((file, index) => {
        let item = new can.Map({
          name: file.name,
          size: file.size,
          type: file.type,
          lastModified: file.lastModified,
          lastModifiedDate: file.lastModifiedDate,
          file: file
        });
        files.push(item);
      });
    }
  }
});
