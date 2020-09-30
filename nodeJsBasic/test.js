var fs = require('fs'); // File System(Node API)：ファイル操作
var path = require('path'); // Path(Node API)：パスの文字列操作

var dirTarget = './'; // 処理対象のフォルダ（サブフォルダ）を格納
var text = '';

// getFiles（ファイル情報取得関数）の定義と実行
(function getFiles(dir){
    var files = fs.readdirSync(dir); // 指定フォルダ内のファイル、サブフォルダのリストを取得
    files.forEach(function(file){ 
        var fullPath = path.join(dir, file); // フルパスを取得
        var stats = fs.statSync(fullPath)
        if(stats.isDirectory()){ // フォルダの場合
            getFiles(fullPath); // getFilesを再帰的に呼び出し
        }else{ // ファイルの場合
            // ファイル情報を取得
            text += file // ファイル名
                + ',' + stats.size // ファイルサイズ：単位バイト
                + ',' + stats.birthtime.getFullYear() + '/' // ファイル作成日：年
                + ('0' + (stats.birthtime.getMonth() + 1)).slice(-2) + '/' // ファイル作成日：月
                + ('0' + stats.birthtime.getDate()).slice(-2) // ファイル作成日；日
                + '\n'; 
        }
    });
})(dirTarget);

// ファイル書き出し
fs.writeFileSync( // テキストファイルに書き込み
    path.join(dirTarget, 'result.csv'), // 対象フォルダに結果ファイルを出力
    text // 書き込む文字列
);