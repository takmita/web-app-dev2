-- Project Name : crew SMART
-- Date/Time    : 2020/12/14 13:39:28
-- Author       : ANAシステムズ
-- RDBMS Type   : MySQL
-- Application  : A5:SQL Mk-2

-- 乗務員申請管理番号発番テーブル
drop table if exists request_flight_crew_numbering cascade;

create table request_flight_crew_numbering (
  latest_number int(10) unsigned comment '最新番号'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
) comment '乗務員申請管理番号発番テーブル:乗務員申請管理番号を管理するテーブル' ;

-- 客室申請管理番号発番テーブル
drop table if exists request_cabin_crew_numbering cascade;

create table request_cabin_crew_numbering (
  latest_number int(10) unsigned comment '最新番号'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
) comment '客室申請管理番号発番テーブル:客室申請管理番号を管理するテーブル' ;

-- 運航乗務員手配
drop table if exists request_flight_crew cascade;

create table request_flight_crew (
  request_flight_crew_id VARCHAR(10) not null comment '乗務員申請管理番号'
  , request_flight_crew_status VARCHAR(2) not null comment '申請ステータス'
  , register_name VARCHAR(64) comment '記入者'
  , request_date DATE comment '依頼日'
  , requester_code VARCHAR(64) comment '依頼元コード'
  , crew_department_code VARCHAR(64) comment '乗員部署コード'
  , applicable_date DATE comment '対象日'
  , destination_code VARCHAR(64) comment '依頼先コード'
  , crew1_id VARCHAR(16) comment '運航乗務員1_社員番号'
  , crew1_name VARCHAR(128) comment '運航乗務員1_氏名'
  , crew1_model_code VARCHAR(64) comment '運航乗務員1_型式'
  , crew1_qualification VARCHAR(64) comment '運航乗務員1_資格'
  , crew2_id VARCHAR(16) comment '運航乗務員2_社員番号'
  , crew2_name VARCHAR(128) comment '運航乗務員2_氏名'
  , crew2_model_code VARCHAR(64) comment '運航乗務員2_型式'
  , crew2_qualification VARCHAR(64) comment '運航乗務員2_資格'
  , crew3_id VARCHAR(16) comment '運航乗務員3_社員番号'
  , crew3_name VARCHAR(128) comment '運航乗務員3_氏名'
  , crew3_model_code VARCHAR(64) comment '運航乗務員3_型式'
  , crew3_qualification VARCHAR(64) comment '運航乗務員3_資格'
  , crew4_id VARCHAR(16) comment '運航乗務員4_社員番号'
  , crew4_name VARCHAR(128) comment '運航乗務員4_氏名'
  , crew4_model_code VARCHAR(64) comment '運航乗務員4_型式'
  , crew4_qualification VARCHAR(64) comment '運航乗務員4_資格'
  , is_cis_reflected BOOL comment 'CIS_反映フラグ'
  , is_cis_differ BOOL comment 'CIS_異なる動き'
  , before_day_1st VARCHAR(64) comment 'スケジュール_変更前1日目'
  , before_day_2nd VARCHAR(64) comment 'スケジュール_変更前2日目'
  , after_day_1st VARCHAR(64) comment 'スケジュール_変更後1日目'
  , after_day_2nd VARCHAR(64) comment 'スケジュール_変更後2日目'
  , arrange_hotel_new_airport VARCHAR(3) comment 'ホテル手配_新規空港'
  , arrange_hotel_cancel_airport VARCHAR(3) comment 'ホテル手配_取消空港'
  , arrange_taxi_new_airport VARCHAR(3) comment '配車手配_新規空港'
  , arrange_taxi_cancel_airport VARCHAR(3) comment '配車手配_取消空港'
  , arrange_taxi_time_change_airport VARCHAR(3) comment '配車手配_時刻変更空港'
  , arrange_meal_new_airport VARCHAR(3) comment '食事手配_新規空港'
  , arrange_meal_cancel_airport VARCHAR(3) comment '食事手配_取消空港'
  , requester_remarks VARCHAR(1024) comment '依頼側_備考'
  , requester_updated_at DATETIME comment '依頼側_更新日時'
  , airport_staff_name VARCHAR(128) comment '空港側_担当者'
  , airport_remarks VARCHAR(1024) comment '空港側_備考'
  , airport_updated_at DATETIME comment '空港側_更新日時'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint request_flight_crew_PKC primary key (request_flight_crew_id)
) comment '運航乗務員手配:運航乗務員手配テーブル' ;

-- 客室乗務員手配
drop table if exists request_cabin_crew cascade;

create table request_cabin_crew (
  request_cabin_crew_id VARCHAR(10) not null comment '客室申請管理番号'
  , request_cabin_crew_status VARCHAR(2) not null comment '申請ステータス'
  , register_name VARCHAR(64) comment '記入者'
  , request_date DATE comment '依頼日'
  , requester_code VARCHAR(64) comment '依頼元コード'
  , destination_code VARCHAR(64) comment '依頼先コード'
  , before_in_date DATE comment '変更前_IN日付'
  , before_in_flight_code VARCHAR(10) comment '変更前_IN便名'
  , before_out_date DATE comment '変更前_OUT日付'
  , before_out_flight_code VARCHAR(10) comment '変更前_OUT便名'
  , before_persons INT comment '変更前_人数'
  , after_in_date DATE comment '変更後_IN日付'
  , after_in_flight_code VARCHAR(10) comment '変更後_IN便名'
  , after_out_date DATE comment '変更後_OUT日付'
  , after_out_flight_code VARCHAR(10) comment '変更後_OUT便名'
  , after_persons INT comment '変更後_人数'
  , arrange_hotel_checkin_date DATE comment 'ホテル手配_チェックイン日付'
  , arrange_hotel_persons INT comment 'ホテル手配_増減人数'
  , arrange_meal_date DATE comment '食事手配_日付'
  , arrange_meal_flight_code VARCHAR(10) comment '食事手配_便名'
  , arrange_meal_persons INT comment '食事手配_増減人数'
  , arrange_taxi_date DATE comment '配車手配_日付'
  , is_arrange_taxi BOOL comment '配車手配_有無'
  , requester_remarks VARCHAR(1024) comment '依頼側_備考'
  , requester_updated_at DATETIME comment '依頼側_更新日時'
  , airport_staff_name VARCHAR(128) comment '空港側_担当者'
  , airport_remarks VARCHAR(1024) comment '空港側_備考'
  , airport_updated_at DATETIME comment '空港側_更新日時'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint request_cabin_crew_PKC primary key (request_cabin_crew_id)
) comment '客室乗務員手配:客室乗務員手配テーブル' ;

create index request_cabin_crew_IX1
  on request_cabin_crew(requester_code);

-- コード定義マスタ
drop table if exists m_code_definition cascade;

create table m_code_definition (
  code_category VARCHAR(64) not null comment 'コード種別'
  , code VARCHAR(64) not null comment 'コード'
  , name VARCHAR(128) not null comment '名称'
  , extension VARCHAR(128) comment '拡張情報:コード・名称以外に値が必要な場合に利用する'
  , display_order INT comment '表示順'
  , is_invalid BOOL default false comment '無効フラグ'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_code_definition_PKC primary key (code_category,code)
) comment 'コード定義マスタ:コード・名称を定義する汎用的なマスタ' ;

-- 利用者
drop table if exists m_account cascade;

create table m_account (
  email VARCHAR(64) not null comment 'email'
  , request_section VARCHAR(1) comment '依頼元・依頼先区分'
  , name VARCHAR(64) comment '名前'
  , requester_destination_code VARCHAR(64) comment '依頼元・依頼先コード'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_account_PKC primary key (email)
) comment '利用者' ;

-- 乗員管理型式
drop table if exists m_model cascade;

create table m_model (
  company_code VARCHAR(10) not null comment '会社コード'
  , model_code VARCHAR(64) not null comment '型式コード'
  , model_name VARCHAR(64) comment '型式'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_model_PKC primary key (company_code,model_code)
) comment '乗員管理型式' ;

-- 乗員管理部門
drop table if exists m_crew_department cascade;

create table m_crew_department (
  company_code VARCHAR(10) not null comment '会社コード'
  , crew_department_code VARCHAR(64) not null comment '乗員部署コード'
  , crew_department_name VARCHAR(64) comment '乗員部署名'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_crew_department_PKC primary key (company_code,crew_department_code)
) comment '乗員管理部門' ;

-- 乗員
drop table if exists m_crew cascade;

create table m_crew (
  company_code VARCHAR(10) not null comment '会社コード'
  , crew_id VARCHAR(16) not null comment '乗員社員番号'
  , crew_name VARCHAR(128) comment '乗員氏名'
  , model_code VARCHAR(64) comment '型式コード'
  , qualification VARCHAR(64) comment '資格'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_crew_PKC primary key (company_code,crew_id)
) comment '乗員' ;

-- 依頼関係
drop table if exists m_arrange_relation cascade;

create table m_arrange_relation (
  requester_code VARCHAR(64) not null comment '依頼元コード'
  , destination_code VARCHAR(64) not null comment '依頼先コード'
  , chat_room_url VARCHAR(256) comment 'チャットルームURL'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_arrange_relation_PKC primary key (requester_code,destination_code)
) comment '依頼関係:依頼元と依頼先の関係性を管理するテーブル' ;

-- 依頼先空港
drop table if exists m_destination cascade;

create table m_destination (
  destination_code VARCHAR(64) not null comment '依頼先コード'
  , airport_code VARCHAR(3) comment '空港コード'
  , company_code VARCHAR(10) comment '会社コード'
  , airport_name VARCHAR(32) comment '空港名'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_destination_PKC primary key (destination_code)
) comment '依頼先空港:依頼先の空港を管理する' ;

-- 依頼元
drop table if exists m_requester cascade;

create table m_requester (
  requester_code VARCHAR(64) not null comment '依頼元コード'
  , company_code VARCHAR(10) comment '会社コード'
  , requester_name VARCHAR(32) comment '依頼元名称'
  , crew_category VARCHAR(1) comment '客室・乗員区分:`1`：客室
`2`：乗員'
  , created_at DATETIME comment '作成日時'
  , created_user VARCHAR(128) comment '作成者'
  , updated_at DATETIME comment '更新日時'
  , updated_user VARCHAR(128) comment '更新者'
  , constraint m_requester_PKC primary key (requester_code)
) comment '依頼元:依頼元：客室・FOCを管理する' ;
