-- CREATE TABLE student(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      firsname VARCHAR(30) NOT NULL,
--      lastname VARCHAR(30) NOT NULL,
--      othername VARCHAR(30)  NULL,
--      gender VARCHAR(10) NOT NULL,
--      date_of_birth DATE  NULL,
--      email VARCHAR(150)  NULL,
--      phone VARCHAR(20)  NULL,
--      address TEXT  NULL,
--     status VARCHAR(20) NOT NULL
--  );

-- INSERT INTO student(
   
--     firsname,
--     lastname,
--     othername,
--     gender,
--     date_of_birth,
--     email,
--     phone,
--     address,
--     status
-- )
--  VALUES (
    
--     "Abbas",
--     "Abdurrahman",
--     "Yusuf",
--     "male",
--     "22/05/1997",
--     "abs@gmail.com",
--     "07065089994",
--     "Zinariya behind Sharna",
--     "active"

-- )
-- ;

-- SELECT * FROM student WHERE gender = "male";

-- CREATE TABLE academic_sessions(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      name VARCHAR(20) UNIQUE NOT NULL,
--      start_date DATE NOT NULL,
--      end_date DATE NOT NULL,
--      is_current BOOLEAN DEFAULT FALSE,
--      created_at DATETIME NOT NULL,
--      updated_at DATETIME NOT NULL
-- --  );

-- INSERT INTO academic_sessions(
    
--     name,
--     start_date,
--     end_date,
--     is_current,
--     created_at,
--     updated_at
-- )
--   VALUES (
    
--    "2025/2026",
--     "2025-09-15",
--    "2026-07-20",
--     "false",
--    "2026-10-30",
--     "2026-10-30"
--  )
--  ;
-- SELECT * FROM academic_sessions WHERE is_current = "true";


--  CREATE TABLE terms(
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     session_id INTEGER,
--     name VARCHAR(20) NOT NULL,
--     start_date DATE  NULL,
--     end_date DATE  NULL,
--     is_current BOOLEAN DEFAULT FALSE,
--     created_at DATETIME NOT NULL
-- --  );

-- INSERT INTO terms(
--     session_id,
--     name,
--     start_date,
--     end_date,
--     is_current,
--     created_at
--  )
--   VALUES (
--     "2",
--     "First term",
--     "2026-09-14",
--     "2026-12-18",
--     "TRUE",
--    "2026-09-14"
--  )
--  ;
-- SELECT * FROM  terms;

--  CREATE TABLE classes(
--     id INTEGER PRIMARY KEY AUTOINCREMENT,
--     name VARCHAR(20) UNIQUE NOT NULL,
--     lavel VARCHAR(20) NOT NULL,
--     description TEXT  NULL,
--     created_at DATETIME NOT NULL
--   );

--  INSERT INTO classes(
  
--     name ,
--     lavel ,
--     description ,
--     created_at
--  )
--   VALUES (
    
--     "JSS 1" ,
--     "Junior Secondary" ,
--     "School Section" ,
--     "2026-10-30"
--  )
--  ;
-- SELECT * FROM  classes;

-- CREATE TABLE class_arms(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      class_id INTEGER,
--      name VARCHAR(20) NOT NULL,
--      created_at DATETIME NOT NULL
--  );

--  INSERT INTO class_arms(
  
--       class_id,
--       name,
--       created_at
--   )
--    VALUES (
    
--      "1",
--      "A",
--      "2026-10-30"
--   )
--   ;

-- SELECT * FROM  classes JOIN class_arms NO classes.id = class_arms.class_1d;


-- CREATE TABLE subjects(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      code VARCHAR(20) UNIQUE NOT NULL,
--      name VARCHAR(100) NOT NULL,
--      description TEXT NULL,
--      category VARCHAR(30) NULL,
--      is_active BOOLEAN DEFAULT TRUE,
--      created_at DATETIME NOT NULL
--  );

--  INSERT INTO subjects(
  
--      code,
--      name,
--      description,
--      category,
--      is_active,
--      created_at
--   )
--    VALUES (
    
--      "MTH",
--      "Mathematics",
--      "Elementry Mathematics",
--      "core",
--      "Active",
--      "2026-10-30"
--   )
--   ;


-- SELECT * FROM  subjects;


-- CREATE TABLE teachers(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      firsname VARCHAR(50) NOT NULL,
--      lastname VARCHAR(50) NOT NULL,
--      email VARCHAR(150)  NULL,
--      phone VARCHAR(20)  NULL,
--     status VARCHAR(20)  NULL,
--     created_at DATETIME NOT NULL
--  );


-- INSERT INTO teachers(
--     firsname,
--     lastname,
--     email,
--     phone,
--     status,
--     created_at
-- )
-- VALUES (
    
--     "Anas",
--     "Hussaini",
--     "anas@gmail.com",
--     "08133388783",
--     "Active",
--     "2026-10-30"
--  );
-- SELECT * FROM  teachers;


-- CREATE TABLE class_subjects(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      class_id INTEGER,
--      subject_id INTEGER,
--      teacher_id INTEGER,
--     created_at DATETIME NOT NULL
--  );


-- INSERT INTO class_subjects(
--     class_id,
--     subject_id,
--     teacher_id,
--     created_at 
-- )
-- VALUES(
--     "1",
--     "1",
--     "1",
--     "2026-10-30" 
--  );
-- SELECT * FROM  class_subjects;



-- CREATE TABLE student_enrollments(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      student_id INTEGER,
--      session_id INTEGER,
--      class_id INTEGER,
--      class_arm_id INTEGER,
--      enrollment_date DATE NOT NULL,
--      status VARCHAR(20) NOT NULL,
--     created_at DATETIME NOT NULL
--  );

 
-- INSERT INTO student_enrollments(
--      student_id,
--      session_id,
--      class_id,
--      class_arm_id,
--      enrollment_date,
--      status,
--     created_at 
-- )
-- VALUES(
--      "1",
--      "2",
--      "1",
--      "1",
--      "2026-10-30",
--      "Active",
--     "2026-10-30" 
--  ),
--  (
--      "2",
--      "2",
--      "1",
--      "1",
--      "2026-10-30",
--      "Active",
--     "2026-10-30" 
--  ),(
--      "3",
--      "2",
--      "4",
--      "4",
--      "2026-10-30",
--      "Active",
--     "2026-10-30" 
--  )
--  ;
-- SELECT * FROM  student_enrollments;


-- CREATE TABLE result(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      enrollment_id INTEGER,
--      term_id INTEGER,
--      student_id INTEGER,
--      ca_score DECIMAL(5,2) DEFAULT 0,
--      exam_score DECIMAL(5,2) DEFAULT 0,
--      total_score DECIMAL(5,2) NOT NULL,
--      grade VARCHAR(2)  NULL,
--      remark  VARCHAR(30)  NULL,
--      teacher_comment TEXT NULL,
--      entered_by INTEGER,
--     created_at DATETIME NOT NULL,
--     updated_at DATETIME NOT NULL
--  );

-- INSERT INTO result(
--     enrollment_id,
--     term_id,
--     student_id,
--     ca_score,
--     exam_score,
--     total_score,
--     grade,
--     remark,
--     teacher_comment,
--     entered_by,
--     created_at,
--     updated_at
--  )
--  VALUES(
--     "1",
--     "1",
--     "1",
--     "25",
--     "65",
--     "90",
--     "A",
--     "Excellent",
--     "Excellent performance",
--     "Musa Sani",
--     "2026-10-30",
--     "2026-10-30"
-- );
-- SELECT * FROM  result;



-- CREATE TABLE result_approvals(
--      id INTEGER PRIMARY KEY AUTOINCREMENT,
--      class_id INTEGER,
--      class_arm_id INTEGER,
--      term_id INTEGER,
--      status VARCHAR(20) NOT NULL,
--      submitted_by INTERGER,
--      approved_by INTERGER,
--     submitted_at DATETIME NULL,
--     approved_at DATETIME NULL,
--     published_at DATETIME NULL
--  );

-- SELECT * FROM  result_approvals;