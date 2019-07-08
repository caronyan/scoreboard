<template>
    <div class="ace-container">
        <div ref="ace">

        </div>
    </div>
</template>

<script>
import ace from 'ace-builds'
import 'ace-builds/src-noconflict/theme-xcode'
import 'ace-builds/src-noconflict/mode-python'
import * as beautify from 'ace-builds/src-noconflict/ext-beautify'

export default {
    mounted () {
      this.aceEditor = ace.edit(this.$refs.ace, {
        maxLines: 20, 
        minLines: 10, 
        fontSize: 14, 
        theme: this.themePath, 
        mode: this.modePath, 
        tabSize: 4, 
        value: ''
      })

      this.aceEditor.setReadOnly(true);
      beautify.beautify(this.aceEditor.session)
    
    },
    data () {
      return {
        aceEditor: null,
        themePath: 'ace/theme/xcode',
        modePath: 'ace/mode/python'
      }
    }
}
</script>

<style>
.ace-container {
    position: relative;
 
    .config-panel {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 50%;
      height: 100%;
      overflow: scroll;
      box-shadow: grey -5px 2px 3px;
      background-color: rgba(255, 255, 255, 0.5);
      z-index: 1;
 
      .item {
        margin: 10px auto;
        text-align: center;
 
        .title {
          color: white;
          margin: 0 10px;
          font-size: 14px;
        }
      }
    }
 
    .bookmarklet {
      position: absolute;
      right: 0;
      bottom: 0;
      width: 20px;
      height: 20px;
      z-index: 2;
      cursor: pointer;
      border-width: 9px;
      border-style: solid;
      border-color: lightblue gray gray rgb(206, 173, 230);
      border-image: initial;
    }
  }
</style>

