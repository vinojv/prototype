(window["webpackJsonp"] = window["webpackJsonp"] || []).push([[237],{

/***/ "../EVA Design System/node_modules/brace/mode/ocaml.js":
/***/ (function(module, exports) {

eval("ace.define(\"ace/mode/ocaml_highlight_rules\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text_highlight_rules\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextHighlightRules = acequire(\"./text_highlight_rules\").TextHighlightRules;\n\nvar OcamlHighlightRules = function() {\n\n    var keywords = (\n        \"and|as|assert|begin|class|constraint|do|done|downto|else|end|\"  +\n        \"exception|external|for|fun|function|functor|if|in|include|\"     +\n        \"inherit|initializer|lazy|let|match|method|module|mutable|new|\"  +\n        \"object|of|open|or|private|rec|sig|struct|then|to|try|type|val|\" +\n        \"virtual|when|while|with\"\n    );\n\n    var builtinConstants = (\"true|false\");\n\n    var builtinFunctions = (\n        \"abs|abs_big_int|abs_float|abs_num|abstract_tag|accept|access|acos|add|\" +\n        \"add_available_units|add_big_int|add_buffer|add_channel|add_char|\" +\n        \"add_initializer|add_int_big_int|add_interfaces|add_num|add_string|\" +\n        \"add_substitute|add_substring|alarm|allocated_bytes|allow_only|\" +\n        \"allow_unsafe_modules|always|append|appname_get|appname_set|\" +\n        \"approx_num_exp|approx_num_fix|arg|argv|arith_status|array|\" +\n        \"array1_of_genarray|array2_of_genarray|array3_of_genarray|asin|asr|\" +\n        \"assoc|assq|at_exit|atan|atan2|auto_synchronize|background|basename|\" +\n        \"beginning_of_input|big_int_of_int|big_int_of_num|big_int_of_string|bind|\" +\n        \"bind_class|bind_tag|bits|bits_of_float|black|blit|blit_image|blue|bool|\" +\n        \"bool_of_string|bounded_full_split|bounded_split|bounded_split_delim|\" +\n        \"bprintf|break|broadcast|bscanf|button_down|c_layout|capitalize|cardinal|\" +\n        \"cardinal|catch|catch_break|ceil|ceiling_num|channel|char|char_of_int|\" +\n        \"chdir|check|check_suffix|chmod|choose|chop_extension|chop_suffix|chown|\" +\n        \"chown|chr|chroot|classify_float|clear|clear_available_units|\" +\n        \"clear_close_on_exec|clear_graph|clear_nonblock|clear_parser|\" +\n        \"close|close|closeTk|close_box|close_graph|close_in|close_in_noerr|\" +\n        \"close_out|close_out_noerr|close_process|close_process|\" +\n        \"close_process_full|close_process_in|close_process_out|close_subwindow|\" +\n        \"close_tag|close_tbox|closedir|closedir|closure_tag|code|combine|\" +\n        \"combine|combine|command|compact|compare|compare_big_int|compare_num|\" +\n        \"complex32|complex64|concat|conj|connect|contains|contains_from|contents|\" +\n        \"copy|cos|cosh|count|count|counters|create|create_alarm|create_image|\" +\n        \"create_matrix|create_matrix|create_matrix|create_object|\" +\n        \"create_object_and_run_initializers|create_object_opt|create_process|\" +\n        \"create_process|create_process_env|create_process_env|create_table|\" +\n        \"current|current_dir_name|current_point|current_x|current_y|curveto|\" +\n        \"custom_tag|cyan|data_size|decr|decr_num|default_available_units|delay|\" +\n        \"delete_alarm|descr_of_in_channel|descr_of_out_channel|destroy|diff|dim|\" +\n        \"dim1|dim2|dim3|dims|dirname|display_mode|div|div_big_int|div_num|\" +\n        \"double_array_tag|double_tag|draw_arc|draw_char|draw_circle|draw_ellipse|\" +\n        \"draw_image|draw_poly|draw_poly_line|draw_rect|draw_segments|draw_string|\" +\n        \"dummy_pos|dummy_table|dump_image|dup|dup2|elements|empty|end_of_input|\" +\n        \"environment|eprintf|epsilon_float|eq_big_int|eq_num|equal|err_formatter|\" +\n        \"error_message|escaped|establish_server|executable_name|execv|execve|execvp|\" +\n        \"execvpe|exists|exists2|exit|exp|failwith|fast_sort|fchmod|fchown|field|\" +\n        \"file|file_exists|fill|fill_arc|fill_circle|fill_ellipse|fill_poly|fill_rect|\" +\n        \"filter|final_tag|finalise|find|find_all|first_chars|firstkey|flatten|\" +\n        \"float|float32|float64|float_of_big_int|float_of_bits|float_of_int|\" +\n        \"float_of_num|float_of_string|floor|floor_num|flush|flush_all|flush_input|\" +\n        \"flush_str_formatter|fold|fold_left|fold_left2|fold_right|fold_right2|\" +\n        \"for_all|for_all2|force|force_newline|force_val|foreground|fork|\" +\n        \"format_of_string|formatter_of_buffer|formatter_of_out_channel|\" +\n        \"fortran_layout|forward_tag|fprintf|frexp|from|from_channel|from_file|\" +\n        \"from_file_bin|from_function|from_string|fscanf|fst|fstat|ftruncate|\" +\n        \"full_init|full_major|full_split|gcd_big_int|ge_big_int|ge_num|\" +\n        \"genarray_of_array1|genarray_of_array2|genarray_of_array3|get|\" +\n        \"get_all_formatter_output_functions|get_approx_printing|get_copy|\" +\n        \"get_ellipsis_text|get_error_when_null_denominator|get_floating_precision|\" +\n        \"get_formatter_output_functions|get_formatter_tag_functions|get_image|\" +\n        \"get_margin|get_mark_tags|get_max_boxes|get_max_indent|get_method|\" +\n        \"get_method_label|get_normalize_ratio|get_normalize_ratio_when_printing|\" +\n        \"get_print_tags|get_state|get_variable|getcwd|getegid|getegid|getenv|\" +\n        \"getenv|getenv|geteuid|geteuid|getgid|getgid|getgrgid|getgrgid|getgrnam|\" +\n        \"getgrnam|getgroups|gethostbyaddr|gethostbyname|gethostname|getitimer|\" +\n        \"getlogin|getpeername|getpid|getppid|getprotobyname|getprotobynumber|\" +\n        \"getpwnam|getpwuid|getservbyname|getservbyport|getsockname|getsockopt|\" +\n        \"getsockopt_float|getsockopt_int|getsockopt_optint|gettimeofday|getuid|\" +\n        \"global_replace|global_substitute|gmtime|green|grid|group_beginning|\" +\n        \"group_end|gt_big_int|gt_num|guard|handle_unix_error|hash|hash_param|\" +\n        \"hd|header_size|i|id|ignore|in_channel_length|in_channel_of_descr|incr|\" +\n        \"incr_num|index|index_from|inet_addr_any|inet_addr_of_string|infinity|\" +\n        \"infix_tag|init|init_class|input|input_binary_int|input_byte|input_char|\" +\n        \"input_line|input_value|int|int16_signed|int16_unsigned|int32|int64|\" +\n        \"int8_signed|int8_unsigned|int_of_big_int|int_of_char|int_of_float|\" +\n        \"int_of_num|int_of_string|integer_num|inter|interactive|inv|invalid_arg|\" +\n        \"is_block|is_empty|is_implicit|is_int|is_int_big_int|is_integer_num|\" +\n        \"is_relative|iter|iter2|iteri|join|junk|key_pressed|kill|kind|kprintf|\" +\n        \"kscanf|land|last_chars|layout|lazy_from_fun|lazy_from_val|lazy_is_val|\" +\n        \"lazy_tag|ldexp|le_big_int|le_num|length|lexeme|lexeme_char|lexeme_end|\" +\n        \"lexeme_end_p|lexeme_start|lexeme_start_p|lineto|link|list|listen|lnot|\" +\n        \"loadfile|loadfile_private|localtime|lock|lockf|log|log10|logand|lognot|\" +\n        \"logor|logxor|lor|lower_window|lowercase|lseek|lsl|lsr|lstat|lt_big_int|\" +\n        \"lt_num|lxor|magenta|magic|mainLoop|major|major_slice|make|make_formatter|\" +\n        \"make_image|make_lexer|make_matrix|make_self_init|map|map2|map_file|mapi|\" +\n        \"marshal|match_beginning|match_end|matched_group|matched_string|max|\" +\n        \"max_array_length|max_big_int|max_elt|max_float|max_int|max_num|\" +\n        \"max_string_length|mem|mem_assoc|mem_assq|memq|merge|min|min_big_int|\" +\n        \"min_elt|min_float|min_int|min_num|minor|minus_big_int|minus_num|\" +\n        \"minus_one|mkdir|mkfifo|mktime|mod|mod_big_int|mod_float|mod_num|modf|\" +\n        \"mouse_pos|moveto|mul|mult_big_int|mult_int_big_int|mult_num|nan|narrow|\" +\n        \"nat_of_num|nativeint|neg|neg_infinity|new_block|new_channel|new_method|\" +\n        \"new_variable|next|nextkey|nice|nice|no_scan_tag|norm|norm2|not|npeek|\" +\n        \"nth|nth_dim|num_digits_big_int|num_dims|num_of_big_int|num_of_int|\" +\n        \"num_of_nat|num_of_ratio|num_of_string|O|obj|object_tag|ocaml_version|\" +\n        \"of_array|of_channel|of_float|of_int|of_int32|of_list|of_nativeint|\" +\n        \"of_string|one|openTk|open_box|open_connection|open_graph|open_hbox|\" +\n        \"open_hovbox|open_hvbox|open_in|open_in_bin|open_in_gen|open_out|\" +\n        \"open_out_bin|open_out_gen|open_process|open_process_full|open_process_in|\" +\n        \"open_process_out|open_subwindow|open_tag|open_tbox|open_temp_file|\" +\n        \"open_vbox|opendbm|opendir|openfile|or|os_type|out_channel_length|\" +\n        \"out_channel_of_descr|output|output_binary_int|output_buffer|output_byte|\" +\n        \"output_char|output_string|output_value|over_max_boxes|pack|params|\" +\n        \"parent_dir_name|parse|parse_argv|partition|pause|peek|pipe|pixels|\" +\n        \"place|plot|plots|point_color|polar|poll|pop|pos_in|pos_out|pow|\" +\n        \"power_big_int_positive_big_int|power_big_int_positive_int|\" +\n        \"power_int_positive_big_int|power_int_positive_int|power_num|\" +\n        \"pp_close_box|pp_close_tag|pp_close_tbox|pp_force_newline|\" +\n        \"pp_get_all_formatter_output_functions|pp_get_ellipsis_text|\" +\n        \"pp_get_formatter_output_functions|pp_get_formatter_tag_functions|\" +\n        \"pp_get_margin|pp_get_mark_tags|pp_get_max_boxes|pp_get_max_indent|\" +\n        \"pp_get_print_tags|pp_open_box|pp_open_hbox|pp_open_hovbox|pp_open_hvbox|\" +\n        \"pp_open_tag|pp_open_tbox|pp_open_vbox|pp_over_max_boxes|pp_print_as|\" +\n        \"pp_print_bool|pp_print_break|pp_print_char|pp_print_cut|pp_print_float|\" +\n        \"pp_print_flush|pp_print_if_newline|pp_print_int|pp_print_newline|\" +\n        \"pp_print_space|pp_print_string|pp_print_tab|pp_print_tbreak|\" +\n        \"pp_set_all_formatter_output_functions|pp_set_ellipsis_text|\" +\n        \"pp_set_formatter_out_channel|pp_set_formatter_output_functions|\" +\n        \"pp_set_formatter_tag_functions|pp_set_margin|pp_set_mark_tags|\" +\n        \"pp_set_max_boxes|pp_set_max_indent|pp_set_print_tags|pp_set_tab|\" +\n        \"pp_set_tags|pred|pred_big_int|pred_num|prerr_char|prerr_endline|\" +\n        \"prerr_float|prerr_int|prerr_newline|prerr_string|print|print_as|\" +\n        \"print_bool|print_break|print_char|print_cut|print_endline|print_float|\" +\n        \"print_flush|print_if_newline|print_int|print_newline|print_space|\" +\n        \"print_stat|print_string|print_tab|print_tbreak|printf|prohibit|\" +\n        \"public_method_label|push|putenv|quo_num|quomod_big_int|quote|raise|\" +\n        \"raise_window|ratio_of_num|rcontains_from|read|read_float|read_int|\" +\n        \"read_key|read_line|readdir|readdir|readlink|really_input|receive|recv|\" +\n        \"recvfrom|red|ref|regexp|regexp_case_fold|regexp_string|\" +\n        \"regexp_string_case_fold|register|register_exception|rem|remember_mode|\" +\n        \"remove|remove_assoc|remove_assq|rename|replace|replace_first|\" +\n        \"replace_matched|repr|reset|reshape|reshape_1|reshape_2|reshape_3|rev|\" +\n        \"rev_append|rev_map|rev_map2|rewinddir|rgb|rhs_end|rhs_end_pos|rhs_start|\" +\n        \"rhs_start_pos|rindex|rindex_from|rlineto|rmdir|rmoveto|round_num|\" +\n        \"run_initializers|run_initializers_opt|scanf|search_backward|\" +\n        \"search_forward|seek_in|seek_out|select|self|self_init|send|sendto|set|\" +\n        \"set_all_formatter_output_functions|set_approx_printing|\" +\n        \"set_binary_mode_in|set_binary_mode_out|set_close_on_exec|\" +\n        \"set_close_on_exec|set_color|set_ellipsis_text|\" +\n        \"set_error_when_null_denominator|set_field|set_floating_precision|\" +\n        \"set_font|set_formatter_out_channel|set_formatter_output_functions|\" +\n        \"set_formatter_tag_functions|set_line_width|set_margin|set_mark_tags|\" +\n        \"set_max_boxes|set_max_indent|set_method|set_nonblock|set_nonblock|\" +\n        \"set_normalize_ratio|set_normalize_ratio_when_printing|set_print_tags|\" +\n        \"set_signal|set_state|set_tab|set_tag|set_tags|set_text_size|\" +\n        \"set_window_title|setgid|setgid|setitimer|setitimer|setsid|setsid|\" +\n        \"setsockopt|setsockopt|setsockopt_float|setsockopt_float|setsockopt_int|\" +\n        \"setsockopt_int|setsockopt_optint|setsockopt_optint|setuid|setuid|\" +\n        \"shift_left|shift_left|shift_left|shift_right|shift_right|shift_right|\" +\n        \"shift_right_logical|shift_right_logical|shift_right_logical|show_buckets|\" +\n        \"shutdown|shutdown|shutdown_connection|shutdown_connection|sigabrt|\" +\n        \"sigalrm|sigchld|sigcont|sigfpe|sighup|sigill|sigint|sigkill|sign_big_int|\" +\n        \"sign_num|signal|signal|sigpending|sigpending|sigpipe|sigprocmask|\" +\n        \"sigprocmask|sigprof|sigquit|sigsegv|sigstop|sigsuspend|sigsuspend|\" +\n        \"sigterm|sigtstp|sigttin|sigttou|sigusr1|sigusr2|sigvtalrm|sin|singleton|\" +\n        \"sinh|size|size|size_x|size_y|sleep|sleep|sleep|slice_left|slice_left|\" +\n        \"slice_left_1|slice_left_2|slice_right|slice_right|slice_right_1|\" +\n        \"slice_right_2|snd|socket|socket|socket|socketpair|socketpair|sort|sound|\" +\n        \"split|split_delim|sprintf|sprintf|sqrt|sqrt|sqrt_big_int|square_big_int|\" +\n        \"square_num|sscanf|stable_sort|stable_sort|stable_sort|stable_sort|stable_sort|\" +\n        \"stable_sort|stat|stat|stat|stat|stat|stats|stats|std_formatter|stdbuf|\" +\n        \"stderr|stderr|stderr|stdib|stdin|stdin|stdin|stdout|stdout|stdout|\" +\n        \"str_formatter|string|string_after|string_before|string_match|\" +\n        \"string_of_big_int|string_of_bool|string_of_float|string_of_format|\" +\n        \"string_of_inet_addr|string_of_inet_addr|string_of_int|string_of_num|\" +\n        \"string_partial_match|string_tag|sub|sub|sub_big_int|sub_left|sub_num|\" +\n        \"sub_right|subset|subset|substitute_first|substring|succ|succ|\" +\n        \"succ|succ|succ_big_int|succ_num|symbol_end|symbol_end_pos|symbol_start|\" +\n        \"symbol_start_pos|symlink|symlink|sync|synchronize|system|system|system|\" +\n        \"tag|take|tan|tanh|tcdrain|tcdrain|tcflow|tcflow|tcflush|tcflush|\" +\n        \"tcgetattr|tcgetattr|tcsendbreak|tcsendbreak|tcsetattr|tcsetattr|\" +\n        \"temp_file|text_size|time|time|time|timed_read|timed_write|times|times|\" +\n        \"tl|tl|tl|to_buffer|to_channel|to_float|to_hex|to_int|to_int32|to_list|\" +\n        \"to_list|to_list|to_nativeint|to_string|to_string|to_string|to_string|\" +\n        \"to_string|top|top|total_size|transfer|transp|truncate|truncate|truncate|\" +\n        \"truncate|truncate|truncate|try_lock|umask|umask|uncapitalize|uncapitalize|\" +\n        \"uncapitalize|union|union|unit_big_int|unlink|unlink|unlock|unmarshal|\" +\n        \"unsafe_blit|unsafe_fill|unsafe_get|unsafe_get|unsafe_set|unsafe_set|\" +\n        \"update|uppercase|uppercase|uppercase|uppercase|usage|utimes|utimes|wait|\" +\n        \"wait|wait|wait|wait_next_event|wait_pid|wait_read|wait_signal|\" +\n        \"wait_timed_read|wait_timed_write|wait_write|waitpid|white|\" +\n        \"widen|window_id|word_size|wrap|wrap_abort|write|yellow|yield|zero|zero_big_int|\" +\n\n        \"Arg|Arith_status|Array|Array1|Array2|Array3|ArrayLabels|Big_int|Bigarray|\" +\n        \"Buffer|Callback|CamlinternalOO|Char|Complex|Condition|Dbm|Digest|Dynlink|\" +\n        \"Event|Filename|Format|Gc|Genarray|Genlex|Graphics|GraphicsX11|Hashtbl|\" +\n        \"Int32|Int64|LargeFile|Lazy|Lexing|List|ListLabels|Make|Map|Marshal|\" +\n        \"MoreLabels|Mutex|Nativeint|Num|Obj|Oo|Parsing|Pervasives|Printexc|\" +\n        \"Printf|Queue|Random|Scanf|Scanning|Set|Sort|Stack|State|StdLabels|Str|\" +\n        \"Stream|String|StringLabels|Sys|Thread|ThreadUnix|Tk|Unix|UnixLabels|Weak\"\n    );\n\n    var keywordMapper = this.createKeywordMapper({\n        \"variable.language\": \"this\",\n        \"keyword\": keywords,\n        \"constant.language\": builtinConstants,\n        \"support.function\": builtinFunctions\n    }, \"identifier\");\n\n    var decimalInteger = \"(?:(?:[1-9]\\\\d*)|(?:0))\";\n    var octInteger = \"(?:0[oO]?[0-7]+)\";\n    var hexInteger = \"(?:0[xX][\\\\dA-Fa-f]+)\";\n    var binInteger = \"(?:0[bB][01]+)\";\n    var integer = \"(?:\" + decimalInteger + \"|\" + octInteger + \"|\" + hexInteger + \"|\" + binInteger + \")\";\n\n    var exponent = \"(?:[eE][+-]?\\\\d+)\";\n    var fraction = \"(?:\\\\.\\\\d+)\";\n    var intPart = \"(?:\\\\d+)\";\n    var pointFloat = \"(?:(?:\" + intPart + \"?\" + fraction + \")|(?:\" + intPart + \"\\\\.))\";\n    var exponentFloat = \"(?:(?:\" + pointFloat + \"|\" +  intPart + \")\" + exponent + \")\";\n    var floatNumber = \"(?:\" + exponentFloat + \"|\" + pointFloat + \")\";\n\n    this.$rules = {\n        \"start\" : [\n            {\n                token : \"comment\",\n                regex : '\\\\(\\\\*.*?\\\\*\\\\)\\\\s*?$'\n            },\n            {\n                token : \"comment\",\n                regex : '\\\\(\\\\*.*',\n                next : \"comment\"\n            },\n            {\n                token : \"string\", // single line\n                regex : '[\"](?:(?:\\\\\\\\.)|(?:[^\"\\\\\\\\]))*?[\"]'\n            },\n            {\n                token : \"string\", // single char\n                regex : \"'.'\"\n            },\n            {\n                token : \"string\", // \" string\n                regex : '\"',\n                next  : \"qstring\"\n            },\n            {\n                token : \"constant.numeric\", // imaginary\n                regex : \"(?:\" + floatNumber + \"|\\\\d+)[jJ]\\\\b\"\n            },\n            {\n                token : \"constant.numeric\", // float\n                regex : floatNumber\n            },\n            {\n                token : \"constant.numeric\", // integer\n                regex : integer + \"\\\\b\"\n            },\n            {\n                token : keywordMapper,\n                regex : \"[a-zA-Z_$][a-zA-Z0-9_$]*\\\\b\"\n            },\n            {\n                token : \"keyword.operator\",\n                regex : \"\\\\+\\\\.|\\\\-\\\\.|\\\\*\\\\.|\\\\/\\\\.|#|;;|\\\\+|\\\\-|\\\\*|\\\\*\\\\*\\\\/|\\\\/\\\\/|%|<<|>>|&|\\\\||\\\\^|~|<|>|<=|=>|==|!=|<>|<-|=\"\n            },\n            {\n                token : \"paren.lparen\",\n                regex : \"[[({]\"\n            },\n            {\n                token : \"paren.rparen\",\n                regex : \"[\\\\])}]\"\n            },\n            {\n                token : \"text\",\n                regex : \"\\\\s+\"\n            }\n        ],\n        \"comment\" : [\n            {\n                token : \"comment\", // closing comment\n                regex : \"\\\\*\\\\)\",\n                next : \"start\"\n            },\n            {\n                defaultToken : \"comment\"\n            }\n        ],\n\n        \"qstring\" : [\n            {\n                token : \"string\",\n                regex : '\"',\n                next : \"start\"\n            }, {\n                token : \"string\",\n                regex : '.+'\n            }\n        ]\n    };\n};\n\noop.inherits(OcamlHighlightRules, TextHighlightRules);\n\nexports.OcamlHighlightRules = OcamlHighlightRules;\n});\n\nace.define(\"ace/mode/matching_brace_outdent\",[\"require\",\"exports\",\"module\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar Range = acequire(\"../range\").Range;\n\nvar MatchingBraceOutdent = function() {};\n\n(function() {\n\n    this.checkOutdent = function(line, input) {\n        if (! /^\\s+$/.test(line))\n            return false;\n\n        return /^\\s*\\}/.test(input);\n    };\n\n    this.autoOutdent = function(doc, row) {\n        var line = doc.getLine(row);\n        var match = line.match(/^(\\s*\\})/);\n\n        if (!match) return 0;\n\n        var column = match[1].length;\n        var openBracePos = doc.findMatchingBracket({row: row, column: column});\n\n        if (!openBracePos || openBracePos.row == row) return 0;\n\n        var indent = this.$getIndent(doc.getLine(openBracePos.row));\n        doc.replace(new Range(row, 0, row, column-1), indent);\n    };\n\n    this.$getIndent = function(line) {\n        return line.match(/^\\s*/)[0];\n    };\n\n}).call(MatchingBraceOutdent.prototype);\n\nexports.MatchingBraceOutdent = MatchingBraceOutdent;\n});\n\nace.define(\"ace/mode/ocaml\",[\"require\",\"exports\",\"module\",\"ace/lib/oop\",\"ace/mode/text\",\"ace/mode/ocaml_highlight_rules\",\"ace/mode/matching_brace_outdent\",\"ace/range\"], function(acequire, exports, module) {\n\"use strict\";\n\nvar oop = acequire(\"../lib/oop\");\nvar TextMode = acequire(\"./text\").Mode;\nvar OcamlHighlightRules = acequire(\"./ocaml_highlight_rules\").OcamlHighlightRules;\nvar MatchingBraceOutdent = acequire(\"./matching_brace_outdent\").MatchingBraceOutdent;\nvar Range = acequire(\"../range\").Range;\n\nvar Mode = function() {\n    this.HighlightRules = OcamlHighlightRules;\n    this.$behaviour = this.$defaultBehaviour;\n    \n    this.$outdent   = new MatchingBraceOutdent();\n};\noop.inherits(Mode, TextMode);\n\nvar indenter = /(?:[({[=:]|[-=]>|\\b(?:else|try|with))\\s*$/;\n\n(function() {\n\n    this.toggleCommentLines = function(state, doc, startRow, endRow) {\n        var i, line;\n        var outdent = true;\n        var re = /^\\s*\\(\\*(.*)\\*\\)/;\n\n        for (i=startRow; i<= endRow; i++) {\n            if (!re.test(doc.getLine(i))) {\n                outdent = false;\n                break;\n            }\n        }\n\n        var range = new Range(0, 0, 0, 0);\n        for (i=startRow; i<= endRow; i++) {\n            line = doc.getLine(i);\n            range.start.row  = i;\n            range.end.row    = i;\n            range.end.column = line.length;\n\n            doc.replace(range, outdent ? line.match(re)[1] : \"(*\" + line + \"*)\");\n        }\n    };\n\n    this.getNextLineIndent = function(state, line, tab) {\n        var indent = this.$getIndent(line);\n        var tokens = this.getTokenizer().getLineTokens(line, state).tokens;\n\n        if (!(tokens.length && tokens[tokens.length - 1].type === 'comment') &&\n            state === 'start' && indenter.test(line))\n            indent += tab;\n        return indent;\n    };\n\n    this.checkOutdent = function(state, line, input) {\n        return this.$outdent.checkOutdent(line, input);\n    };\n\n    this.autoOutdent = function(state, doc, row) {\n        this.$outdent.autoOutdent(doc, row);\n    };\n\n    this.$id = \"ace/mode/ocaml\";\n}).call(Mode.prototype);\n\nexports.Mode = Mode;\n});\n\n\n//# sourceURL=webpack:///../EVA_Design_System/node_modules/brace/mode/ocaml.js?");

/***/ })

}]);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiIyMzcuZTY2YWFmMjg0NTQ2MGMzNmMyNmMuY2h1bmsuanMiLCJzb3VyY2VSb290IjoiIn0=