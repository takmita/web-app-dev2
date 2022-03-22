-- 本テーブル
drop table if exists book cascade;

create table book (
  control_no VARCHAR(16) not null comment '管理番号'
  , category VARCHAR(32) not null comment 'カテゴリ'
  , book_name VARCHAR(128) not null comment '本の名前'
  , status VARCHAR(32) comment '状態'
  , purchase_date DATE comment '購入日'
  , purchase_person VARCHAR(128) comment '購入者'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint control_no_PKC primary key (control_no)
) comment '本管理テーブル' ;

-- コード定義マスタ
drop table if exists m_code_definition cascade;

create table m_code_definition (
  code_category VARCHAR(32) not null comment 'コード種別'
  , code VARCHAR(32) not null comment 'コード'
  , name VARCHAR(128) not null comment '名称'
  , display_order INT comment '表示順'
  , is_invalid BOOL default false comment '無効フラグ'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_code_definition_PKC primary key (code_category,code)
) comment 'コード定義マスタ' ;
